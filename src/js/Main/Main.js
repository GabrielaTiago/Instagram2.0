import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function Main(){
    return(
        <main>
            <div class="container">
                <div class="container-center">
                    <Stories />
                    <Posts />
                </div>
                <Sidebar />
            </div>
        </main>
    );
}