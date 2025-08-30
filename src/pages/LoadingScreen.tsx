import React, { useEffect } from "react";

const LoadingScreen: React.FC = () => {
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes ping {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        75%, 100% {
          transform: scale(2);
          opacity: 0;
        }
      }
    `;
    // Sprawdź czy animacja już istnieje, żeby nie dodawać wielokrotnie
    const existingRule = Array.from(styleSheet.cssRules).find((rule) =>
      rule.cssText.includes("@keyframes ping")
    );
    if (!existingRule) {
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
  }, []);

  return (
    <div style={styles.overlay}>
      <div style={styles.pingCircle}></div>
      <div style={styles.text}>Ładowanie...</div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "#1e1e1e",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  pingCircle: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    backgroundColor: "#4f46e5", // Indigo 600
    animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
    position: "relative",
  },
  text: {
    marginTop: 20,
    color: "#e0e0e0",
    fontSize: 18,
    fontFamily: "Arial, sans-serif",
  },
};

export default LoadingScreen;
