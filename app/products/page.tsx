"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import outputs from "@/amplifyconfiguration.json";
import Banner from "../components/Banner";

Amplify.configure(outputs);

export default function ProductsPage() {
  return (
    <Authenticator>
      {({ user, signOut }) => (
        <main style={{ margin: 0, padding: 0 }}>
          <Banner user={user} />
          <div style={{ padding: "0 20px" }}>
            <h1>Our Products</h1>
            <p>Discover our innovative AI-powered solutions</p>
          </div>
        </main>
      )}
    </Authenticator>
  );
}