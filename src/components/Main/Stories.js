export default function Stories(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.image} />
      </div>
      <div class="usuario">{props.user}</div>
    </div>
  );
}
