import { renderRichtext } from '../../../utils/storyblok'

export const RichTextComponent = ({ blok, short }) => {
  const { text } = blok

  if (short) {
    const [firstParagraph, secondParagraph] = text.content

    const reducedContent = {
      type: 'doc',
      content: [firstParagraph, secondParagraph],
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
