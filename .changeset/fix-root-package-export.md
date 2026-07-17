---
'@modelcontextprotocol/sdk': patch
---

Add the missing `src/index.ts` root entrypoint so the published package's root export (`.`) resolves to real `dist/esm/index.js`, `dist/esm/index.d.ts`, and `dist/cjs/index.js` files instead of failing with `ERR_MODULE_NOT_FOUND`.
