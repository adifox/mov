import { ImageWrapper } from '../image-wrapper'
import { RichTextComponent } from '../richtext-component'
import { mainWrapper } from './previewComponent.module.css'

export const PreviewComponent = ({ data }) => {
  console.log('THE PREVIEW DATA:', data)

  const image = data.image ? (
    <ImageWrapper blok={data.image[0]} blur width={1024} height={640} />
  ) : null
  const title = data.title ? <h2>{data.title}</h2> : null
  const leadText = data.text ? <RichTextComponent blok={data} short /> : null

  return (
    <div className={mainWrapper}>
      {image}
      {title}
      {leadText}
    </div>
  )
}
