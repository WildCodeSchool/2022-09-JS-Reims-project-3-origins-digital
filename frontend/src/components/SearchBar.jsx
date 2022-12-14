import { FaLessThan } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <Link to="/">
        <FaLessThan className="return_button" />
      </Link>
      <input type="search" id="site-search" placeholder="Search.." />
    </div>
  );
}
