import Image from 'next/image'

// Styles
import styles from './hero.module.css'
// Components
import { Button } from '../button'

const {
  heroWrapper,
  imageWrapper,
  heroTitleWrapper,
  boldTitle,
  designElement,
} = styles

export const HeroTeaser = ({ blok }) => {
  console.log('THE BLOK DATA:', blok)
  const { image, intro, title, subtitle, cta } = blok
  const ctaButton = cta.map((element) => (
    <Button key={element._uid} title={element.buttonText} />
  ))
  return (
    <div className={heroWrapper}>
      <div className={heroTitleWrapper}>
        {/* <h1>
          {intro}
          <span className={boldTitle}>{` ${title}`}</span>
        </h1> */}
        {/* <h2>{subtitle}</h2>
        {ctaButton}
        <div className={designElement}>
          <Image
            src={'/images/circulos-decorativos.png'}
            alt='circulo-decorativo'
            layout='fill'
            priority
          />
        </div> */}
      </div>
      {/* <div className={imageWrapper}>
        <Image src={image.filename} alt={image.alt} layout='fill' priority />
      </div> */}
    </div>
  )
}