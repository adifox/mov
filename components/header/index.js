import { useState } from 'react'
import Link from 'next/link'

// Components
import { Logo } from '../ui-components/logo'
import { Modal } from '../ui-components/modal'
// Styles
import styles from './header.module.css'

const {
  menuItems,
  headerModal,
  closeHeaderModal,
  mobileLinks,
  closeMobileLinks,
  modalBackground,
  closeModalBackground,
  headerWrapper,
  headerWrapperOpen,
  headerContainer,
  logoWrapper,
  navSection,
  ulStyle,
  menuButton,
  mobileMenu,
} = styles

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const modalStyle = isMenuOpen ? headerModal : closeHeaderModal
  const mobileNavItems = isMenuOpen ? mobileLinks : closeMobileLinks
  const modalBackgroundStyles = isMenuOpen
    ? modalBackground
    : closeModalBackground
  const headerWrapperStyles = isMenuOpen ? headerWrapperOpen : headerWrapper

  return (
    <>
      <header className={headerWrapperStyles}>
        <div className={headerContainer}>
          <div className={logoWrapper}>
            <Link href='/'>
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <nav className={navSection}>
            <ul className={ulStyle}>
              <li className={menuItems}>
                <Link href='/'>INICIO</Link>
              </li>
              <li className={menuItems}>
                <Link href='/actividades'>ACTIVIDADES</Link>
              </li>
              <li className={menuItems}>
                <Link href='/guias'>GUÍAS</Link>
              </li>
              <li className={menuItems}>
                <Link href='/regalos'>REGALOS</Link>
              </li>
              <li className={menuItems}>
                <Link href='/exposiciones'>EXPOSICIONES</Link>
              </li>
              <li className={menuItems}>
                <Link href='/rsc'>RSC</Link>
              </li>
            </ul>
          </nav>
          <button
            className={menuButton}
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <i className='fa fa-close'></i>
            ) : (
              <i className='fa fa-bars'></i>
            )}
          </button>
        </div>
      </header>
      <div
        className={modalBackgroundStyles}
        onClick={() => setMenuOpen(!isMenuOpen)}
      ></div>
      <Modal
        className={modalStyle}
        onClickHandler={() => setMenuOpen(!isMenuOpen)}
      >
        <nav className={mobileMenu} onClick={() => setMenuOpen(!isMenuOpen)}>
          <ul>
            <li className={mobileNavItems}>
              <Link href='/'>INICIO</Link>
            </li>
            <li className={mobileNavItems}>
              <Link href='/actividades'>ACTIVIDADES</Link>
            </li>
            <li className={mobileNavItems}>
              <Link href='/guias'>GUÍAS</Link>
            </li>
            <li className={mobileNavItems}>
              <Link href='/regalos'>REGALOS</Link>
            </li>
            <li className={mobileNavItems}>
              <Link href='/exposiciones'>EXPOSICIONES</Link>
            </li>
            <li className={mobileNavItems}>
              <Link href='/rsc'>RSC</Link>
            </li>
          </ul>
        </nav>
      </Modal>
    </>
  )
}

export default Header
