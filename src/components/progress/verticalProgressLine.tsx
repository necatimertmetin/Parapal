import React from "react";

interface VerticalProgressLineProps {
  progress: number; // 0 ile 100 arasında bir değer
  color?: string;
}

const VerticalProgressLine: React.FC<VerticalProgressLineProps> = ({
  progress,
  color = "black", // Varsayılan değer
}) => {
  const containerStyle: React.CSSProperties = {
    width: "4px", // Çubuğun genişliği
    height: "100%", // Konteyner yüksekliği
    backgroundColor: "#e0e0e0", // Arka plan rengi
    position: "relative",
    borderRadius: "10px", // Kenar yuvarlama
  };

  const lineStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "0", // Aşağıdan başlayacak
    backgroundColor: color, // Rengi parametre olarak kullan
    width: "100%", // Çubuğun genişliği
    height: `${progress}%`, // İlerleme yüksekliği
    borderRadius: "10px", // Kenar yuvarlama
    transition: "height 0.3s ease", // Yükseklik geçişi
  };

  return (
    <div style={containerStyle}>
      <div style={lineStyle} />
    </div>
  );
};

export default VerticalProgressLine;
