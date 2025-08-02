"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function HomePage() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    if (user) {
      const subscription = client.models.Todo.observeQuery().subscribe({
        next: (data) => setTodos([...data.items]),
      });
      return () => subscription.unsubscribe();
    }
  }, [user]);

  function createTodo() {
    const content = window.prompt("Todo content");
    if (content) {
      client.models.Todo.create({ content });
    }
  }

  return (
    <main>
      {/* ✅ Top Navigation Bar */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#f0f0f0",
        padding: "10px 20px",
        marginBottom: "20px"
      }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/services">Services</a>
          <a href="/agentic">Agentic</a>
          <a href="/about">About Us</a>
        </div>

        <div>
          {user ? (
            <button onClick={signOut}>Logout</button>
          ) : (
            <Authenticator variation="link">
              {({ signOut }) => null}
            </Authenticator>
          )}
        </div>
      </nav>

      {/* ✅ Welcome Section */}
      <h1>Welcome to Start5 App</h1>
      <p>Transforming Daily Experiences thru AI</p>

      {/* ✅ Show Todos only if user is logged in */}
      {user ? (
        <section style={{ marginTop: "20px" }}>
          <h2>Hello, {user.email}</h2>
          <h3>My Todos</h3>
          <button onClick={createTodo}>+ New Todo</button>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.content}</li>
            ))}
          </ul>
        </section>
      ) : (
        <section style={{ marginTop: "20px" }}>
          <h3>Please log in to view and create Todos.</h3>
          <Authenticator />
        </section>
      )}

      <div style={{ marginTop: "30px" }}>
        <p>🥳 App successfully hosted.</p>
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}
