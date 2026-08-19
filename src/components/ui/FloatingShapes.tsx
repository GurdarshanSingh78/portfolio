"use client";

export default function FloatingShapes() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Large warm beige circle */}
      <div
        className="absolute float-slow"
        style={{
          top: "10%",
          right: "5%",
          width: "clamp(300px, 35vw, 500px)",
          height: "clamp(300px, 35vw, 500px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(196, 168, 130, 0.12) 0%, rgba(196, 168, 130, 0) 70%)",
        }}
      />

      {/* Medium soft blue ellipse */}
      <div
        className="absolute float-medium"
        style={{
          top: "35%",
          left: "-5%",
          width: "clamp(250px, 30vw, 450px)",
          height: "clamp(200px, 25vw, 350px)",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(74, 123, 247, 0.08) 0%, rgba(74, 123, 247, 0) 70%)",
        }}
      />

      {/* Small emerald circle */}
      <div
        className="absolute float-fast pulse-gentle"
        style={{
          bottom: "15%",
          right: "15%",
          width: "clamp(150px, 18vw, 280px)",
          height: "clamp(150px, 18vw, 280px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 140, 110, 0.08) 0%, rgba(59, 140, 110, 0) 70%)",
        }}
      />

      {/* Subtle top-left accent */}
      <div
        className="absolute float-medium"
        style={{
          top: "-5%",
          left: "20%",
          width: "clamp(200px, 22vw, 350px)",
          height: "clamp(200px, 22vw, 350px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(155, 89, 182, 0.05) 0%, rgba(155, 89, 182, 0) 70%)",
          animationDelay: "-5s",
        }}
      />
    </div>
  );
}
