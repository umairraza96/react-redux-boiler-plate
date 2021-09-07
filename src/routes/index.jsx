import LandingPage from "../pages/landing-page";

const routes = [
  {
    path: "/",
    private: false,
    exact: true,
    component: <LandingPage />,
  },
];

export default routes;
