import { server } from "../server.js";
import { apiClient } from "../core/apiClient.js";
import { z } from "zod";

server.tool(
  "get_order_status",
  "Get the status of an order by its ID",
  {
    orderId: z.string().min(1, "Order ID is required"),
  },
  async ({ orderId }) => {
    try {
      const response = await apiClient.get(`/orders/${orderId}`);
      return {
        content: [{ type: "text", text: JSON.stringify(response.data, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text", text: `Failed to get order status: ${error.message}` }],
        isError: true,
      };
    }
  }
);

server.tool(
  "vendor_list_orders",
  "List orders for the currently logged-in vendor",
  {
    status: z.string().optional(),
    page: z.number().optional().default(1),
    limit: z.number().optional().default(10),
  },
  async (params) => {
    try {
      const response = await apiClient.get("/vendor/orders", { params });
      return {
        content: [{ type: "text", text: JSON.stringify(response.data, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text", text: `Failed to list vendor orders: ${error.message}` }],
        isError: true,
      };
    }
  }
);
