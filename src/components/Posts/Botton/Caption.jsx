export function Caption({ userName, postCaption }) {
  return (
    <div className="legenda">
      <strong>{userName}</strong> {postCaption}
    </div>
  );
}
