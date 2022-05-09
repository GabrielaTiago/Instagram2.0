import Stories from "./Stories"
import Posts from "./Posts"
import Sidebar from "./Sidebar";

export default function Esquerda(){
    return(
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    );
}