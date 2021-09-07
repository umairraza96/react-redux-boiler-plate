import ButtonDrawer from "../../components/button-drawer";
import ExampleData from "../../components/example-data";
import "./index.css";

const LandingPage = () => {
  return (
    <div className="page landing-page">
      <h1 style={{ textAlign: "center" }}>Landing Page</h1>
      <ButtonDrawer />
      <ExampleData />
    </div>
  );
};

export default LandingPage;
