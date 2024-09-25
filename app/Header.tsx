import React from "react";

const Header = () => {
  return (
    <div className="bg-black bg-opacity-25 text-black text-lg">
      <label htmlFor="locations">Pick a Location:</label>
      <select name="locations" id="locations">
        <option value="paris">Paris</option>
        <option value="london">London</option>
        <option value="washington">Washington</option>
        <option value="tokyo">Tokyo</option>
        <option value="lagos">Lagos</option>
        <option value="abuja">Abuja</option>
      </select>
    </div>
  );
};

export default Header;
