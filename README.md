# New Vue File

在 VS Code 中快速创建 vue 组件。

### Install

- VS Code 中搜索插件 `new-vue-file`
- 插件市场 [查看](https://marketplace.visualstudio.com/items?itemName=wtto00.new-vue-file)

### Use

在资源管理器中右键目录，选择 **创建 Vue 组件** ，输入组件名称，即可快速创建 Vue 组件

### Settings

| key                       | type    | values               | description                                   |
| ------------------------- | ------- | -------------------- | --------------------------------------------- |
| newVueFile.vue3           | boolean | true/false           | 是否使用 Vue3 版本                            |
| newVueFile.ts             | boolean | true/false           | 是否使用 typescript                           |
| newVueFile.separateScript | boolean | true/false           | script 文件是否单独分离                       |
| newVueFile.style          | string  | css/scss/less/stylus | 选择 css 预处理语言                           |
| newVueFile.separateStyle  | boolean | true/false           | style 文件是否单独分离                        |
| newVueFile.scopedStyle    | boolean | true/false           | style 样式是否组件隔离                        |
| newVueFile.scrpitSetup    | boolean | true/false           | 是否使用 script setup 模式(vue3=false 时无效) |
| newVueFile.folder         | boolean | true/false           | 是否创建同名目录                              |

### Default Setting

```json
{
  "newVueFile.vue3": true,
  "newVueFile.ts": false,
  "newVueFile.separateScript": false,
  "newVueFile.style": "css",
  "newVueFile.separateStyle": false,
  "newVueFile.scopedStyle": true,
  "newVueFile.scrpitSetup": false,
  "newVueFile.folder": true
}
```
