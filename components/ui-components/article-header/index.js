import { ImageWrapper } from '../image-wrapper'
import { mainWrapper } from './articleHeader.module.css'

export const ArticleHeader = ({ blok }) => {
  const { image, title, leadText } = blok
  const [src] = image
  console.log('ARTICLE HEADER:', image)
  return (
    <div className={mainWrapper}>
      <h1>{title}</h1>
      <h2>{leadText}</h2>
      <ImageWrapper blok={src} blur />
    </div>
  )
}
