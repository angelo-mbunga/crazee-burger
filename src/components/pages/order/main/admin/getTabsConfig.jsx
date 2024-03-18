import { IoIosAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";

export const getTabsConfig = () => [
    {
      index: "add",
      value: "Ajouter un produit",
      icon: <IoIosAdd/>
    },
    {
      index: "edit",
      value: "Modifier un produit",
      icon: <MdOutlineEdit/>
    },
    {
      index: "settings",
      value: "Paramatres",
      icon: <IoSettingsOutline/>
    },
  ]; 