import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import RestAPI from "./RestAPI.js";

const App = () => {
  const routing = useRoutes(Themeroutes);

  return <div className="dark">{routing}</div>;
  ;
};
export default App;
