import { useState } from 'react'
import Link from 'next/link'

// Components
import { Modal } from '../ui-components/modal'
import { logoSVG } from '../ui-components/svg'
// Styles
import styles from './header.module.css'

const {
  menuItems,
  headerModal,
  closeHeaderModal,
  mobileLinks,
  closeMobileLinks,
  headerWrapper,
  headerWrapperOpen,
  headerContainer,
  logoWrapper,
  navSection,
  ulStyle,
  menuButton,
  mobileMenu,
  green,
} = styles

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const modalStyle = isMenuOpen ? headerModal : closeHeaderModal
  const mobileNavItems = isMenuOpen ? mobileLinks : closeMobileLinks
  const headerWrapperStyles = isMenuOpen ? headerWrapperOpen : headerWrapper

  return (
    <>
      <header className={headerWrapperStyles}>
        <div className={headerContainer}>
          <div className={logoWrapper}>
            <Link href='/'>
              <a>{logoSVG(green)}</a>
            </Link>
          </div>
          <nav className={navSection}>
            <ul className={ulStyle}>
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
                <Link href='/kit-digital'>KIT DIGITAL</Link>
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
      <Modal
        className={modalStyle}
        onClickHandler={() => setMenuOpen(!isMenuOpen)}
      >
        <nav className={mobileMenu} onClick={() => setMenuOpen(!isMenuOpen)}>
          <ul>
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
              <Link href='/kit-digital'>KIT DIGITAL</Link>
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
