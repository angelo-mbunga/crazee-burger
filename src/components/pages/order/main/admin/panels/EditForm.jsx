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

export default function EditForm() {

  const {currentProductSelected, setCurrentProductSelected, IsCardClicked, editProductFromMenu, titleEditRef} = useContext(OrderContext);
  const textInputs = getTextInputs(currentProductSelected);

  const handleChange = (e) => {
    const {name, value} = e.target;
    const editedProduct = {...currentProductSelected, [name] : value}
    setCurrentProductSelected(editedProduct)
    editProductFromMenu(editedProduct)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
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
              { currentProductSelected.imageSource 
                ? <img src={currentProductSelected.imageSource} alt={currentProductSelected.title} />
                : <img src={thumbnail} alt='aucun image' />
              }
            </div>
            <div className='form'>
              <form onSubmit={handleSubmit}>
                {textInputs.map((input) => (
                  <TextInput 
                    key={input.id}
                    name={input.name}
                    value={input.value}
                    onChange={handleChange}
                    placeholder={input.placeholder}
                    Icon={input.Icon}
                    ref={input.name == "title" ? titleEditRef : null}
                  />
                ))}
                  <PrimaryButton
                    label={"Modifier le produit"} 
                    className={"ctaBtn"}
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
  .editPanel{
    display: grid;
    grid-template-columns: 30% 69%;
    grid-gap: 8px;
    padding: 24px;
  }
  .emptyPanelMsg {
    color: ${theme.colors.greySemiDark};
    font-size: ${theme.fonts.size.P1};
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .emptyPanelIcon {
      padding: 0 8px;
    }
  }

  .preview{
    display: flex;
    justify-content: start;
    align-items: start;
    height: 200px;

    img {
      border-radius: ${theme.borderRadius.round};
      width: 66%;
      margin: auto;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  .form{
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
  .ctaBtn{
    width: 50%; 
    padding: 10px;
    background-color: ${theme.colors.success};
    color: ${theme.colors.white};
    border: none;
    cursor: pointer;
  }
  .ctaBtn:hover{
    background-color: ${theme.colors.green};
  }
`;