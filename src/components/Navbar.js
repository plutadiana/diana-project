import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="costume-navbar">
        <Link to="/">Acasă</Link>
        <Link to="/products">Produse</Link>
        <Link to="/cart">Cos</Link>
        <Link to="/users">Users</Link>
      </nav>
    );
  }
}
