export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        background: "#2563eb",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}
