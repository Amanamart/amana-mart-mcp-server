import { server } from "../server.js";
import { apiClient } from "../core/apiClient.js";
import { z } from "zod";

server.tool(
  "auth_me",
  "Returns the currently logged-in user details from AmanaMart",
  {},
  async () => {
    try {
      const response = await apiClient.get("/auth/me");
      return {
        content: [{ type: "text", text: JSON.stringify(response.data, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text", text: `Auth check failed: ${error.message}. Please ensure you are logged in.` }],
        isError: true,
      };
    }
  }
);
