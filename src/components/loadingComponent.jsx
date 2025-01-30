import "../assets/styles/loading.css";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
        height: "100vh",
        width: "100%",
      }}
    >
      <img
        className="loading"
        src="/images/loading.png"
        alt="loading"
      />
    </div>
  );
}

export default Loading;
