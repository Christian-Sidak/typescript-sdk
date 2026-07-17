/**
 * Regression test for https://github.com/modelcontextprotocol/typescript-sdk/issues/2273
 *
 * package.json advertises a root "." export pointing at
 * dist/{esm,cjs}/index.{js,d.ts}, but src/index.ts did not exist, so tsc
 * never emitted those files and the root import failed at runtime.
 */

import { Client, LATEST_PROTOCOL_VERSION, Server } from '../../src/index.js';

describe('Issue #2273: root package export', () => {
    test('exports Client, Server, and shared protocol constants', () => {
        expect(typeof Client).toBe('function');
        expect(typeof Server).toBe('function');
        expect(LATEST_PROTOCOL_VERSION).toBe('2025-11-25');
    });

    test('constructs a client and server from the root export', () => {
        expect(() => new Client({ name: 'test client', version: '1.0' })).not.toThrow();
        expect(() => new Server({ name: 'test server', version: '1.0' })).not.toThrow();
    });
});
