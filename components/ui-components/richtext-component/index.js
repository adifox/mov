import { renderRichtext } from '../../../utils/storyblok'

export const RichTextComponent = ({ blok, short }) => {
  const { text } = blok
  console.log('THE HELL:', text)
  if (short) {
    const [firstParagraph] = text.content

    const reducedContent = {
      type: 'doc',
      content: [firstParagraph],
    }

    const HTML = renderRichtext(reducedContent)
    return (
      <>
        <div dangerouslySetInnerHTML={HTML} />
        <span>Más...</span>
      </>
    )
  } else {
    const HTML = renderRichtext(text)
    return <div dangerouslySetInnerHTML={HTML} />
  }
}
