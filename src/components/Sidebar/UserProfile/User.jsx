export function User({ name, userName, userImage }) {
  return (
    <div class="usuario">
      <img src={userImage} alt="foto do usuário" />
      <div class="texto">
        <strong>{name}</strong>
        {userName}
      </div>
    </div>
  );
}
