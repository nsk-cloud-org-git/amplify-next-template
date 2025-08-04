"use client";

import { useState, useEffect } from "react";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplifyconfiguration.json";
import "@aws-amplify/ui-react/styles.css";
import Banner from "./components/Banner";
//import { getCurrentUser } from "aws-amplify/auth";
import { getCurrentUser, fetchUserAttributes } from "aws-amplify/auth";

Amplify.configure(outputs);

export default function HomePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const currentUser = await getCurrentUser();
      const userAttributes = await fetchUserAttributes();
      setUser({ ...currentUser, attributes: userAttributes });
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main style={{ margin: 0, padding: 0 }}>
      <Banner user={user} />

          <div style={{ padding: "0 20px" }}>
            <h1>Welcome to Start5 Technology</h1>
            <p>Transforming Daily Experiences thru AI</p>

        {user ? (
          <section style={{ marginTop: "20px" }}>
            <h2>Hello, {user.attributes?.name || user.username}</h2>
            <p>Welcome to your AI-powered productivity platform!</p>
            <div style={{ marginTop: "30px" }}>
              <h3>Quick Actions</h3>
              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                <a href="/user-tasks" style={{
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "4px"
                }}>Manage Tasks</a>
                <a href="/agentic" style={{
                  padding: "10px 20px",
                  backgroundColor: "#28a745",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "4px"
                }}>AI Training</a>
                <a href="/services" style={{
                  padding: "10px 20px",
                  backgroundColor: "#6f42c1",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "4px"
                }}>AI Chatbot</a>
              </div>
            </div>
          </section>
        ) : (
          <section style={{ marginTop: "20px" }}>
            <h2>Welcome to Start5 Technology</h2>
            <p>Transform your daily experiences with AI-powered solutions.</p>
            <div style={{ marginTop: "30px" }}>
              <h3>Get Started</h3>
              <p>Sign in to access your personalized dashboard with AI tools, task management, and more.</p>
              <button 
                onClick={() => window.location.href = '/signin'}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "16px",
                  cursor: "pointer",
                  marginTop: "10px"
                }}
              >
                Sign In to Get Started
              </button>
            </div>
          </section>
        )}
            
      </div>
    </main>
  );
}
