# New Vue File

在 VS Code 中快速创建 vue 组件。

### Install

- VS Code 中搜索插件 `newVueComponent`
- 插件市场 [查看](https://marketplace.visualstudio.com/items?itemName=wtto00.newVueComponent)

### Use

在资源管理器中右键目录，选择 **创建 Vue 组件** ，输入组件名称，即可快速创建 Vue 组件

### Settings

| key                            | type    | values               | description                                   |
| ------------------------------ | ------- | -------------------- | --------------------------------------------- |
| newVueComponent.vue3           | boolean | true/false           | 是否使用 Vue3 版本                            |
| newVueComponent.ts             | boolean | true/false           | 是否使用 typescript                           |
| newVueComponent.scriptSeparate | boolean | true/false           | script 文件是否单独分离                       |
| newVueComponent.scrpitSetup    | boolean | true/false           | 是否使用 script setup 模式(vue3=false 时无效) |
| newVueComponent.style          | string  | css/scss/less/stylus | 选择 css 预处理语言                           |
| newVueComponent.styleSeparate  | boolean | true/false           | style 文件是否单独分离                        |
| newVueComponent.styleScoped    | boolean | true/false           | style 样式是否组件隔离                        |
| newVueComponent.folder         | boolean | true/false           | 是否创建同名目录                              |

### Default Setting

```json
{
  "newVueComponent.vue3": true,
  "newVueComponent.ts": false,
  "newVueComponent.scriptSeparate": false,
  "newVueComponent.scrpitSetup": false,
  "newVueComponent.style": "css",
  "newVueComponent.styleSeparate": false,
  "newVueComponent.styleScoped": true,
  "newVueComponent.folder": true
}
```
