"use client";

import { signOut } from "aws-amplify/auth";

interface BannerProps {
  user?: any;
}

export default function Banner({ user }: BannerProps) {
  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.reload();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleSignIn = () => {
    window.location.href = '/signin';
  };
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
          {user && (
            <>
              <a href="/user-tasks" style={{ color: "white", textDecoration: "none" }}>User Tasks</a>
              <a href="/agentic" style={{ color: "white", textDecoration: "none" }}>Agentic</a>
              <a href="/services" style={{ color: "white", textDecoration: "none" }}>Services</a>
            </>
          )}
        </div>
        {user ? (
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <a href="/profile" style={{ color: "white", textDecoration: "none", padding: "8px 16px", background: "rgba(255,255,255,0.2)", borderRadius: "4px" }}>Profile</a>
            <button onClick={handleSignOut} style={{ background: "white", color: "#4285f4", border: "none", padding: "8px 16px", borderRadius: "4px" }}>Logout</button>
          </div>
        ) : (
          <button onClick={handleSignIn} style={{ background: "white", color: "#4285f4", border: "none", padding: "8px 16px", borderRadius: "4px" }}>Sign In</button>
        )}
      </nav>
    </>
  );
}