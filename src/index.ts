import { startServer } from "./server.js";
import "./tools/search.js";
import "./tools/auth.js";
import "./tools/orders.js";
import "./tools/admin.js";
import "./tools/delivery.js";

startServer().catch((error) => {
  console.error("Failed to start MCP server:", error);
  process.exit(1);
});
