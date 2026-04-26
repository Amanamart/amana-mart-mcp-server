import dotenv from 'dotenv';
dotenv.config();

export const config = {
  apiUrl: process.env.AMANAMART_API_URL || 'http://localhost:5000',
  serverName: process.env.MCP_SERVER_NAME || 'amana-mart-mcp-server',
  readonlyMode: process.env.MCP_READONLY_MODE === 'true',
  logLevel: process.env.LOG_LEVEL || 'info',
};
