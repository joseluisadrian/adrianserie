import React, { useState, useEffect } from "react";
import "@fontsource/cormorant-garamond";
import "@fontsource/montserrat";
import posterfinal from "./portada.png";
import articuloPrensa from "./articuloPrensa.jpeg";
import manuscrito from "./manuscritos.PNG";

const buttonStyle = {
  background: "transparent",
  border: "none",
  color: "white",
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "15px",
  letterSpacing: "2px",
  cursor: "pointer",
  textTransform: "uppercase",
  textShadow: "0 1px 5px rgba(0,0,0,0.9)",
  fontWeight: 500,
};

const navButtonStyle = {
  background: "#d6b36a",
  color: "#000",
  border: "none",
  padding: "6px 14px",
  borderRadius: "8px",
  cursor: "pointer",
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "12px",
  textTransform: "lowercase",
  fontWeight: "600",
  minWidth: "110px",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
};

function Portada({ setSeccion, menuAbierto, setMenuAbierto }) {
  return (
    <>
      <img
        src={posterfinal}
        alt="ADRIÁN"
        style={{
          width: "100%",
          height: window.innerWidth < 768 ? "84vh" : "100vh",
          objectFit: "cover",
          objectPosition: window.innerWidth < 768 ? "45% 0%" : "center 22%",
        }}
      />


      {window.innerWidth < 768 && (
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          style={{
            position: "fixed",
            top: "22px",
            right: "20px",
            background: "transparent",
            border: "none",
            color: "black",
            fontSize: "15px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            zIndex: 30,
            cursor: "pointer",
            fontFamily: "'Montserrat', sans-serif",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {menuAbierto ? "✕ CERRAR" : "☰ MENÚ"}
        </button>
      )}

      <div
        style={{
          position: "fixed",
          top: "40px",
          right: "60px",
          display:
            window.innerWidth < 768 ? (menuAbierto ? "flex" : "none") : "flex",
          flexDirection: window.innerWidth < 768 ? "column" : "row",
          alignItems: window.innerWidth < 768 ? "flex-end" : "center",
          gap: "18px",
          zIndex: 10,
        }}
      >
        {["proyecto", "historia", "personajes", "manuscritos", "autor"].map(
          (s) => (
            <button
              key={s}
              onClick={() => {
                setSeccion(s);
                setMenuAbierto(false);
              }}
              style={{
                ...buttonStyle,
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {s === "proyecto"
                ? "EL PROYECTO"
                : s === "historia"
                ? "LA HISTORIA"
                : s === "personajes"
                ? "LOS PERSONAJES"
                : s === "manuscritos"
                ? "LOS MANUSCRITOS"
                : "EL AUTOR"}
            </button>
          )
        )}
      </div>
    </>
  );
}

function BloqueContenido({
  titulo,
  children,
  setSeccion,
  anterior,
  siguiente,
  anteriorText,
  siguienteText,
  paddingTop,
}) {
  return (
    <div
      style={{
        textAlign: "center",
        position: "relative",
        overflow:
          titulo === "LA HISTORIA" || titulo === "LOS MANUSCRITOS"
            ? window.innerWidth < 768
              ? "hidden"
              : "visible"
            : "visible",
        maxWidth: "900px",
        margin: "0 auto",
        height:
          titulo === "LA HISTORIA" || titulo === "LOS MANUSCRITOS"
            ? window.innerWidth < 768
              ? "auto"
              : "100vh"
            : "auto",
        boxSizing: "border-box",
        padding: `${
          paddingTop || (window.innerWidth < 768 ? "35px" : "40px")
        } 20px 0px 20px`,
      }}
    >
      {titulo === "LA HISTORIA" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: "55%",
            width: "100vw",
            transform: "translateX(-50%)",
            height: window.innerWidth < 768 ? "100%" : "115vh",
            clipPath:
              window.innerWidth < 768 ? "inset(0)" : "inset(0 -100vw 0 -100vw)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <img
            src={articuloPrensa}
            alt=""
            style={{
              position: "fixed",
              width: "100%",
              height: "auto",
              top: "50%",
              left: "45%",
              transform: "translate(-50%, -50%) scale(1)",
              opacity: 0.55,
              pointerEvents: "none",
            }}
          />
        </div>
      )}
      {titulo === "LOS MANUSCRITOS" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: window.innerWidth < 768 ? "100%" : "100vh",
            clipPath:
              window.innerWidth < 768 ? "inset(0)" : "inset(0 -100vw 0 -100vw)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <img
            src={manuscrito}
            alt=""
            style={{
              position: "absolute",
              width: "auto%",
              height: "170vh",
              top: "50%",
              left: "45%",
              transform: "translate(-50%, -50%) rotate(15deg)",
              opacity: 0.55,
              pointerEvents: "none",
            }}
          />
        </div>
      )}

      {titulo !== "LA HISTORIA" && titulo !== "LOS MANUSCRITOS" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.40)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      )}

      <h2
        style={{
          position: "relative",
          zIndex: 2,
          fontSize: window.innerWidth < 768 ? "32px" : "42px",
          lineHeight: "48px",
          marginBottom: "-10px",
          color: "#d6b36a",
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: "4px",
          fontWeight: 500,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {titulo}
      </h2>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "20px",
          lineHeight: 1.9,
          marginBottom: "30px",
          color: "white",
        }}
      >
        {children}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <button
          onClick={() => setSeccion(anterior)}
          style={{
            ...navButtonStyle,
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {anteriorText}
        </button>

        <button
          onClick={() => setSeccion(siguiente)}
          style={{
            ...navButtonStyle,
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {siguienteText}
        </button>
      </div>
    </div>
  );
}

export default function AppGalaxia() {
  const [seccion, setSeccion] = useState("portada");
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.margin = "0";
    document.body.style.backgroundColor = "#000";
    document.body.style.overflowX = "hidden";
  }, [seccion]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "white",
        position: "relative",
      }}
    >
      {seccion === "portada" && (
        <Portada
          setSeccion={setSeccion}
          menuAbierto={menuAbierto}
          setMenuAbierto={setMenuAbierto}
        />
      )}

      {seccion === "proyecto" && (
        <BloqueContenido
          titulo="EL PROYECTO"
          setSeccion={setSeccion}
          anterior="portada"
          siguiente="historia"
          anteriorText="◀ portada"
          siguienteText="siguiente ▶"
        >
          <p style={{ marginBottom: "20px" }}>
            ADRIÁN es una serie limitada sobre tres generaciones obligadas a
            enfrentarse a una misma herida.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Una serie en la que no importa quién cae.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Una serie que habla de quienes siguen amando cuando todo parece
            perdido.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Una serie sobre la esperanza de quienes nunca dejaron de amar.
          </p>

          <div
            style={{
              marginTop: "-10px",
              paddingTop: "10px",
              borderTop: "1px solid #d6b36a",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "22px",
              fontStyle: "italic",
              lineHeight: 1.6,
              color: "#d6b36a",
            }}
          >
            <p style={{ margin: "0 0 12px 0" }}>
              «El pasado nunca está muerto. Ni siquiera es pasado.»
            </p>

            <p style={{ margin: 0, fontSize: "18px" }}>William Faulkner</p>
          </div>
        </BloqueContenido>
      )}

      {seccion === "historia" && (
        <BloqueContenido
          titulo="LA HISTORIA"
          setSeccion={setSeccion}
          anterior="proyecto"
          siguiente="personajes"
          anteriorText="◀ anterior"
          siguienteText="siguiente ▶"
        >
          <p style={{ marginBottom: "20px" }}>
            Adrián, un joven de dieciocho años, ingresa en urgencias en estado
            crítico y es inducido al coma. La duda planea sobre si ha sido un
            accidente por consumo o un intento de suicidio.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Mientras permanece en coma, su abuelo Marcos comienza a leerle un
            manuscrito que relata su propio pasado marcado por la adicción.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Al despertar, una experiencia imposible de comprender provoca en
            Adrián la necesidad de encontrar respuestas.
          </p>
        </BloqueContenido>
      )}

      {seccion === "personajes" && (
        <BloqueContenido
          titulo="LOS PERSONAJES"
          paddingTop="2px"
          setSeccion={setSeccion}
          anterior="historia"
          siguiente="manuscritos"
          anteriorText="◀ anterior"
          siguienteText="siguiente ▶"
        >
          <h3
            style={{
              fontSize: "28px",
              color: "#d6b36a",
              marginBottom: "-40px",
            }}
          >
            DAVID
          </h3>

          <p style={{
              fontFamily: "Arial, sans-serif",
              marginBottom: "30px" }}>
            Ante las mil incógnitas que rodean el estado de su hijo Adrián,
            David recurre a su padre sin imaginar que ese gesto acabará dando
            respuesta a preguntas que jamás supo hacerse.
          </p>

          <h3
            style={{
              fontSize: "28px",
              color: "#d6b36a",
              marginBottom: "-40px",
            }}
          >
            MARCOS
          </h3>

          <p style={{ fontFamily: "Arial, sans-serif", marginBottom: "20px" }}>
            Viendo a su hijo destrozado y a su nieto en las puertas de la
            muerte, Marcos recurre a unas reflexiones escritas muchos años atrás
            con la esperanza de que Adrián aún pueda oírle.
          </p>

          <h3
            style={{
             fontFamily: "'Montserrat', sans-serif", 
              fontSize: "28px",
              color: "#d6b36a",
              marginBottom: "-40px",
            }}
          >
            ADRIÁN
          </h3>

          <p style={{ fontFamily: "Arial, sans-serif", marginBottom: "-20px" }}>
            Creyéndole ajeno a cuanto ocurre a su alrededor, Adrián escucha
            desde la cama del hospital las voces de su padre y de su abuelo.
          </p>

          <p style={{fontFamily: "Arial, sans-serif", marginBottom: "30px" }}>
            Por primera vez comprende que nunca llegó a conocer realmente a
            ninguno de los dos.
          </p>
        </BloqueContenido>
      )}

      {seccion === "manuscritos" && (
        <BloqueContenido
          titulo="LOS MANUSCRITOS"
          paddingTop="2px"
          setSeccion={setSeccion}
          anterior="personajes"
          siguiente="autor"
          anteriorText="◀ anterior"
          siguienteText="siguiente ▶"
        >
          <p style={{ marginBottom: "20px" }}>
            Casi cuatro décadas atrás, unos hechos marcaron la vida de una
            familia.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Casi veinte años después, una necesidad imposible de contener
            convirtió aquellos hechos en palabras.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Casi otros veinte años más tarde esas palabras encuentran un
            destinatario.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Palabras íntimas que no nacieron para ser leídas, pero que hoy son
            gritadas.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Palabras ocultas tras un silencio autoimpuesto por amor y lealtad.
          </p>

          <p style={{ marginBottom: "30px" }}>
            Palabras duras que obligan a mirar a quien nunca habíamos mirado.
          </p>
        </BloqueContenido>
      )}

      {seccion === "autor" && (
        <BloqueContenido
          paddingTop="5px"
          titulo="EL AUTOR"
          setSeccion={setSeccion}
          anterior="manuscritos"
          siguiente="portada"
          anteriorText="◀ anterior"
          siguienteText="portada ▶"
        >
          <p style={{ marginBottom: "20px" }}>
            El origen de ADRIÁN se remonta a unos meses en los que el silencio y
            el tiempo me permitieron recapacitar sobre los errores que había
            cometido dañando a quienes más quería.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Enfrentarme a ello estaba siendo una cura insospechada.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Aquellas letras nacieron como una necesidad personal y sanadora, sin
            intención alguna de ser publicadas.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Al terminar el confinamiento, la vida empujó aquellas reflexiones a
            un cajón.
          </p>

          <p style={{ marginBottom: "20px" }}>
            La más lejana en el tiempo, la más cruda, dormía corregida en un
            archivo de mi ordenador; la otra parte, la más cercana, seguía
            esperando en unos folios guardados en un cajón.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Cuatro años más tarde nadie esperaba esa ola de terror que golpeó a
            nuestra familia.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Un impulso incontrolable me llevó hasta ese cajón.
          </p>

          <p style={{ marginBottom: "20px" }}>
            En el cajón una carpeta con fotos, documentos, recortes de prensa,
            copias de sentencias y unos folios de mi puño y letra componían el
            único salvavidas al que podía recurrir.
          </p>

          <p style={{ marginBottom: "30px" }}>
            Acompañar a mi nieto en su proceso de desintoxicación dio origen, en
            2024, a las dos novelas que recogen esta historia.
          </p>

          {/* Bloque de Contacto Añadido */}
          <div
            style={{
              marginTop: "40px",
              paddingTop: "30px",
              borderTop: "1px solid #d6b36a",
              color: "#d6b36a",
              fontStyle: "italic",
            }}
          >
            <p>Para consultas profesionales:</p>

            <p style={{ fontWeight: "bold" }}>contacto@adrianlaserie.com</p>
          </div>
        </BloqueContenido>
      )}
    </div>
  );
}
