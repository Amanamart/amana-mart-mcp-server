import { server } from "../server.js";
import { apiClient } from "../core/apiClient.js";
import { z } from "zod";

server.tool(
  "admin_get_dashboard_summary",
  "Get a summary of the admin dashboard (stats, revenue, orders)",
  {},
  async () => {
    try {
      const response = await apiClient.get("/admin/dashboard");
      return {
        content: [{ type: "text", text: JSON.stringify(response.data, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text", text: `Failed to get dashboard summary: ${error.message}` }],
        isError: true,
      };
    }
  }
);
