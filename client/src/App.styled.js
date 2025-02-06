import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1E1E1E;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
`;

// Header
export const Header = styled.header`
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

// Chat container
export const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const WelcomeMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: #5B5FEF;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #4A4FD1;
  }
`;

// Footer
export const Footer = styled.footer`
  text-align: center;
  padding: 10px;
  color: #666;
  font-size: 12px;
`;

export const InputWrapper = styled.div`
  width: 90%;
  max-width: 800px;
  width: 600px;
`;

export const InputContainer = styled.div`
  background-color: #2A2A2A;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputField = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #808080;
  font-size: 16px;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  color: white;
  flex: 1;
  font-size: 16px;
  outline: none;
  
  &::placeholder {
    color: #808080;
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const ModelButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #3A3A3A;
  border: none;
  border-radius: 8px;
  color: white;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #444444;
  }
`;

export const IconButton = styled.button`
  background-color: #3A3A3A;
  border: none;
  border-radius: 50%;
  color: white;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #444444;
  }
`;