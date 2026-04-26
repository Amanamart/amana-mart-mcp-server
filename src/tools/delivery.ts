import { server } from "../server.js";
import { apiClient } from "../core/apiClient.js";
import { z } from "zod";

server.tool(
  "delivery_list_jobs",
  "List assigned delivery jobs for the currently logged-in delivery person",
  {
    status: z.string().optional(),
  },
  async (params) => {
    try {
      const response = await apiClient.get("/delivery/jobs", { params });
      return {
        content: [{ type: "text", text: JSON.stringify(response.data, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text", text: `Failed to list delivery jobs: ${error.message}` }],
        isError: true,
      };
    }
  }
);
