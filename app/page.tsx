"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplifyconfiguration.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";
import Banner from "./components/Banner";

// ✅ Configure Amplify first
Amplify.configure(outputs);

// ✅ Create client globally so it's available in component
const client = generateClient<Schema>();

export default function HomePage() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const result = await client.models.Todo.list();
      console.log("Fetched todos:", result);
      setTodos(result.data || []);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }

  async function createTodo() {
    const content = window.prompt("Todo content");
    if (content) {
      try {
        if (!client.models.Todo || typeof client.models.Todo.create !== "function") {
          alert("Todo model is not initialized. Check Amplify config or schema.");
          return;
        }

        const result = await client.models.Todo.create({
          content,
          createdAt: new Date().toISOString(),
          isDone: false,
        });

        console.log("Created todo:", result);

        if (result.data) {
          setTodos([...todos, result.data]);
        }
      } catch (error) {
        console.error("Error creating todo:", error);
        alert("Failed to create todo: " + (error as Error).message);
      }
    }
  }

  async function toggleTodo(id: string, isDone: boolean) {
    try {
      if (!client.models.Todo || typeof client.models.Todo.update !== "function") {
        alert("Todo update not available. Check Amplify config.");
        return;
      }

      const result = await client.models.Todo.update({
        id,
        isDone: !isDone,
      });

      console.log("Updated todo:", result);

      if (result.data) {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? result.data! : todo
          )
        );
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  }

  return (
    <Authenticator>
      {({ user, signOut }) => (
        <main style={{ margin: 0, padding: 0 }}>
          <Banner user={user} signOut={signOut} />

          <div style={{ padding: "0 20px" }}>
            <h1>Welcome to Start5 App</h1>
            <p>Transforming Daily Experiences thru AI</p>

            {user ? (
              <section style={{ marginTop: "20px" }}>
                <h2>Hello, {user.username}</h2>
                <h3>My Todos</h3>
                <button onClick={createTodo}>+ New Todo</button>
                <ul>
                  {todos.map((todo) => (
                    <li key={todo.id} style={{ margin: "10px 0" }}>
                      <input
                        type="checkbox"
                        checked={todo.isDone || false}
                        onChange={() => toggleTodo(todo.id, todo.isDone || false)}
                        style={{ marginRight: "10px" }}
                      />
                      <span
                        style={{
                          textDecoration: todo.isDone ? "line-through" : "none",
                          opacity: todo.isDone ? 0.6 : 1,
                        }}
                      >
                        {todo.content}
                      </span>
                    </li>
                  ))}
                </ul>
                <button onClick={fetchTodos}>Refresh Todos</button>
              </section>
            ) : (
              <section style={{ marginTop: "20px" }}>
                <h3>Please log in to view and create Todos.</h3>
              </section>
            )}
          </div>
        </main>
      )}
    </Authenticator>
  );
}
