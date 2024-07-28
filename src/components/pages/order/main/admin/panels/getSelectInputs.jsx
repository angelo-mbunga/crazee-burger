import { GoMegaphone } from "react-icons/go";
import { FiPackage } from "react-icons/fi";

export const getSelectInputs = (newProduct) => [ 
    {
        id : 3,
        name : "isAvailable",
        value : newProduct.isAvailable,
        Icon : <FiPackage className="inputIcon"/>,
    },
    {
        id : 4,
        name : "isAdvertised",
        value : newProduct.isAdvertised,
        Icon : <GoMegaphone className="inputIcon"/>,
    }
]

