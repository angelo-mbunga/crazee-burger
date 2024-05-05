import React, { useContext } from 'react';
import { FiCheck } from "react-icons/fi";
import imageByDefault from '../../../../../../assets/img/coming-soon.png';
import OrderContext from '../../../../../../context/OrderContext';
import { Zoom, toast } from 'react-toastify';
import { EMPTY_PRODUCT } from '../../../../../../enums/product';
import ProductForm from './ProductForm';
import styled from 'styled-components';

export default function AddForm() {

    const {addProductToMenu, newProduct, setNewProduct} = useContext(OrderContext)

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
        // @TODO : Check why handleChange NOK within reusable form
        const newValue = e.target.value;
        const inputName = e.target.name;
        setNewProduct({...newProduct, [inputName] : newValue})
    }
    const handleSubmit = (e) => {
        // @TODO : Check why handleSubmit NOK within reusable form
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
const AddFormStyled = styled.div``;