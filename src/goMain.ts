import vscode = require('vscode');
import extensionAPI from './extensionAPI';
import { offerToInstallTools, promptForMissingTool, updateGoVarsFromConfig, suggestUpdates } from './goInstallTools';
import { ExtensionAPI } from './export';
import { GoExtensionContext } from './context';
import * as commands from './commands';
import * as tools from './tools';

const goCtx: GoExtensionContext = {};

export async function activate(ctx: vscode.ExtensionContext): Promise<ExtensionAPI | undefined> {
  await updateGoVarsFromConfig(goCtx);
  const registerCommand = commands.createRegisterCommand(ctx, goCtx);
  registerCommand('gorefactor.refillstruct', tools.runRefillStruct);
  return extensionAPI;
}

export function deactivate() {}
