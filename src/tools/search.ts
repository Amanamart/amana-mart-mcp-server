import { server } from "../server.js";
import { SearchQuerySchema } from "../schemas/common.js";
import { apiClient } from "../core/apiClient.js";

server.tool(
  "global_search",
  "Search products, services, ads, and stores across all AmanaMart modules",
  SearchQuerySchema.shape,
  async (args) => {
    try {
      const response = await apiClient.get("/search", { params: args });
      return {
        content: [{ type: "text", text: JSON.stringify(response.data, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text", text: `Search failed: ${error.message}` }],
        isError: true,
      };
    }
  }
);
