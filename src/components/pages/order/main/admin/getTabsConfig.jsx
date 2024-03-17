import { IoIosAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";

export const getTabsConfig = (currentTabSelected) => [
    {
      index: "add",
      value: "Ajouter un produit",
      icon: <IoIosAdd/>,
      className: currentTabSelected === "add" ? 'tab tab-actived' : 'tab',
    },
    {
      index: "edit",
      value: "Modifier un produit",
      icon: <MdOutlineEdit/>,
      className: currentTabSelected === "edit" ? 'tab tab-actived' : 'tab',
    },
    {
      index: "settings",
      value: "Paramatres",
      icon: <IoSettingsOutline/>,
      className: currentTabSelected === "settings" ? 'tab tab-actived' : 'tab',
    },
  ]; 