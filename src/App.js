import "./App.scss";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Router from "./config/Router";
import useWindowDimensions from "./hooks/useWindowDimensions";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";

function App() {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <Header />
      {width > 991 && <Menu />}
      <Router />
      <Footer bottom />
    </>
  );
}

export default App;
