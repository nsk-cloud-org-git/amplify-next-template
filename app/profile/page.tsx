"use client";

import { useState, useEffect } from "react";
import { Amplify } from "aws-amplify";
import outputs from "@/amplifyconfiguration.json";
import { getCurrentUser, fetchUserAttributes } from "aws-amplify/auth";
import Banner from "../components/Banner";

Amplify.configure(outputs);

export default function ProfilePage() {
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

  if (!user) {
    return (
      <main>
        <Banner user={user} />
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h1>Access Denied</h1>
          <p>Please sign in to view your profile.</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Banner user={user} />
      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        <h1>User Profile</h1>
        <div style={{ 
          backgroundColor: "#f8f9fa", 
          padding: "20px", 
          borderRadius: "8px",
          marginTop: "20px"
        }}>
          <div style={{ marginBottom: "15px" }}>
            <strong>Name:</strong> {user.attributes?.name || 'Not provided'}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <strong>Username:</strong> {user.username}
          </div>
          {user.attributes?.email && (
            <div style={{ marginBottom: "15px" }}>
              <strong>Email:</strong> {user.attributes.email}
            </div>
          )}
          <div style={{ marginBottom: "15px" }}>
            <strong>User ID:</strong> {user.userId}
          </div>
        </div>
      </div>
    </main>
  );
}