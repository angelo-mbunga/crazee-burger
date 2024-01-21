import Logo from "../../reusable-ui/Logo";
import LoginForm  from "./LoginForm";
import styled from 'styled-components';

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo/>
      <LoginForm/> 
    </LoginPageStyled>
  )
}
const LoginPageStyled = styled.div`
  background-color: red;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`