import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

export default function App() {
  const [clientWidth, setClientWidth] = React.useState([300, false]);
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = e => {
    setClientWidth(
      e.currentTarget.innerWidth <= 990 ? [0, true] : [300, false]
    );
  };
  return (
    <>
      <aside
        className="position-fixed overflow-hidden"
        style={{ width: clientWidth[1] ? 0 : clientWidth[0] }}
      >
        <Navigation />
      </aside>
      <main style={{ marginLeft: clientWidth[1] ? 0 : clientWidth[0] }}>
        <Switch>
          <Route
            render={props => <Home {...props} clientWidth={clientWidth} />}
          />
        </Switch>
      </main>
    </>
  );
}
