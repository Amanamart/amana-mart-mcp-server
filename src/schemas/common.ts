import { z } from "zod";

export const PaginationSchema = z.object({
  page: z.number().optional().default(1),
  limit: z.number().optional().default(10),
});

export const SearchQuerySchema = z.object({
  q: z.string().min(1, "Search query is required"),
  module: z.string().optional(),
  zone: z.string().optional(),
  ...PaginationSchema.shape,
});
