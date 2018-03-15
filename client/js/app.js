import BrowserProtocol from "farce/lib/BrowserProtocol";
import queryMiddleware from "farce/lib/queryMiddleware";
import createFarceRouter from "found/lib/createFarceRouter";
import createRender from "found/lib/createRender";
import { Resolver } from "found-relay";
import environment from "./config/environment";
import routes from "./routes";

const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: routes,

  render: createRender({})
});

const mountNode = document.getElementById("root");
ReactDOM.render(<Router resolver={new Resolver(environment)} />, mountNode);
