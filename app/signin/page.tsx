"use client";

import { Amplify } from "aws-amplify";
import outputs from "@/amplifyconfiguration.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure(outputs);

export default function SignInPage() {
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Sign In to Start5 Technology</h1>
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
        {({ user }) => {
          if (user) {
            window.location.href = '/';
            return <div>Redirecting...</div>;
          }
          return <div></div>;
        }}
      </Authenticator>
    </div>
  );
}