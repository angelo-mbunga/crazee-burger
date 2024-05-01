import React, { useContext } from 'react'
import styled from 'styled-components';
import { FiCheck } from "react-icons/fi";
import {TextInput} from '../../../../../reusable-ui/TextInput';
import PrimaryButton from '../../../../../reusable-ui/PrimaryButton';
import imageByDefault from '../../../../../../assets/img/coming-soon.png';
import { theme } from '../../../../../../theme';
import OrderContext from '../../../../../../context/OrderContext';
import { Zoom, toast } from 'react-toastify';
import { getTextInputs } from './getTextInputs';
import { EMPTY_PRODUCT } from '../../../../../../enums/product';

export default function AddForm() {

    const {addProductToMenu, newProduct, setNewProduct } = useContext(OrderContext)
    let newProductToAdd = {
      id : crypto.randomUUID(),
      imageSource : newProduct.imageSource ? newProduct.imageSource : imageByDefault,
      title : newProduct.title,
      price : newProduct.price ? newProduct.price : "",
      quantity: 0,
      isAvailable: true,
      isAdvertised: false
    }
    const handleChange = (e) => {
        const newValue = e.target.value;
        const inputName = e.target.name;
        setNewProduct({...newProduct, [inputName] : newValue})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addProductToMenu(newProductToAdd)
        toast.info("Ajouté avec succes !", {
            icon: <FiCheck size={30} />,
            theme: 'dark',
            transition: Zoom,
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
          }) 
        setNewProduct(EMPTY_PRODUCT)
    }
    const textInputs = getTextInputs(newProduct);

    return (
        <AddFormStyled>
            <div className='preview'>
                { newProduct.imageSource 
                    ? <img src={newProduct.imageSource} alt={newProduct.title} />
                    : <span className='emptyImageMsg'>Pas d'image</span>
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
                        />
                    ))}
                    <PrimaryButton
                        label={"Ajouter le produit"} 
                        className={"ctaBtn"}
                    />
                </form>
            </div>
        </AddFormStyled>
    )
}

const AddFormStyled = styled.div`
    display: grid;
    grid-template-columns: 30% 69%;
    grid-gap: 8px;
    padding: 24px;

    .preview{
        display: flex;
        justify-content: start;
        align-items: start;

        .emptyImageMsg{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: ${theme.fonts.size.P0};
        }
        img {
            border-radius: ${theme.borderRadius.round};
            width: 66%;
            height: 80%;
            margin: auto;
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
