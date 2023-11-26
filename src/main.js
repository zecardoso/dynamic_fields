import { HttpServerIntegration } from "./integration/http_server_integration.js";
import { FormRoute } from "./route/form_route.js";

const httpServer = new HttpServerIntegration(3000)

new FormRoute(httpServer)
