import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="bg-black w- p-3 hover:shadow-lg flex justify-center">
        <ul className="text-gray-500 flex gap-5 items-center">
          <Link to="/">
            <li className="hover:text-white hover:font-bold transition duration-1000">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-white hover:font-bold transition duration-1000">About me</li>
          </Link>
          <Link to="/projects">
            <li className="hover:text-white hover:font-bold transition duration-1000">Projects</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
