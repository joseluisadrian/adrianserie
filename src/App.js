import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        paddingBottom: "100px",
        maxWidth: "800px",
        width: "100%",
        margin: "0 auto",
        color: "#333",
        lineHeight: "1.6",
        boxSizing: "border-box",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Adrián</h1>
        <h2 style={{ fontSize: "1.2rem", color: "#666", fontWeight: "normal" }}>
          Trastornos de salud mental, adicciones y el dolor de quienes sostienen
          la caída.
        </h2>
      </header>
      <section style={{ marginBottom: "40px", fontSize: "1.1rem" }}>
        <p style={{ marginBottom: "20px" }}>
          Solo recordando con amor cómo un padre venció la adicción, se puede
          salir ileso del intento de suicidio de un hijo.
        </p>
        <p>
          Una mirada descarnada a la salud mental en la adolescencia, las
          autolesiones, el consumo de drogas, el muro de la incomunicación y el
          impacto devastador en quienes sostienen el dolor desde la orilla.
        </p>
      </section>
    </div>
  );
}
