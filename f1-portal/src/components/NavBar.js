import '../styles/NavBar.css'
// import logo from '../assets/f1_logo.svg';
import { ReactComponent as YourSvg } from '../assets/f1_logo.svg'

export default function NavBar() {
  return (
    <div className='nav-bar'>
      <div className='logo-container'>
        <YourSvg />
      </div>
    </div>
  )
}
