import React from "react"
import "react-toastify/dist/ReactToastify.css"
import { theme } from "../../../../theme"
import { ToastContainer } from "react-toastify"
import styled from "styled-components"

export default function NavbarRightSideIncomplet() {

  return (
    <NavbarRightSideIncompletStyled>
      <ToastContainer className="toaster" bodyClassName="body-toast"/>
    </NavbarRightSideIncompletStyled>
  )
}

const NavbarRightSideIncompletStyled = styled.div`
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
    background-color: white;
  }
  .Toastify__toast-icon {
    color: white;
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
`
