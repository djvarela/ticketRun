import {  useState } from "react";
import { AppContext } from "./AppContext";


export const AppProvider = ({ children }) => {
  const [menuBurguer, setMenuBurguer] = useState(false);
  const [modalNewTicket, setModalNewTicket] = useState(false);



  const handleMenuBurguer = () => {
    setMenuBurguer(!menuBurguer);
  };

  const handleModalTicket = () => {
    setModalNewTicket(!modalNewTicket);
  };



  return (
    <AppContext.Provider
      value={{
        menuBurguer,
        handleMenuBurguer,
        setMenuBurguer,
        modalNewTicket,
        setModalNewTicket,
        handleModalTicket,
      

      }}
    >
      {children}
    </AppContext.Provider>
  );
};
