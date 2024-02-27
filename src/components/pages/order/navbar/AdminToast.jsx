import {ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components"
import { theme } from "../../../../theme";

export default function AdminToast() {
  return (
    <AdminToastStyled>
      <ToastContainer className="toaster" bodyClassName="body-toast"/>
    </AdminToastStyled>
  )
}
const AdminToastStyled  = styled.div`
  .toaster {
    max-width: 300px;
  }
  .toaster::before {
    display: none;
  }
  .Toastify__toast.Toastify__toast-theme--dark {
    ::before {
      background-color: initial;
    }
  }
  .Toastify__progress-bar {
    background-color: ${theme.colors.background_white};
  }
  .Toastify__toast-icon {
    color: ${theme.colors.background_white};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
