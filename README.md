# MCP-Trace

Cursor connects to remote MCP servers via `mcp-remote`.  
This project provides a small hook so that all such traffic is forced through your local proxy (e.g. Burp Suite), making it visible for auditing and debugging.

---

## Usage

1. **Clone the project**
   ```bash
   git clone https://github.com/13ph03nix/mcp-trace.git
   ```

2. **Open the project in Cursor**  
   Cursor will start `mcp-remote` with the preload hook (`mcp-trace/proxy-preload.cjs`).  
   All MCP traffic will then flow through `127.0.0.1:8080` (Burp’s default proxy).

3. **Configure Burp**  
   Ensure Burp is listening on `127.0.0.1:8080`.  
   It’s also recommended to set Burp as the proxy in Cursor’s VSCode settings.

---

## Tips

- OAuth DCR cache is stored under:
  ```
  ~/.mcp-auth/
  ```
  Delete files here to clear cached tokens and force re-authentication.

---
