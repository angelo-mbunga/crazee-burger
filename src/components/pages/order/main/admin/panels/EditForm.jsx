import { useContext } from 'react';
import styled from 'styled-components';
import {HiCursorClick} from 'react-icons/hi';
import OrderContext from '../../../../../../context/OrderContext';
import ProductForm from './ProductForm';
import { theme } from '../../../../../../theme';

export default function EditForm() {

  const {currentProductSelected, setCurrentProductSelected, IsCardClicked, editProductFromMenu, titleEditRef, editProductFromBasket} = useContext(OrderContext);

  const handleChange = (e) => {
    const {name, value} = e.target;
    const editedProduct = {...currentProductSelected, [name] : value}
    setCurrentProductSelected(editedProduct)
    editProductFromMenu(editedProduct)
    editProductFromBasket(editedProduct)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <EditFormStyled>
      {IsCardClicked 
        ?
          <ProductForm 
            onSubmit={handleSubmit} 
            onChange={handleChange} 
            product={currentProductSelected}
            formFooterContent="Modifier le produit en temps réel" 
            formFooterClass="formFooterCommentary"
            ref={titleEditRef}
          />
        : 
          <p className='emptyPanelMsg'>Cliquez sur un produit pour le modifier <HiCursorClick className='emptyPanelIcon'/></p>
      }
    </EditFormStyled>
  )
}

const EditFormStyled = styled.div`
  display: flex;
  height: 100%;
  .emptyPanelMsg {
    height: 66%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P3};
    font-family: "Amatic SC", cursive;
  }
  .emptyPanelIcon {
    margin-left: 8px;
    color: ${theme.colors.greyDark};
  }
`;