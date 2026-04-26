# AmanaMart MCP Server

Official Model Context Protocol (MCP) server for AmanaMart AI-agent integration. This server allows AI agents to interact with the AmanaMart ecosystem through a set of secure tools.

## Features
- **Global Search**: Search across products, ads, and stores.
- **Order Management**: Track orders for customers and vendors.
- **Delivery Tracking**: Manage jobs for delivery riders.
- **Admin Insights**: Dashboard summaries for administrators.

## Setup

### Prerequisites
- Node.js (v18+)
- pnpm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Amanamart/amana-mart-mcp-server.git
   cd amana-mart-mcp-server
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Configure environment variables:
   ```bash
   cp .env.example .env
   # Update AMANAMART_API_URL if necessary
   ```

### Running the Server
```bash
# Development mode
pnpm dev

# Build and start
pnpm build
pnpm start
```

## Available Tools
See [MCP_TOOLS.md](./MCP_TOOLS.md) for a detailed list of available tools.

## Security
This server acts as a bridge to the AmanaMart Backend API. It does not have direct database access. For more details, see [SECURITY.md](./SECURITY.md).
