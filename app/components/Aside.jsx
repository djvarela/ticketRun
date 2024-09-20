import { Link } from "@remix-run/react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";


export const Aside = () => {
  const { menuBurguer } = useContext(AppContext);


  return (
    <aside className={ menuBurguer ? 'aside-hide' : 'aside-show'}>
        <div className="logo">
       
            <h1>Ticket App</h1>

        </div>
      <nav>
        <ul>
          <li><Link to={'/'}>Dashboard</Link></li>
          <li><Link to={'/tickets'}>Tickes</Link></li>
          <li>Calendar</li>
          <li>Contacts</li>
          <li>File Manager</li>
          <li>To Do</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>
  );
};
