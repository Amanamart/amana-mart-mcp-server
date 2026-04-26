import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { config } from "./core/config.js";

export const server = new McpServer({
  name: config.serverName,
  version: "1.0.0",
});

export const startServer = async () => {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(`MCP Server "${config.serverName}" started on stdio`);
};
