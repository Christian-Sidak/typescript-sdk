/**
 * Model Context Protocol SDK for TypeScript.
 *
 * This root module re-exports the most commonly used pieces of the SDK so
 * that consumers can do:
 * ```typescript
 * import { Client, Server } from '@modelcontextprotocol/sdk';
 * ```
 *
 * For more specific imports, prefer the dedicated subpaths, e.g.
 * `@modelcontextprotocol/sdk/client` or `@modelcontextprotocol/sdk/server`.
 */

export * from './types.js';
export * from './client/index.js';
export * from './server/index.js';
