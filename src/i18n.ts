import * as vscode from 'vscode';
import en = require( './locales/en.json' );
import zh = require( './locales/zh-CN.json' );

const locale = vscode.env.language.startsWith('zh-') ? zh : en;

export default (key:keyof typeof locale) => {
  try {
    return locale[key] ?? key;
  } catch (error) {
    return key;
  }
};