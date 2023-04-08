import * as vscode from 'vscode';
const en = require('../locales/en.json');
const zh = require('../locales/zh-CN.json');

const locale = vscode.env.language.startsWith('zh-') ? zh : en;

export default (key:string) => {
  try {
    return locale[key] ?? key;
  } catch (error) {
    return key;
  }
};