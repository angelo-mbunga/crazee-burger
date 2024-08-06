import React, { useContext } from 'react';
import { FiCheck } from "react-icons/fi";
import imageByDefault from '../../../../../../assets/img/coming-soon.png';
import OrderContext from '../../../../../../context/OrderContext';
import { Zoom, toast } from 'react-toastify';
import { EMPTY_PRODUCT } from '../../../../../../enums/product';
import ProductForm from './ProductForm';
import styled from 'styled-components';
import { replaceFrenchCommaWithDot } from '../../../../../../utils/maths';
import { theme } from '../../../../../../theme';

export default function AddForm() {

    const {addProductToMenu, newProduct, setNewProduct, username} = useContext(OrderContext)

    let newProductToAdd = {
      id : crypto.randomUUID(),
      imageSource : newProduct.imageSource ? newProduct.imageSource : imageByDefault,
      title : newProduct.title,
      price : newProduct.price ? replaceFrenchCommaWithDot(newProduct.price) : 0.00,
      quantity: 0,
      isAvailable: newProduct.isAvailable,
      isAdvertised: newProduct.isAdvertised,
    }
    const handleChange = (e) => {
        const newValue = e.target.value;
        const inputName = e.target.name;
        setNewProduct({...newProduct, [inputName] : newValue})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addProductToMenu(newProductToAdd, username)
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
            <ProductForm 
                onSubmit={handleSubmit} 
                onChange={handleChange} 
                product={newProduct}
                formFooterContent="Ajouter le produit" 
                formFooterClass="formFooterBtn"
            />
        </AddFormStyled>
    )
}
const AddFormStyled = styled.div`
    height:100%;

    .formFooterBtn {
        width: 100%; 
        height: 100%;
        padding: 8px;
        background-color: ${theme.colors.success};
        color: ${theme.colors.white};
        border-radius: ${theme.borderRadius.round};
        border: none;
        cursor: pointer;
    }
    .formFooterBtn:hover {
        background-color: ${theme.colors.green};
    } 
`