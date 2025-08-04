"use client";

import { useState, useEffect } from "react";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplifyconfiguration.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";
import Banner from "./components/Banner";

Amplify.configure(outputs);

export default function HomePage() {
 
  return (
  <Authenticator
    formFields={{
      signUp: {
        name: {
          label: 'Full Name',
          placeholder: 'Enter your full name',
          isRequired: true,
          order: 1
        },
        email: {
          label: 'Email',
          placeholder: 'Enter your email',
          isRequired: true,
          order: 2
        },
        password: {
          label: 'Password',
          placeholder: 'Enter your password',
          isRequired: true,
          order: 3
        }
      }
    }}
  >
      {({ user, signOut }) => {
        console.log("Authenticated user:", user);
        return (
        <main style={{ margin: 0, padding: 0 }}>
          <Banner user={user} signOut={signOut} />

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
                <h3>Please log in to access your dashboard.</h3>
              </section>
            )}
            
          </div>
        </main>
        );
      }}
    </Authenticator>
  );
}
