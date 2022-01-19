import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sidebar = ({ links }) => {
  return (
    <div className="sidebar">
      {links.map((link) => {
        <a className="sidebar-link" href="#" key={link.name}>
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </a>;
      })}
    </div>
  );
};

export default Sidebar;
