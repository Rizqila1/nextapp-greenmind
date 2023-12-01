import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faFilter } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex items-center">
      <h1 className="font-quella pt-11 pb-10 text-2xl me-24">GREENMIND</h1>
      <section className="flex w-full justify-between items-center">
        <div className="flex gap-12 text-lg">
          <h3 className="text-black">Home</h3>
          <h3 className="text-gray-500">Products</h3>
          <h3 className="text-gray-500">Contacts</h3>
        </div>
        <div className="flex gap-12">
          <FontAwesomeIcon icon={faCartShopping} className="w-6" />
          <FontAwesomeIcon icon={faUser} className="w-5" />
          <p className="font-medium">|</p>
          <FontAwesomeIcon icon={faFilter} className="w-6" />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
