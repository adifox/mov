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
        <div>Direccion</div>
        <div>Datos de contacto</div>
      </div>
      <div>Enlaces</div>
    </div>
    <div className={bottom}>
      <div className={copyWright}>
        <p>&copy; 2021 Estudio Mov. Todos los derechos reservados.</p>
      </div>
      <div className={legalLinkWrapper}>
        <ul className={legalLinks}>
          <li>
            <a>AVISO LEGAL</a>
          </li>
          <li>
            <a>PRIVACIDAD</a>
          </li>
          <li>
            <a>COOKIES</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)
