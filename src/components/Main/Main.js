import Esquerda from "./Esquerda"
import Sidebar from "./Sidebar";

export default function Main(){
    return(
        <div class="corpo">
                <Esquerda />
                <Sidebar />
        </div>
    );
}