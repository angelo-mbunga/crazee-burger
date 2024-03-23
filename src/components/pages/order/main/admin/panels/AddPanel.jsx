import React, { useState } from 'react'
import styled from 'styled-components';
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import TextInput from '../../../../../reusable-ui/TextInput';
import PrimaryButton from '../../../../../reusable-ui/PrimaryButton';
import thumbnail from '../../../../../../assets/img/no-image.png'
import comingSoonImg from '../../../../../../assets/img/coming-soon.png'
import AdminToast from '../../../navbar/AdminToast';
import { toast, Zoom } from "react-toastify"
import { fakeMenu1 } from '../../../../../../fakeData/fakeMenu';

export default function AddPanel() {

/*     const [productInfos, setProductInfos] = useState({
        name: '',
        img: '',
        price: '',
    })
    
    const handleInputChange = (evt) => {
        const { name, value } = evt.target;

        setProductInfos((prevProductInfos) => ({
            ...prevProductInfos,
            [name]: value,
        }));
      };
    
    const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(productInfos);
    } */

    const [productName, setProductName] = useState("");
    const [productImg, setProductImg] = useState("");
    const [productPrice, setProductPrice] = useState("");

    const [fakeMenu,setFakeMenu] = useState(fakeMenu1)

    const handleSubmit = (e) => {
        e.preventDefault();
        //setProductName(''),setProductImg(''), setProductPrice('')
        toast.info("Ajouté avec succès !", {
            icon: <FiCheck size={30} />,
            theme: 'dark',
            transition: Zoom,
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        })
        //alert(productName+productPrice+productImg);

        const fakeMenuCopy = [...fakeMenu];

        const id = 3;
        const nom = productName;
        let price = productPrice;
        if (productPrice === '') {
            price = '0,00';
        }
        let img = productImg;
        if (productImg === '') {
            img = comingSoonImg;
        }

        fakeMenu.push({id : id, imageSource : img, title : nom, price : price, quantity: 0, isAvailable: true, isAdvertised: false, })

        setFakeMenu(fakeMenu)
        console.log(fakeMenu)
        setProductName(''),setProductImg(''), setProductPrice('')
    };







    return (
    <AddPanelStyled>
        <div className='preview'>
            <img src={thumbnail} alt="Aucun image" />
        </div>
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <TextInput 
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder={"Nom du produit"}
                    Icon={<FaHamburger className="inputIcon"/>}
                />
                <TextInput 
                    value={productImg}
                    onChange={(e) => setProductImg(e.target.value)}
                    placeholder={"Lien URL d'une image"} 
                    Icon={<BsFillCameraFill className="inputIcon"/>}
                    type='url'
                    pattern="https://.*"
                />
                <TextInput
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    placeholder={"Prix"} 
                    Icon={<MdOutlineEuro className="inputIcon"/>}
                />
                <PrimaryButton
                    label={"Ajouter le produit"} 
                    className={"addProductBtn"}
                />
            </form>
        </div>
        <AdminToast/>
    </AddPanelStyled>
    
    )
}

const AddPanelStyled = styled.div`
    display: grid;
    grid-template-columns: 33% 66%;
    grid-gap: 24px;
    padding: 24px;

    .preview{
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 2px;
            width: 200px; 
        }
    }
    .form{
        background-color: none;
        width: 100%;
    }
    form {
        width: 100%;
        float: left;
        text-align: left;
    }
    input{
        padding: 10px 12px;
        padding-left: 64px;
    }
    .inputIcon {
        height: 16px;
        width: 16px;
    }
    .input {
        width: 100%;
    }
    .addProductBtn{
        width:100%; 
        padding: 10px 0;
        background-color: #60bd4e;
        color: white;
        border: none;
        cursor: pointer;
    }
`;
