import ReactDOM from "react-dom";

import "./styles/reset.css";
import "./styles/styles.css";

import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { Header } from "./components";


function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
