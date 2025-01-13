import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar '> 

<div className="bg-cyan-950 flex justify-between items-center  mx-auto p-3">
      <ul className="text-white flex gap-4">
        <Link to='/'><li>Dashboard</li></Link>
        <Link to='/about'><li>About me</li></Link>
        <Link to='/projects'><li>Projects</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
      </ul>
      </div>
    </div>
  )
}
