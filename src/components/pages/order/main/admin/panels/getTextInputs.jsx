import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getTextInputs = (newProduct) => [
    {
        id : 0,
        name : "title",
        value : newProduct.title,
        placeholder : "Nom du produit",
        className : "input-title",
        Icon : <FaHamburger className="inputIcon"/>,
    },
    {
        id : 1,
        name : "imageSource",
        value : newProduct.imageSource,
        placeholder : "Lien URL d'une image",
        className : "input-image-source",
        Icon : <BsFillCameraFill className="inputIcon"/>,
    },
    {
        id : 2,
        name : "price",
        value : newProduct.price,
        className : "input-price",
        placeholder : "Prix",
        Icon : <MdOutlineEuro className="inputIcon"/>,
    }
]
