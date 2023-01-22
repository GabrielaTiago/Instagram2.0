export default function Posts(props) {
  const postData = [
    {
      userName: "meowed",
      userImage: "../../assets/img/users/meowed.svg",
      userPost: "../../assets/img/posts/gato-telefone.svg",
      pictureLiked: "../../assets/img/users/respondeai.svg",
      whoLiked: "respondeai",
    },
    {
      userName: "barked",
      userImage: "../../assets/img/users/barked.svg",
      userPost: "../../assets/img/posts/dog.svg",
      pictureLiked: "../../assets/img/users/adorable_animals.svg",
      whoLiked: "adorable_animals",
    },
  ];

  return (
    <div class="posts">
      {postData.map((data) => (
        <div class="post">
          <Topo userName={data.userName} userImage={data.userImage} />
          <Conteudo userPost={data.userPost} />
          <Fundo pictureLiked={data.pictureLiked} whoLiked={data.whoLiked} />
        </div>
      ))}
    </div>
  );
}
function Topo(props) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={props.userImage} />
        {props.userName}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}

function Conteudo(props) {
  return (
    <div class="conteudo">
      <img src={props.userPost} />
    </div>
  );
}

function Fundo(props) {
  const ionIcon = [
    "heart-outline",
    "chatbubble-outline",
    "paper-plane-outline",
  ];

  return (
    <div class="fundo">
      <div class="acoes">
        <div>
          {ionIcon.map((name) => (
            <ion-icon name={name}></ion-icon>
          ))}
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={props.pictureLiked} />
        <div class="texto">
          Curtido por <strong>{props.whoLiked}</strong> e{" "}
          <strong>outras 99.159 pessoas</strong>
        </div>
      </div>
    </div>
  );
}
