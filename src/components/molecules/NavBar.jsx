import React, { useState } from 'react'
import { navItems } from '../../constants/navItems'
import hamburger from '../../assets/hamburger.svg';
import classNames from 'classnames';


const NavBar = () => {

  const [mobileMenuActive, toggleMobileMenu] = useState(false);
  return (
    <nav className='navbar-container'>
      <header className={classNames('w-[90%] md:w-[70%] lg:w-[70%] xl:w-[70%] m-auto pt-10 text-white', {'text-black': mobileMenuActive})}>
        <section className='flex place-content-between'>
          <div className="navbar-logo-container">
            <a href="/">
              <img className="h-8 -mt-2" src="https://storage.123fakturere.no/public/icons/diamond.png" height="8rem" />
            </a>
          </div>
          <div className="navbar-dropdown">
          <svg onClick={() => toggleMobileMenu(!mobileMenuActive)} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-white text-4xl cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
          </div>
          <div className='flex gap-4'>
            <div className='mobile-menu bg-[#fff] absolute mt-12 shadow-lg' style={{height: mobileMenuActive ? '20rem' : '0px', opacity: 1}}>
              <div className='mobile-menu-container' style={{position: 'relative', zIndex: 30, height: '34%'}}>
                {
                  navItems.map(item => (
                  <a className='text-[15px] linkCollection block md:block lg:inline-block xl:ml-4 xl:hover:text-[#ccc] px-8 py-5 w-full' key={item.id} href={item.url}>
                    <span>
                      {item.label}
                    </span>
                  </a>
                  ))
                }
              </div>
            </div>
            <div className='desktop-menu'>
              {
                navItems.map(item => (
                <a className='text-white text-[15px] linkCollection block md:block lg:inline-block xl:ml-4 xl:hover:text-[#ccc] px-3 m-0' key={item.id} href={item.url}>
                  <span>
                    {item.label}
                  </span>
                </a>
                ))
              }
            </div>
          </div>
        </section>
      </header>
    </nav>
  )
}

export default NavBar