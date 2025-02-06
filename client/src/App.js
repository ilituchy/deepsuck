import { useState, useEffect } from "react";
import axios from "axios";
import { FiPaperclip, FiArrowUp } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { RiRobot2Line } from "react-icons/ri";
import {
  Container,
  Header,
  Logo,
  ChatContainer,
  WelcomeMessage,
  InputContainer,
  Input,
  Button,
  Footer,
  ModelButton,
  IconButton,
  InputWrapper,
  InputField,
  ButtonGroup,
} from "./App.styled";

import styled from "styled-components";

const HistoryContainer = styled.div`
  padding: 20px;
  margin-bottom: 120px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const Message = styled.div`
  margin: 20px 0;
  padding: 15px;
  border-radius: 8px;
  background: ${(props) => (props.isUser ? "#3A3A3A" : "#2A2A2A")};
  color: white;
`;

function ChatHistory({ messages }) {
  return (
    <HistoryContainer>
      {messages.map((msg, index) => (
        <Message key={index} isUser={msg.isUser}>
          {msg.text}
        </Message>
      ))}
    </HistoryContainer>
  );
}

function ChatInput({ message, setMessage, handleSubmit, isLoading }) {
  return (
    <InputWrapper>
      <InputContainer>
        <ButtonGroup>
          <ModelButton>
            <RiRobot2Line />
            DeepThink (R1)
          </ModelButton>
          <ModelButton>
            <BiWorld />
            Search
          </ModelButton>
        </ButtonGroup>

        <InputField>
          <Input
            placeholder="Message Mixtral"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && handleSubmit()}
          />
          <IconButton>
            <FiPaperclip />
          </IconButton>
          <IconButton onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "..." : <FiArrowUp />}
          </IconButton>
        </InputField>
      </InputContainer>
    </InputWrapper>
  );
}

function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!message.trim() || isLoading) return;

    setMessages((prev) => [...prev, { text: message, isUser: true }]);
    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.response, isUser: false }]);
      setMessage("");
    } catch (error) {
      console.error("Error details:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: `Error: ${
            error.message || "There was an error processing your request."
          }`,
          isUser: false,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Header>
        <Button>New chat</Button>
      </Header>

      <ChatContainer>
        <WelcomeMessage>
          <h1>Hi, I'm DeepSuck.</h1>
          <p>How can I help you today?</p>
        </WelcomeMessage>

        <ChatHistory messages={messages} />

        <ChatInput
          message={message}
          setMessage={setMessage}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </ChatContainer>

      <Footer>AI-generated, for reference only</Footer>
    </Container>
  );
}

export default App;
