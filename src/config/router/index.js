import Demos from "../../pages/Demos";
import Pages from "../../pages/Pages";
import Portfolio from "../../pages/Portfolio";

const pageRoutes = () => {
  return [
    {
      link: "/Demos",
      path: "/Demos",
      name: "Demos",
      component: Demos,
    },
    {
      link: "/Pages",
      path: "/Pages",
      name: "Pages",
      component: Pages,
    },
    {
      link: "/Portfolio",
      path: "/Portfolio",
      name: "Portfolio",
      component: Portfolio,
    },
  ];
};

export default pageRoutes();
