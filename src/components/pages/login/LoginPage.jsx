import Logo from "../../reusable-ui/Logo";
import backgroundImage from "../../../assets/img/burger-and-fries-background.jpg";
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: auto;

  ::before {
    content: "";
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage});
    background-position: center;
    background-size: cover;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
`