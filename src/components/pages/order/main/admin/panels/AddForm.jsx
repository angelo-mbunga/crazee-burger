import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { MdOutlineEuro } from "react-icons/md";
import TextInput from '../../../../../reusable-ui/TextInput';
import PrimaryButton from '../../../../../reusable-ui/PrimaryButton';
import thumbnail from '../../../../../../assets/img/no-image.png';
import imageByDefault from '../../../../../../assets/img/coming-soon.png';
import AdminToast from '../../../navbar/AdminToast';
import { theme } from '../../../../../../theme';
import OrderContext from '../../../../../../context/OrderContext';
import { Zoom, toast } from 'react-toastify';

const EMPTY_PRODUCT = {
    id : "",
    imageSource : "",
    title : "",
    price : "",
    quantity: 0,
    isAvailable: true,
    isAdvertised: false
}

export default function AddForm() {

    const {addProductToMenu} = useContext(OrderContext)

    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

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

    return (
        <AddFormStyled>
            <div className='preview'>
                { newProduct.imageSource 
                    ? <img src={newProduct.imageSource} alt={newProduct.title} />
                    : <img src={thumbnail} alt='aucun image' />
                }
            </div>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <TextInput 
                        name='title'
                        value={newProduct.title}
                        onChange={handleChange}
                        placeholder={"Nom du produit"}
                        Icon={<FaHamburger className="inputIcon"/>}
                    />
                    <TextInput 
                        name='imageSource'
                        value={newProduct.imageSource}
                        onChange={handleChange}
                        placeholder={"Lien URL d'une image"} 
                        Icon={<BsFillCameraFill className="inputIcon"/>}
                        //type='url'
                        //pattern="https://.*"
                    />
                    <TextInput
                        name='price'        
                        value={newProduct.price}
                        onChange={handleChange}
                        placeholder={"Prix"} 
                        Icon={<MdOutlineEuro className="inputIcon"/>}
                    />
                    <PrimaryButton
                        label={"Ajouter le produit"} 
                        className={"addProductBtn"}
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

        img {
            outline: 2px solid ${theme.colors.greyLight};
            border-radius: ${theme.borderRadius.round};
            width: 66%;
            height: 80%;
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
