import Link from 'next/link'
import { Logo } from '../ui-components/logo'
import { footerSVG, logoSVG } from '../ui-components/svg'
import styles from './footer.module.css'

const {
  footer,
  customShapeDividerTop,
  mainBody,
  bottom,
  legalLinks,
  logoSection,
  logoWrapper,
  white,
  legalLinkWrapper,
  copyWright,
  addres,
  contact,
  links,
} = styles

export const Footer = () => (
  <footer className={footer}>
    <div className={customShapeDividerTop}>{footerSVG(white)}</div>
    <div className={mainBody}>
      <div className={logoSection}>
        <div className={logoWrapper}>
          <Link href='/'>
            <a>{logoSVG(white)}</a>
          </Link>
        </div>
        <div className={addres}>
          <p>Calle Doctor Alcay 16 Oficina C</p>
          <p>50.006 Zaragoza</p>
        </div>
        <div className={contact}>
          <p>876 28 08 06</p>
          <p>info@estudiomov.es</p>
        </div>
      </div>
      <div className={links}>Enlaces</div>
    </div>
    <div className={bottom}>
      <div className={copyWright}>
        <p>&copy; 2021 Estudio Mov. Todos los derechos reservados.</p>
      </div>
      <div className={legalLinkWrapper}>
        <ul className={legalLinks}>
          <li>
            <Link href='/legal'>
              <a>AVISO LEGAL</a>
            </Link>
          </li>
          <li>
            <Link href='/privacidad'>
              <a>PRIVACIDAD</a>
            </Link>
          </li>
          <li>
            <Link href='/cookies'>
              <a>COOKIES</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)
