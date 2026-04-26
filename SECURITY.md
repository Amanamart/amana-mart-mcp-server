# Security Policy

## Principles
1. **No Direct DB Access**: The MCP server strictly communicates via the Backend API.
2. **Read-Only by Default**: Writing tools require explicit confirmation in the MCP client.
3. **Role-Based Access**: Permissions are enforced by the Backend API based on the user's token.
4. **No Shell Execution**: The server does not execute any system commands.

## Authentication
The server uses token-based authentication. Tokens are passed through the `apiClient` to the backend.

## Audit Logs
All destructive or "write" actions are logged on the backend for audit purposes.
