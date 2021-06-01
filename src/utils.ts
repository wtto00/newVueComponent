import * as vscode from 'vscode';

import fs = require('fs');
import path = require('path');

export function genVueFileCode(dir: string, fileName: string) {
  const { scrpitSetup, vue3, ts, style, separateStyle, separateScript, folder } = vscode.workspace.getConfiguration('newVueFile');
  try {
    let basePath = dir;
    if (folder) {
      basePath = path.join(basePath, fileName);
      if (!fs.existsSync(basePath)) {
        fs.mkdirSync(path.join(dir, fileName));
      } else {
        const file = fs.statSync(basePath);
        if (!file.isDirectory()) {
          vscode.window.showInformationMessage('此目录已存在同名文件');
          return;
        }
      }
    }
    const jsFile = `${fileName}.${ts ? 'ts' : 'js'}`;
    const cssFile = `${fileName}.${style}`;
    const vueFile = `${fileName}.vue`;

    const scriptContent = vue3
      ? `import { defineComponent } from 'vue';

export default defineComponent({
  setup() {

  },
})
`
      : `export default {
  data() {
    return {}
  },
}
`;
    let scriptAttr = '';
    let vueScriptContent = '';
    if (ts) {
      scriptAttr += ' lang="ts"';
    }
    if (separateScript) {
      scriptAttr += ' src="./' + jsFile + '"';
    } else {
      if (vue3 && scrpitSetup) {
        scriptAttr += ' setup';
        vueScriptContent = `

`;
      } else {
        vueScriptContent = `
${scriptContent}`;
      }
    }

    if (separateScript) {
      fs.writeFileSync(path.join(basePath, jsFile), scriptContent);
    }

    let styleAttr = '';
    if (style !== 'css') {
      styleAttr += ' lang="' + style + '"';
    }
    if (separateStyle) {
      styleAttr += ' src="./' + cssFile + '"';
      fs.writeFileSync(path.join(basePath, cssFile), '');
    }

    const vueContent = `<template>
  <div>${fileName}</div>
</template>

<script${scriptAttr}>${vueScriptContent}<\/script>

<style${styleAttr}>${separateStyle ? '' : '\n\n'}<\/style>`;
    fs.writeFileSync(path.join(basePath, vueFile), vueContent);
  } catch (error) {
    vscode.window.showInformationMessage(error.message);
  }
}
