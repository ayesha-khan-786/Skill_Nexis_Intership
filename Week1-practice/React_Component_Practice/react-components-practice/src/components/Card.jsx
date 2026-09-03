export default function Card({ title, content }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        margin: "10px 0",
        background: "#fff",
      }}
    >
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
