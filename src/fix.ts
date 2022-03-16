/**
 * 针对处理多个组件属性同名，而 attributes.json 中只能存一个属性，
 * 导致最后得到的类型错误（vetur 的 attributes.json 问题）
 */
export default {
  picker: {
    mode: {
      description: 'selector 普通选择器, multiSelector 多列选择器, time 时间选择器, date 日期选择器, region 省市区选择器',
      type: 'String',
      options: ['selector', 'multiSelector', 'time', 'date', 'region']
    }
  }
} as Record<string, Record<string, { description: any; type: any; options: any; }>>
