import { IoIosAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import AddPanel from "./panels/AddPanel";
import EditPanel from "./panels/EditPanel";
import SettingsPanel from "./panels/SettingsPanel";

export const getTabsConfig = [
    {
      index: "add",
      value: "Ajouter un produit",
      icon: <IoIosAdd/>,
      content: <AddPanel/>
    },
    {
      index: "edit",
      value: "Modifier un produit",
      icon: <MdOutlineEdit/>,
      content: <EditPanel/>
    },
    {
      index: "settings",
      value: "Paramatres",
      icon: <IoSettingsOutline/>,
      content: <SettingsPanel/>
    },
  ]; 
export const getTabSelected = (tabs, currentTabSelected) => tabs.find((tab) => tab.index === currentTabSelected)

