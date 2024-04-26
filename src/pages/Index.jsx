import React, { useState } from "react";
import { Box, Button, Input, VStack, Text, Container, Heading } from "@chakra-ui/react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") return;

    // Simulating a chatbot response
    const userMessage = { id: messages.length + 1, text: input, sender: "user" };
    const botResponse = { id: messages.length + 2, text: `Echo: ${input}`, sender: "bot" };

    setMessages([...messages, userMessage, botResponse]);
    setInput("");
  };

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl" textAlign="center">
          Chatbot Simulator <FaRobot />
        </Heading>
        <Box w="100%" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <VStack spacing={4} align="stretch">
            {messages.map((message) => (
              <Box key={message.id} alignSelf={message.sender === "user" ? "flex-end" : "flex-start"}>
                <Text fontSize="md" color={message.sender === "user" ? "blue.500" : "green.500"}>
                  {message.text}
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <Input placeholder="Type your message here..." value={input} onChange={handleInputChange} />
            <Button rightIcon={<FaPaperPlane />} colorScheme="blue" type="submit">
              Send
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Index;
