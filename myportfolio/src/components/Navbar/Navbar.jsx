import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar '> 

      <div  className='bg-cyan-950 flex justify-between items-center max-w-6xl mx-auto p-3'>
      <ul className="text-white flex gap-4">
        <li>Dashboard</li>
        <li>About me</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      </div>
    </div>
  )
}
