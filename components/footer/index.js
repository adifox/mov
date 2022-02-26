import Link from 'next/link'
import { Logo } from '../ui-components/logo'
import { footerSVG, logoSVG, facebookSVG, instaSVG } from '../ui-components/svg'
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
  addressLinkSection,
  contact,
  links,
  pageLinks,
  logoAddressSection,
  socialMedia,
  facebookWrapper,
  instaWrapper,
  addressBox,
} = styles

export const Footer = () => (
  <footer className={footer}>
    <div className={customShapeDividerTop}>{footerSVG(white)}</div>
    <div className={mainBody}>
      <div className={logoSection}>
        <div className={logoAddressSection}>
          <div className={logoWrapper}>
            <Link href='/'>
              <a>{logoSVG(white)}</a>
            </Link>
          </div>
          <div className={addressLinkSection}>
            <div className={addressBox}>
              <p>Calle Doctor Alcay 16 Oficina C</p>
              <p>50.006 Zaragoza</p>
            </div>
            <ul className={pageLinks}>
              <li>
                <Link href='/actividades'>
                  <a>Actividades</a>
                </Link>
              </li>
              <li>
                <Link href='/guias'>
                  <a>Guias</a>
                </Link>
              </li>
              <li>
                <Link href='/regalos'>
                  <a>Regalos</a>
                </Link>
              </li>
              <li>
                <Link href='/exposiciones'>
                  <a>Exposiciones</a>
                </Link>
              </li>
              <li>
                <Link href='/rsc'>
                  <a>RSC</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={contact}>
          <p>876 28 08 06</p>
          <p>info@estudiomov.es</p>
          <div className={socialMedia}>
            <div className={facebookWrapper}>
              <Link href='/'>
                <a>{facebookSVG(white)}</a>
              </Link>
            </div>
            <div className={instaWrapper}>
              <Link href='/'>
                <a>{instaSVG(white)}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={links}></div> */}
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
