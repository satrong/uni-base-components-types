import * as fs from 'fs'
import * as path from 'path'

import TAGS from '@dcloudio/uni-helper-json/dist/tags.json'
import ATTRS from '@dcloudio/uni-helper-json/dist/attributes.json'

import { baseTpl } from './tpl'

type Tags = Record<string, { description: string; attributes?: string[] }>

const baseType = ['number', 'string', 'array', 'object', 'boolean']

function toCamel(str: string, isUpper = true) {
  return str.split('-').map((s, index) => {
    const firstWord = s.charAt(0)
    return (!isUpper && index === 0 ? firstWord.toLowerCase() : firstWord.toUpperCase()) + s.slice(1)
  }).join('')
}

function getType(type: string) {
  return type.toLowerCase().split('|').map(el => {
    let t = ''
    if (baseType.includes(el)) t = el
    else t = baseType.find(e => el.indexOf(e) > -1) || 'string'

    switch (t) {
      case 'array': return 'any[]';
      case 'object': return 'Record<string, any>';
      default: return t
    }
  }).join(' | ')
}

function tpl(tag: string, props: Record<string, any>[], description: string) {
  const propsStr = props.map((item) => {
    const type = item.type !== 'Boolean' && item.options ? item.options.map((el: string) => `'${el}'`).join(' | ') : getType(item.type)
    return `  /** ${item.description} */
  ${toCamel(item.attrName, false)}: ${type};`
  }).join('\n')

  return `/** ${description} */
type T${toCamel(tag)} = TComponent<{
${propsStr}
}, {}>;`
}

async function bootstrap() {
  const tagsData: Tags = TAGS
  const tags: string[] = []
  const contents: string[] = []
  for (const [key, val] of Object.entries(tagsData)) {
    let attrs: Record<string, any>[] = []
    if (val.attributes) {
      attrs = [...new Set(val.attributes)].map(el => {
        const v = ATTRS[el as keyof typeof ATTRS]
        if (v) return { attrName: el, ...v }
        return null
      }).filter(Boolean) as Record<string, any>[]
    }
    contents.push(tpl(key, attrs, val.description))
    tags.push(toCamel(key))
  }

  const results = baseTpl + contents.join('\n\n') + `\n
declare module 'vue' {
  export interface GlobalComponents {
${tags.map(el => `    ${el}: T${el};`).join('\n')}
  }
}
`

  await fs.promises.writeFile(path.resolve('./index.d.ts'), results, 'utf8')
}

bootstrap()
