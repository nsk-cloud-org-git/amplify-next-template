"use client";

interface BannerProps {
  user?: any;
  signOut?: () => void;
}

export default function Banner({ user, signOut }: BannerProps) {
  return (
    <>
      <div style={{ width: "100%", marginBottom: "0" }}>
        <img 
          src="/images/Start5.png" 
          alt="Start5 Banner" 
          style={{ 
            width: "100%", 
            height: "200px", 
            objectFit: "cover",
            display: "block"
          }} 
        />
      </div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(45deg, #4285f4, #9c27b0)",
          padding: "10px 20px",
          marginBottom: "20px",
          width: "100%",
          boxSizing: "border-box"
        }}
      >
        <div style={{ display: "flex", gap: "30px" }}>
          <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
          <a href="/user-tasks" style={{ color: "white", textDecoration: "none" }}>User Tasks</a>
          <a href="/agentic" style={{ color: "white", textDecoration: "none" }}>Agentic</a>
          <a href="/services" style={{ color: "white", textDecoration: "none" }}>Services</a>
        </div>
        {user && <button onClick={signOut} style={{ background: "white", color: "#4285f4", border: "none", padding: "8px 16px", borderRadius: "4px" }}>Logout</button>}
      </nav>
    </>
  );
}