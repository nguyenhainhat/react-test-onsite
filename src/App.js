import "./App.scss";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Router from "./config/Router";
import useWindowDimensions from "./hooks/useWindowDimensions";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const { height, width } = useWindowDimensions();

  const location = useLocation();

  console.log(location.pathname);

  return (
    <>
      <Header />
      {width > 991 && <Menu />}
      <Router />
      {location.pathname === "/detail" ? <Footer bottom /> : <Footer />}
    </>
  );
}

export default App;
