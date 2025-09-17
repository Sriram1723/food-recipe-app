import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);
  return (
    <div className="navbar">
      <div className="title">Food Recipe</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
        type="text"
        placeholder="Enter item ..."
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
        onSubmit={(e) => handleSubmit(e)}
      />
      </form>
      <div className="quick-links">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/favourites"}>Favourites</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
