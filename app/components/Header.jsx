import { useContext, useState } from "react";

import { AppContext } from "../context/AppContext";
import { FormsNewTicket } from "../components";





export const Header = () => {
  const [menuProfile, setMenuProfile] = useState(false);

  const {handleModalTicket,modalNewTicket ,handleMenuBurguer, menuBurguer, setMenuBurguer } =
    useContext(AppContext);

  const handleProfileMenu = () => {
    setMenuProfile(!menuProfile);
  };

  return (
    <header>
      <span
        className="menu"
        onClick={() => setMenuBurguer(!menuBurguer)}
      ></span>

      <form action="">
        <input type="text" placeholder="Buscar..." />
      </form>

      <span>
        <button
        onClick={handleModalTicket}
        >+</button>

        <div className={  `modal-new-ticket ${  modalNewTicket ? 'modal-new-ticket-active': null  }`   }>
          <button
          onClick={handleModalTicket}
          className="btn-close">x</button>
          <FormsNewTicket />
        </div>
      </span>

      <div className="user">
        <div className="avatar">
          <img src={"img/icons/avatar.svg"} width={20} alt="avatar" />
        </div>
        <small onClick={handleProfileMenu}>Jon Doe</small>

        <div className={`user-menu  ${menuProfile ? "user-menu-active" : ""}`}>
          <ul>
            <li>Perfil</li>
          </ul>
        </div>
      </div>
    </header>
  );
};
