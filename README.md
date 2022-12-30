### 此仓库不再维护，请使用 [uni-app-types](https://github.com/uni-helper/uni-app-types) 替代

# uni-base-components-types


> 将 [__@dcloudio/uni-helper-json__](https://www.npmjs.com/package/@dcloudio/uni-helper-json) 的 json 文件转换成 `.d.ts`，使得在使用 Volar 插件时 uni-app 的基础组件有代码提示

## 使用方法

1. 安装依赖

```bash
npm i -D uni-base-components-types
```

2. 配置 _ts.config.json_ 文件
在 `types` 字段中添加 `uni-base-components-types`

```json
{
  "compilerOptions": {
    "types": ["uni-base-components-types"],
  },
}
```

3. 重启 vscode
