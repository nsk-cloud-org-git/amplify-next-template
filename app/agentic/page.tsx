"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "../../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplifyconfiguration.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";
import Banner from "../components/Banner";
import { getCurrentUser, fetchUserAttributes } from "aws-amplify/auth";

// ✅ Configure Amplify
Amplify.configure(outputs);

// ✅ Generate Amplify client
const client = generateClient<Schema>();

export default function AgenticPage() {
  const [trainingForms, setTrainingForms] = useState<Array<any>>([]);
  const [formData, setFormData] = useState({ name: "", topic: "", date: "" });
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStatus, setProcessingStatus] = useState("");
  const [errorLog, setErrorLog] = useState<string[]>([]);
  const [debugLog, setDebugLog] = useState<string[]>([]);

  useEffect(() => {
    // Debug client and models
    addDebugLog(`Client object: ${client ? 'exists' : 'undefined'}`);
    addDebugLog(`Client models: ${client?.models ? 'exists' : 'undefined'}`);
    if (client?.models) {
      addDebugLog(`Available models: ${Object.keys(client.models).join(", ")}`);
    }
    fetchTrainingForms();
  }, []);

  const addDebugLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setDebugLog(prev => [...prev, `[${timestamp}] ${message}`]);
  };

  const addErrorLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setErrorLog(prev => [...prev, `[${timestamp}] ${message}`]);
  };

  async function fetchTrainingForms() {
    try {
      if (!client) {
        addErrorLog("Amplify client is not initialized");
        return;
      }
      if (!client.models) {
        addErrorLog("Client models are not available");
        return;
      }
      if (!client.models.Todo) {
        addErrorLog("Todo model is not available");
        return;
      }
      
      addDebugLog("Fetching training forms from Todo model...");
      const result = await client.models.Todo.list();
      const trainingTodos = result.data?.filter(todo => 
        todo.content?.startsWith("Training:")
      ) || [];
      
      const parsedForms = trainingTodos.map(todo => {
        const content = todo.content || "";
        const match = content.match(/Training: (.+) - (.+) \((.+)\)/);
        return {
          id: todo.id,
          name: match?.[1] || "Unknown",
          topic: match?.[2] || "Unknown",
          date: match?.[3] || "Unknown"
        };
      });
      
      setTrainingForms(parsedForms);
      addDebugLog(`Fetched ${parsedForms.length} training forms`);
    } catch (error) {
      const errorMsg = `Error fetching forms: ${(error as Error).message}`;
      addErrorLog(errorMsg);
    }
  }

  async function createTrainingForm() {
    if (!formData.name || !formData.topic || !formData.date) {
      addErrorLog("Validation failed: All fields are required");
      return;
    }
    
    setIsProcessing(true);
    setProcessingStatus("Validating form data...");
    addDebugLog(`Creating training form: ${formData.name} - ${formData.topic}`);
    addDebugLog(`Available models: ${Object.keys(client.models).join(", ")}`);
    
    try {
      if (!client?.models?.Todo) {
        throw new Error("Todo model is not available. Check Amplify configuration.");
      }
      
      setProcessingStatus("Creating training form...");
      const result = await client.models.Todo.create({
        content: `Training: ${formData.name} - ${formData.topic} (${formData.date})`
      });
      
      if (result.data) {
        const newForm = {
          id: result.data.id,
          name: formData.name,
          topic: formData.topic,
          date: formData.date
        };
        setTrainingForms([...trainingForms, newForm]);
        setFormData({ name: "", topic: "", date: "" });
        setProcessingStatus("Training form created successfully!");
        addDebugLog(`Created training form with ID: ${result.data.id}`);
      }
    } catch (error) {
      const errorMsg = `Failed to create training form: ${(error as Error).message}`;
      addErrorLog(errorMsg);
      setProcessingStatus("Error occurred during creation");
    } finally {
      setIsProcessing(false);
      setTimeout(() => setProcessingStatus(""), 3000);
    }
  }

  return (
    <Authenticator>
      {({ user, signOut }) => (
        <main style={{ margin: 0, padding: 0 }}>
          <Banner user={user} />

          <div style={{ padding: "0 20px" }}>
            <h1>Agentic AI - Training Management</h1>
            <p>Manage your New Training Forms</p>
            
            <div style={{
              backgroundColor: "#d1ecf1",
              border: "1px solid #bee5eb",
              borderRadius: "4px",
              padding: "10px",
              marginBottom: "20px"
            }}>
              <strong>ℹ️ Note:</strong> Currently using Todo model to store training forms. 
              Deploy NewTrainingForm model with <code>npx ampx sandbox</code> for dedicated storage.
            </div>

            {user ? (
              <section style={{ marginTop: "20px" }}>
                <h2>Hello, {user.username}</h2>

                {/* ✅ Create NewTrainingForm */}
                <div style={{ 
                  border: "1px solid #ddd", 
                  padding: "20px", 
                  borderRadius: "8px", 
                  marginBottom: "20px",
                  backgroundColor: "#f9f9f9"
                }}>
                  <h3>Create New Training Form</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
                    <input
                      type="text"
                      placeholder="Trainer Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                      disabled={isProcessing}
                    />
                    <input
                      type="text"
                      placeholder="Training Topic"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                      disabled={isProcessing}
                    />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                      disabled={isProcessing}
                    />
                    <button 
                      onClick={createTrainingForm}
                      disabled={isProcessing}
                      style={{
                        padding: "10px 20px",
                        backgroundColor: isProcessing ? "#ccc" : "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: isProcessing ? "not-allowed" : "pointer"
                      }}
                    >
                      {isProcessing ? "Processing..." : "+ Add Training"}
                    </button>
                  </div>
                  
                  {/* Processing Status */}
                  {processingStatus && (
                    <div style={{
                      marginTop: "10px",
                      padding: "10px",
                      backgroundColor: processingStatus.includes("Error") ? "#ffe6e6" : "#e6f3ff",
                      border: `1px solid ${processingStatus.includes("Error") ? "#ff9999" : "#99ccff"}`,
                      borderRadius: "4px"
                    }}>
                      <strong>Status:</strong> {processingStatus}
                    </div>
                  )}
                </div>

                {/* ✅ List of NewTrainingForms */}
                <h3>New Training Forms</h3>
                <ul>
                  {trainingForms.map((form) => (
                    <li key={form.id} style={{ margin: "10px 0" }}>
                      <strong>{form.name}</strong> - {form.topic} ({form.date})
                    </li>
                  ))}
                </ul>
                <button onClick={fetchTrainingForms} style={{
                  padding: "8px 16px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}>Refresh</button>
                
                {/* Debug and Error Logs */}
                <div style={{ marginTop: "40px" }}>
                  <h3>Debug & Error Logs</h3>
                  
                  {errorLog.length > 0 && (
                    <div style={{ marginBottom: "20px" }}>
                      <h4 style={{ color: "#dc3545" }}>🚨 Error Log</h4>
                      <div style={{
                        backgroundColor: "#ffe6e6",
                        border: "1px solid #ff9999",
                        borderRadius: "4px",
                        padding: "10px",
                        maxHeight: "200px",
                        overflowY: "auto",
                        fontFamily: "monospace",
                        fontSize: "12px"
                      }}>
                        {errorLog.map((log, index) => (
                          <div key={index}>{log}</div>
                        ))}
                      </div>
                      <button 
                        onClick={() => setErrorLog([])} 
                        style={{
                          marginTop: "5px",
                          padding: "4px 8px",
                          fontSize: "12px",
                          backgroundColor: "#dc3545",
                          color: "white",
                          border: "none",
                          borderRadius: "3px",
                          cursor: "pointer"
                        }}
                      >
                        Clear Errors
                      </button>
                    </div>
                  )}
                  
                  {debugLog.length > 0 && (
                    <div>
                      <h4 style={{ color: "#007bff" }}>🔍 Debug Log</h4>
                      <div style={{
                        backgroundColor: "#e6f3ff",
                        border: "1px solid #99ccff",
                        borderRadius: "4px",
                        padding: "10px",
                        maxHeight: "200px",
                        overflowY: "auto",
                        fontFamily: "monospace",
                        fontSize: "12px"
                      }}>
                        {debugLog.map((log, index) => (
                          <div key={index}>{log}</div>
                        ))}
                      </div>
                      <button 
                        onClick={() => setDebugLog([])} 
                        style={{
                          marginTop: "5px",
                          padding: "4px 8px",
                          fontSize: "12px",
                          backgroundColor: "#007bff",
                          color: "white",
                          border: "none",
                          borderRadius: "3px",
                          cursor: "pointer"
                        }}
                      >
                        Clear Debug
                      </button>
                    </div>
                  )}
                </div>
              </section>
            ) : (
              <section style={{ marginTop: "20px" }}>
                <h3>Please log in to manage New Training Forms.</h3>
              </section>
            )}
          </div>
        </main>
      )}
    </Authenticator>
  );
}
