# AmanaMart MCP Tools Reference

| Tool Name | Purpose | Role | Backend Endpoint |
|-----------|---------|------|------------------|
| `auth_me` | Get current user info | Any | `GET /api/auth/me` |
| `global_search` | Search products/ads/stores | Any | `GET /api/search` |
| `get_order_status` | Track order by ID | Customer/Admin | `GET /api/orders/:id` |
| `vendor_list_orders` | View vendor orders | Vendor | `GET /api/vendor/orders` |
| `delivery_list_jobs` | View delivery jobs | Rider | `GET /api/delivery/jobs` |
| `admin_get_dashboard_summary` | Get admin stats | Admin | `GET /api/admin/dashboard` |

## Usage Note
All tools require a valid session with the AmanaMart Backend. If `auth_me` fails, other tools (except public search) will likely fail as well.
