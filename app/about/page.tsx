"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import outputs from "@/amplifyconfiguration.json";
import Banner from "../components/Banner";

Amplify.configure(outputs);

export default function AboutPage() {
  return (
    <Authenticator>
      {({ user, signOut }) => (
        <main style={{ margin: 0, padding: 0 }}>
          <Banner user={user} />
          <div style={{ padding: "0 20px" }}>
            <h1>About Us</h1>
            <p>Learn more about Start5 and our mission to transform daily experiences through AI</p>
          </div>
        </main>
      )}
    </Authenticator>
  );
}