import { useContext } from 'react';
import styled from 'styled-components';
import {HiCursorClick} from 'react-icons/hi';
import OrderContext from '../../../../../../context/OrderContext';
import ProductForm from './ProductForm';

export default function EditForm() {

  const {currentProductSelected, setCurrentProductSelected, IsCardClicked, editProductFromMenu, titleEditRef} = useContext(OrderContext);
  //const defaultImage = "/src/assets/img/coming-soon.png";

  const handleChange = (e) => {
    const {name, value} = e.target;
    const editedProduct = {...currentProductSelected, [name] : value}
    setCurrentProductSelected(editedProduct)
    editProductFromMenu(editedProduct)
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

const EditFormStyled = styled.div``;