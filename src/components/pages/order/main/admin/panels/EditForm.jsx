import { useContext, useState } from 'react';
import styled from 'styled-components';
import {HiCursorClick} from 'react-icons/hi';
import OrderContext from '../../../../../../context/OrderContext';
import ProductForm from './ProductForm';
import { theme } from '../../../../../../theme';
import { toast, Zoom } from "react-toastify";
import { BsCloudCheck } from "react-icons/bs";

export default function EditForm() {

  const {currentProductSelected, setCurrentProductSelected, IsCardClicked, editProductFromMenu, titleEditRef, username} = useContext(OrderContext);
  const [valueOnFocus, setValueOnFocus] = useState();

  const handleChange = (e) => {
    const {name, value} = e.target;
    const editedProduct = {...currentProductSelected, [name] : value}
    setCurrentProductSelected(editedProduct)
    editProductFromMenu(editedProduct, username)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleOnFocus = (e) => {
    const inputValueOnfocus = e.target.value;
    setValueOnFocus(inputValueOnfocus)
  }
  const handleOnBlur = (e) => {
    const valueOnBlur = e.target.value;
    if (valueOnBlur !== valueOnFocus) {
      toast.info("Modification enregistrée !", {
        icon: <BsCloudCheck size={30} />,
        theme: 'dark',
        transition: Zoom,
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      })  
    }
  }

  return (
    <EditFormStyled>
      {IsCardClicked 
        ?
          <ProductForm 
            onSubmit={handleSubmit} 
            onChange={handleChange} 
            onFocus={handleOnFocus} 
            onBlur={handleOnBlur} 
            product={currentProductSelected}
            formFooterContent={"Modifier le produit en temps réel"}
            formFooterClass={"formFooterCommentary"}
            ref={titleEditRef}
          />
        : 
          <p className='emptyPanelMsg'>Cliquez sur un produit pour le modifier <HiCursorClick className='emptyPanelIcon'/></p>
      }
    </EditFormStyled>
  )
}

const EditFormStyled = styled.div`
  height: 100%;
  .emptyPanelMsg {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P3};
    font-family: "Amatic SC", cursive;
    margin: 0!important;
  }
  .emptyPanelIcon {
    margin-left: 8px;
    color: ${theme.colors.greyDark};
  }
`;