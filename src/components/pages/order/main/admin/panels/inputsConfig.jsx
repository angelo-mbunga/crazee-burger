import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { GoMegaphone } from "react-icons/go";
import { FiPackage } from "react-icons/fi";
import { isAvailableOptions, isAdvertisedOptions } from "../../../../../../enums/select";

export const textInputsConfig = (newProduct) => [
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
export const selectInputsConfig = (newProduct) => [ 
    {
        id : 3,
        name : "isAvailable",
        options : isAvailableOptions,
        value : newProduct.isAvailable,
        className : "is-available-select"
        //Icon : <FiPackage className="inputIcon"/>,
    },
    {
        id : 4,
        name : "isAdvertised",
        options : isAdvertisedOptions,
        value : newProduct.isAdvertised,
        className : "is-advertised-select"
        //Icon : <GoMegaphone className="inputIcon"/>,
    }
]
