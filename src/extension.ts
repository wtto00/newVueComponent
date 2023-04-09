// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import localize from "./i18n";
import { genVueFileCode } from './utils';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "newvuecomponent" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const newVueComponent = vscode.commands.registerCommand('newVueComponent.newVueComponent', async (uri: vscode.Uri) => {
    // The code you place here will be executed every time your command is executed
    const name = 'newVueComponent';
		const result = await vscode.window.showInputBox({
			value: name,
			valueSelection: [0, name.length],
			placeHolder: localize("componentName"),
		});
		if (!result?.trim()) {
			vscode.window.showInformationMessage(localize("vueComponentName"));
			return;
		}
		
    const dirPath = uri.fsPath;
    genVueFileCode(dirPath,result);
  });

  context.subscriptions.push(newVueComponent);

  const newVueComponentWithoutFolder = vscode.commands.registerCommand('newVueComponent.newVueComponentWithoutFolder', async (uri: vscode.Uri) => {
    const name = 'newVueComponentWithoutFolder';
		const result = await vscode.window.showInputBox({
			value: name,
			valueSelection: [0, name.length],
			placeHolder: localize("componentName"),
		});
		if (!result?.trim()) {
			vscode.window.showInformationMessage(localize("vueComponentName"));
			return;
		}
		
    const dirPath = uri.fsPath;
    genVueFileCode(dirPath, result, true);
  });

	context.subscriptions.push(newVueComponentWithoutFolder);
}

// This method is called when your extension is deactivated
export function deactivate() {
	// do nothing
}
