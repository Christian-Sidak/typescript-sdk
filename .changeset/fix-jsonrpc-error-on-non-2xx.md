---
'@modelcontextprotocol/client': patch
---

Route well-formed JSON-RPC error bodies from non-2xx HTTP responses through `onmessage` so callers receive a typed `ProtocolError` with `code` and `data` fields, consistent with the 200-OK path, instead of an opaque `SdkError` that embeds the error as a string.
