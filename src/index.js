import ReactDOM from "react-dom";

import "./styles/reset.css";
import "./styles/styles.css";

import Main from "./components/Main/Main";
import { Footer, Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
