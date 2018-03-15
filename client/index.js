import "./index.less";
import { installRelayDevTools } from "relay-devtools";
if (!PRODUCTION) {
  installRelayDevTools();
}
import "./js/app";
