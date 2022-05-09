export default function Posts(){
    return (
        <div class="coluna-posts">
            <div class="post">
                <div class="post-parte-superior">
                    <div class="dados-perfil">
                        <img class="foto-perfil" src="/imagens/beyonce-perfil.jpg"/>
                        <div class="post-nome-perfil"><p>Beyoncé</p></div>
                    </div>
                    <div class="icone-opcoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <img class="foto-principal" src="/imagens/beyonce1.jpg"/>
                <div class="post-inferior">
                    <div class="icones-post-inferiores">
                        <div class="icones-esquerda">
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div class="icones-direita">
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="curtidas">
                        <img class="foto-perfil-usuario" src="/imagens/eu.jpg"/>
                        <div class="informacoes-curtidas">Curtido por <strong>gabs_tiago</strong> e <strong>outras 3.278.690 pessoas</strong></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
