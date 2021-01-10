import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Main from "./pages/Main";
import AOS from "aos";

export default function App() {
  const [clientWidth, setClientWidth] = React.useState(window.innerWidth);
  const [sideBar, setSideBar] = React.useState(
    window.innerWidth <= 990 ? false : true
  );
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    const addClass = () => document.body.classList.add("mobile-nav-active");

    const removeClass = () =>
      document.body.classList.remove("mobile-nav-active");
    sideBar ? (clientWidth >= 990 ? removeClass() : addClass()) : removeClass();

    (async () => {
      return AOS.init({
        duration: 1000,
        easing: "ease-in-out-back",
        once: true,
      });
    })();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [sideBar, clientWidth]);

  const handleResize = e => {
    setClientWidth(e.currentTarget.innerWidth);

    return setSideBar(e.currentTarget.innerWidth <= 990 ? false : true);
  };

  const handleScroll = e => {
    let elements, tabs;

    tabs = Array.from(document.querySelectorAll(".scroll-spy-tab"));
    elements = Array.from(
      document.querySelectorAll("[data-role='scroll-to-page']")
    );

    elements.map(element => {
      return element.getBoundingClientRect().y <= 0
        ? tabs.map(tab => {
            return tab.getAttribute("data-role") === element.id
              ? tab.classList.add("active-nav-link")
              : tab.classList.remove("active-nav-link");
          })
        : undefined;
    });
  };

  const isSideBarOpen = () => setSideBar(!sideBar);
  const styles = {
    default: {
      left: clientWidth >= 990 ? 0 : "-100%",
      transition: `all ease-in-out ${clientWidth / 989 + 0.02}s`,
    },
    btnInjected: {
      left: 0,
      transition: `all ease-in-out ${clientWidth / 989 + 0.02}s`,
    },
  };

  return (
    <>
      <header
        className={
          sideBar ? (window.innerWidth > 990 ? "" : "click-away-listener") : ""
        }
        onClick={isSideBarOpen}
      >
        <aside
          className="position-fixed overflow-hidden"
          style={sideBar ? styles.btnInjected : styles.default}
        >
          <Navigation sideBar={sideBar} />
        </aside>
      </header>
      <main>
        <Switch>
          <Route
            render={props => (
              <Main
                {...props}
                clientWidth={clientWidth}
                isSideBarOpen={isSideBarOpen}
              />
            )}
          />
        </Switch>
      </main>
    </>
  );
}
