import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Main from "./pages/Main";
import AOS from "aos";
import reactLogo from "./assets/img/react-dark-logo.png";

export default function App() {
  const [clientWidth, setClientWidth] = React.useState(window.innerWidth);
  const [scrollSpyTab, setScrollSpyTab] = React.useState("");
  const [sideBar, setSideBar] = React.useState(
    window.innerWidth <= 990 ? false : true
  );

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
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
      window.removeEventListener("resize", handleResize);
    };
  }, [sideBar, clientWidth]);

  const handleResize = e => {
    setClientWidth(e.currentTarget.innerWidth);

    return setSideBar(e.currentTarget.innerWidth <= 990 ? false : true);
  };

  React.useEffect(() => {
    let tabs;
    tabs = Array.from(document.querySelectorAll(".scroll-spy-tab"));
    tabs.map(tab =>
      tab.getAttribute("data-role") === scrollSpyTab
        ? tab.classList.add("active-nav-link")
        : tab.classList.remove("active-nav-link")
    );
  }, [scrollSpyTab]);

  const createObserver = () => {
    let elements, options;

    elements = Array.from(
      document.querySelectorAll("[data-role='scroll-to-page']")
    );

    options = {
      root: null,
      rootMargin: "0px",
      threshold: [0.5, 0.75, 1.0],
    };

    let callback = (entries, observer) => {
      entries.forEach(entry => {
        setScrollSpyTab(entry.target.id);
      });
    };

    let observer = new IntersectionObserver(callback, options);
    elements.map(element => observer.observe(element));
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
          <h1 className="d-none">Sidebar</h1>
          <Navigation createObserver={createObserver} />
          <img src={reactLogo} className="pic-art" alt="" />
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
