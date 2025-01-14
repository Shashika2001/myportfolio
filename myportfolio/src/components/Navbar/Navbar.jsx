import { Link } from 'react-router-dom';



export default function Navbar() {
  const navbarStyle = {
    backgroundColor: '#fff', // Tailwind's cyan-500
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  
  return (
    <div className='navbar '>
        

<div className="bg-gradient-to-r from-black  flex justify-between items-center  mx-auto p-3 hover:shadow-lg"
style={navbarStyle}>
      <ul className="text-white flex gap-5 ">
        <Link to='/'><li  className="hover:text-cyan-500 hover:underline transition duration-300">Dashboard</li></Link>
        <Link to='/about'><li  className="hover:text-cyan-500 hover:underline transition duration-300">About me</li></Link>
        <Link to='/projects'><li  className="hover:text-cyan-500 hover:underline transition duration-300">Projects</li></Link>
        <Link to='/contact'><li  className="hover:text-cyan-500 hover:underline transition duration-300">Contact</li></Link>
      </ul>
      </div>
    </div>
  )
}
