"use client";

import { useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import outputs from "@/amplifyconfiguration.json";
import Banner from "../components/Banner";
import { getCurrentUser, fetchUserAttributes } from "aws-amplify/auth";

Amplify.configure(outputs);

const codeStyle = {
  background: "#f8f9fa",
  padding: "15px",
  borderRadius: "8px",
  marginBottom: "20px",
  fontFamily: "monospace",
  fontSize: "14px",
  border: "1px solid #e9ecef",
  overflowX: "auto" as const
};

export default function ServicesPage() {
  const [messages, setMessages] = useState<Array<{role: string, content: string}>>([]);
  const [input, setInput] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Placeholder response - replace with actual Bedrock API call
    setTimeout(() => {
      const botMessage = { 
        role: "assistant", 
        content: isConnected 
          ? "I'm Claude Sonnet 3.5! I'm ready to help you with any questions."
          : "⚠️ Bedrock connection not configured. Please follow the setup instructions above."
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <Authenticator>
      {({ user, signOut }) => (
        <main style={{ margin: 0, padding: 0 }}>
          <Banner user={user} />
          <div style={{ padding: "0 20px", maxWidth: "1200px", margin: "0 auto" }}>
            <h1>🤖 AI Chatbot Integration with AWS Bedrock</h1>
            <p>Step-by-step guide to integrate Claude Sonnet 3.5 with your Amplify application</p>

            <div style={{ marginBottom: "30px" }}>
              <h2>📋 Setup Instructions</h2>
              
              <h3>1. Enable Bedrock Model Access</h3>
              <div style={codeStyle}>
                • Go to AWS Console → Bedrock → Model Access<br/>
                • Request access to "Claude 3.5 Sonnet" model<br/>
                • Wait for approval (usually instant for Claude models)
              </div>

              <h3>2. Add Bedrock Function to Amplify Backend</h3>
              <div style={codeStyle}>
                {`// amplify/functions/bedrock-chat/resource.ts
import { defineFunction } from '@aws-amplify/backend';

export const bedrockChat = defineFunction({
  name: 'bedrock-chat',
  entry: './handler.ts'
});`}
              </div>

              <h3>3. Create Lambda Handler</h3>
              <div style={codeStyle}>
                {`// amplify/functions/bedrock-chat/handler.ts
import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';

const client = new BedrockRuntimeClient({ region: 'us-east-1' });

export const handler = async (event: any) => {
  const { message } = JSON.parse(event.body);
  
  const command = new InvokeModelCommand({
    modelId: 'anthropic.claude-3-5-sonnet-20241022-v2:0',
    body: JSON.stringify({
      anthropic_version: 'bedrock-2023-05-31',
      max_tokens: 1000,
      messages: [{ role: 'user', content: message }]
    })
  });
  
  const response = await client.send(command);
  const result = JSON.parse(new TextDecoder().decode(response.body));
  
  return {
    statusCode: 200,
    body: JSON.stringify({ response: result.content[0].text })
  };
};`}
              </div>

              <h3>4. Add IAM Permissions</h3>
              <div style={codeStyle}>
                {`// amplify/backend.ts
import { defineBackend } from '@aws-amplify/backend';
import { bedrockChat } from './functions/bedrock-chat/resource';

const backend = defineBackend({
  // ... existing resources
  bedrockChat
});

// Add Bedrock permissions
backend.bedrockChat.resources.lambda.addToRolePolicy(
  new PolicyStatement({
    actions: ['bedrock:InvokeModel'],
    resources: ['arn:aws:bedrock:*::foundation-model/anthropic.claude-3-5-sonnet-20241022-v2:0']
  })
);`}
              </div>

              <h3>5. Install Dependencies</h3>
              <div style={codeStyle}>
                npm install @aws-sdk/client-bedrock-runtime
              </div>

              <h3>6. Deploy Backend</h3>
              <div style={codeStyle}>
                npx ampx sandbox
              </div>
            </div>

            {/* Chatbot Interface */}
            <div style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              backgroundColor: "#fff",
              marginTop: "40px"
            }}>
              <h2>💬 AI Chatbot (Placeholder)</h2>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px"
              }}>
                <span>Connection Status:</span>
                <button
                  onClick={() => setIsConnected(!isConnected)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: isConnected ? "#28a745" : "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  {isConnected ? "🟢 Connected" : "🔴 Disconnected"}
                </button>
              </div>
              
              <div style={{
                height: "300px",
                border: "1px solid #eee",
                borderRadius: "4px",
                padding: "10px",
                overflowY: "auto",
                backgroundColor: "#fafafa",
                marginBottom: "10px"
              }}>
                {messages.length === 0 ? (
                  <p style={{ color: "#666", fontStyle: "italic" }}>
                    Start a conversation with Claude Sonnet 3.5...
                  </p>
                ) : (
                  messages.map((msg, idx) => (
                    <div key={idx} style={{
                      marginBottom: "10px",
                      padding: "8px",
                      borderRadius: "4px",
                      backgroundColor: msg.role === "user" ? "#e3f2fd" : "#f1f8e9"
                    }}>
                      <strong>{msg.role === "user" ? "You" : "Claude"}:</strong> {msg.content}
                    </div>
                  ))
                )}
              </div>
              
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type your message..."
                  style={{
                    flex: 1,
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "4px"
                  }}
                />
                <button
                  onClick={sendMessage}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </main>
      )}
    </Authenticator>
  );
}