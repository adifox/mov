import Image from 'next/image'

// Styles
import styles from './simpleSection.module.css'
// Components
import { Button } from '../button'
import { footerSVG } from '../svg'

const {
  simpleSectionWrapper,
  imageWrapper,
  simpleSectionTitleWrapper,
  ctaButtonWrapper,
  white,
  customShapeDividerTop,
  customShapeDividerBottom,
} = styles

export const SimpleSection = ({ blok, expo }) => {
  const { image, title, subtitle, cta, imagePosition } = blok
  const [position] = imagePosition ? imagePosition : [null]

  const ctaButton = cta.map((element) => (
    <Button key={element._uid} title={element.buttonText} />
  ))

  const content =
    position && position === 'left' ? (
      <div className={simpleSectionWrapper}>
        <div className={customShapeDividerTop}>{footerSVG(white)}</div>
        <div className={imageWrapper}>
          <Image
            src={image.filename}
            alt={image.alt}
            width={720}
            height={640}
          />
        </div>
        <div className={simpleSectionTitleWrapper}>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <div className={ctaButtonWrapper}>{ctaButton}</div>
        </div>
        {!expo && (
          <div className={customShapeDividerBottom}>{footerSVG(white)}</div>
        )}
      </div>
    ) : (
      <div className={simpleSectionWrapper}>
        <div className={customShapeDividerTop}>{footerSVG(white)}</div>
        <div className={simpleSectionTitleWrapper}>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <div className={ctaButtonWrapper}>{ctaButton}</div>
        </div>
        <div className={imageWrapper}>
          <Image
            src={image.filename}
            alt={image.alt}
            width={720}
            height={640}
          />
        </div>
        {!expo && (
          <div className={customShapeDividerBottom}>{footerSVG(white)}</div>
        )}
      </div>
    )

  return content
}
