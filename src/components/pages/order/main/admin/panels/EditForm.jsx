import { useContext, useState } from 'react';
import { Zoom, toast } from 'react-toastify';
import { CiSaveDown2 } from "react-icons/ci";
import styled from 'styled-components';
import {HiCursorClick} from 'react-icons/hi';
import { theme } from '../../../../../../theme';
import OrderContext from '../../../../../../context/OrderContext';
import PrimaryButton from '../../../../../reusable-ui/PrimaryButton';
import {TextInput} from '../../../../../reusable-ui/TextInput';
import { getTextInputs } from './getTextInputs';
import thumbnail from '../../../../../../assets/img/no-image.png';
import { EMPTY_PRODUCT } from './AddForm';

export default function EditForm() {

  const {productInfosToDisplay, setProductInfosToDisplay, IsCardClicked, editProductFromMenu, setNewProduct, inputComponentRef} = useContext(OrderContext);
  const textInputs = getTextInputs(productInfosToDisplay);
  const [productUpdated, setProductUpdated] = useState(EMPTY_PRODUCT);

  const editedProduct = {
    id : productInfosToDisplay.id,
    imageSource : productInfosToDisplay.imageSource,
    title : productInfosToDisplay.title,
    price : productInfosToDisplay.price,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false
  }

  const handleChange = (e) => {
    const newValue = e.target.value;
    const inputName = e.target.name;
    setProductInfosToDisplay({...editedProduct, [inputName] : newValue})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    editProductFromMenu(editedProduct)
    toast.info("Modifications enregistrées", {
      icon: <CiSaveDown2 size={30} />,
      theme: 'dark',
      transition: Zoom,
      position: "bottom-right",
      autoClose: 1200,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false, 
      draggable: false,
    }) 
  }

  return (
    <EditFormStyled>
      {IsCardClicked 
        ?
          <div className='editPanel'>
            <div className='preview'>
              { productInfosToDisplay.imageSource 
                ? <img src={productInfosToDisplay.imageSource} alt={productInfosToDisplay.title} />
                : <img src={thumbnail} alt='aucun image' />
              }
            </div>
            <div className='form'>
              <form onSubmit={handleSubmit}>
                <TextInput
                  ref={inputComponentRef}
                  id="0"
                  name= "title"
                  value={productInfosToDisplay.title}
                  onChange={handleChange}
                />
                <TextInput
                  id="1"
                  name= "imageSource"
                  value={productInfosToDisplay.imageSource}
                  onChange={handleChange}
                />
                <TextInput
                  id="2"
                  name= "price"
                  value={productInfosToDisplay.price}
                  onChange={handleChange}
                />
{/*                 {textInputs.map((input) => (
                   <TextInput
                    ref={inputComponentRef}
                    key={input.id}
                    name={input.name}
                    value={input.value}
                    onChange={handleChange}
                    Icon={input.Icon}
                  /> 
                ))} */}
                  <PrimaryButton
                  label={"Modifier le produit"} 
                  className={"addProductBtn"}
                  />
              </form>
            </div>
          </div>
        : 
          <p className='emptyPanelMsg'>Cliquez sur un produit pour le modifier <HiCursorClick className='emptyPanelIcon'/></p>
      }
    </EditFormStyled>
  )
}

const EditFormStyled = styled.div`  
/*   width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .emptyPanelMsg {
    color: ${theme.colors.greySemiDark};
    font-size: ${theme.fonts.size.P1};
    display: flex;

    .emptyPanelIcon {
      padding: 0 8px;
    }
  } */
    .editPanel {
      width: 100%;
      display: inline-flex;
    }
    .preview{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 33%;

        img {
          outline: 2px solid ${theme.colors.greyLight};
          border-radius: ${theme.borderRadius.round};
          width: 66%;
          height: 80%;
          object-fit: contain;
          object-position: center;
        }
    }
    form{
      background-color: purple;
      width: 66%;

        div {
          display: block;
          float: left;
          margin-left: 8px;
          height: 24px;
        }
    }
    input{
        padding: 10px 12px;
        padding-left: 64px;
        background-color: ${theme.colors.background_white};
        height: 16px;
    }
    .inputIcon {
        height: 16px;
        width: 16px;
        margin-top: -3px;
    }
    .input {
        width: 100%;
    }
    .addProductBtn{
        width: 50%; 
        padding: 10px;
        background-color: ${theme.colors.success};
        color: ${theme.colors.white};
        border: none;
        cursor: pointer;
    }
    .addProductBtn:hover{
        background-color: ${theme.colors.green};
    }
  
`;
