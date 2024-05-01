import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getTextInputs = (newProduct) => [
    {
        id : 0,
        name : "title",
        value : newProduct.title,
        placeholder : "Nom du produit",
        Icon : <FaHamburger className="inputIcon"/>,
    },
    {
        id : 1,
        name : "imageSource",
        value : newProduct.imageSource,
        placeholder : "Lien URL d'une image",
        Icon : <BsFillCameraFill className="inputIcon"/>,
    },
    {
        id : 2,
        name : "price",
        value : newProduct.price,
        placeholder : "Prix",
        Icon : <MdOutlineEuro className="inputIcon"/>,
    },
]
