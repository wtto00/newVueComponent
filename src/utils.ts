import * as vscode from 'vscode';
import localize from "./i18n";

import fs = require('fs');
import path = require('path');

export function genVueFileCode(dir: string, fileName: string, withoutFolder: boolean = false) {
  const { scrpitSetup, vue3, ts, style, styleSeparate, styleScoped, scriptSeparate, folder } = vscode.workspace.getConfiguration('newVueComponent');
  try {
    let basePath = dir;
    if (folder && !withoutFolder) {
      basePath = path.join(basePath, fileName);
      if (!fs.existsSync(basePath)) {
        fs.mkdirSync(path.join(dir, fileName));
      } else {
        const file = fs.statSync(basePath);
        if (!file.isDirectory()) {
          vscode.window.showInformationMessage(localize('sameFileName'));
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
    if (scriptSeparate) {
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

    if (scriptSeparate) {
      fs.writeFileSync(path.join(basePath, jsFile), scriptContent);
    }

    let styleAttr = '';
    if (style !== 'css') {
      styleAttr += ' lang="' + style + '"';
    }
    if (styleSeparate) {
      styleAttr += ' src="./' + cssFile + '"';
      fs.writeFileSync(path.join(basePath, cssFile), '');
    }
    if (styleScoped) {
      styleAttr += ' scoped';
    }

    const vueContent = `<template>
  <div>${fileName}</div>
</template>

<script${scriptAttr}>${vueScriptContent}<\/script>

<style${styleAttr}>${styleSeparate ? '' : '\n\n'}<\/style>
`;
const vueFielPath = path.join(basePath, vueFile);
    fs.writeFileSync(vueFielPath, vueContent);

    vscode.workspace.openTextDocument(vueFielPath)
    .then((doc:any) => {
        // 在VSCode编辑窗口展示读取到的文本
        vscode.window.showTextDocument(doc);
    }, err => {
        console.log(`Open ${vueFielPath} error, ${err}.`);
    }).then(undefined, err => {
        console.log(`Open ${vueFielPath} error, ${err}.`);
    });

  } catch (error:any) {
    vscode.window.showInformationMessage(error.message);
  }
}
