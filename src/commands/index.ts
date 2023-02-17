/*---------------------------------------------------------
 * Copyright 2022 The Go Authors. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------*/

import * as vscode from 'vscode';

import { GoExtensionContext } from '../context';

type CommandCallback<T extends unknown[]> = (...args: T) => Promise<unknown> | unknown;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CommandFactory<T extends unknown[] = any[]> = (
  ctx: vscode.ExtensionContext,
  goCtx: GoExtensionContext
) => CommandCallback<T>;

export function createRegisterCommand(ctx: vscode.ExtensionContext, goCtx: GoExtensionContext) {
  return function registerCommand(name: string, fn: CommandFactory) {
    ctx.subscriptions.push(vscode.commands.registerCommand(name, fn(ctx, goCtx)));
  };
}
