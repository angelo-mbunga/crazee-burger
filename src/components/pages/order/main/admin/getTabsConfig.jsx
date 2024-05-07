import { IoIosAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import AddForm from "./panels/AddForm";
import EditForm from "./panels/EditForm";
import SettingsPanel from "./panels/SettingsPanel";

export const getTabsConfig = [
    {
      index: "add",
      value: "Ajouter un produit",
      icon: <IoIosAdd/>,
      content: <AddForm/>
    },
    {
      index: "edit",
      value: "Modifier un produit",
      icon: <MdOutlineEdit/>,
      content: <EditForm/>
    },
    {
      index: "settings",
      value: "Paramatres",
      icon: <IoSettingsOutline/>,
      content: <SettingsPanel/>
    },
  ]; 
export const getTabSelected = (tabs, currentTabSelected) => tabs.find((tab) => tab.index === currentTabSelected)

