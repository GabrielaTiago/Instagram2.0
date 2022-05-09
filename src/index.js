import ReactDOM from 'react-dom';

import Header from "./js/Header/Header";
import Main from "./js/Main/Main";
import Footer from './js/Footer/Footer';

function App(){
    return(
        <div>
            <Header />
            <Main />
            <Footer />
        </div>      
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));