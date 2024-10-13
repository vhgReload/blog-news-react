import logo from '../assets/images/logo.svg'
import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='flex place-content-between items-center mb-14'>
      <Link to="/">
  <img className='cursor-pointer' src={logo} alt="logo" />
</Link>
      <Navbar />
    </header>
  )
}