import Title from './Title'
import { Link } from 'react-router-dom'
export const HeaderComponent = () => {
  return (
    <>
      <div role='navigation' aria-label='Main' className='nav-container'>
        <Title />
        <nav className='navlinks'>
          <ul className='listitems'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <a href=''>Cart</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
