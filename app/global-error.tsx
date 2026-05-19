"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang='pl'>
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "2rem",
          textAlign: "center",
          fontFamily: "system-ui, sans-serif",
          background: "#FBE8CF",
          color: "#991B1D",
          margin: 0,
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          Ups!
        </h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
          Wystąpił nieoczekiwany błąd. Spróbuj ponownie.
        </p>
        <button
          onClick={() => reset()}
          style={{
            background: "#ED8F28",
            color: "white",
            fontWeight: 700,
            padding: "0.75rem 1.5rem",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
        >
          SPRÓBUJ PONOWNIE
        </button>
      </body>
    </html>
  );
}
