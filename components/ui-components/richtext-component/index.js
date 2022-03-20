import { renderRichtext } from '../../../utils/storyblok'

export const RichTextComponent = ({ blok }) => {
  const { text } = blok
  const HTML = renderRichtext(text)
  return <div dangerouslySetInnerHTML={HTML} />
}
