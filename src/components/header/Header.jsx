import {NavBar} from './NavBar'
import './Menu.css'
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'


export const Header = (props) => {
  return (
    
    <div className='heaader'>
      <img className='imglogo' src="/img/pngwing.com.png"/>
     <Link to="/"> <h1>CalviCaps</h1></Link>
      
      
      <NavBar/>
      <CartWidget/>
    </div>
    
  )
}


