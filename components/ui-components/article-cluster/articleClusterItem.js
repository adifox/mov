import Link from 'next/link'
import { PreviewComponent } from '../preview-component'

export const ArticleClusterItem = ({ story }) => {
  const {
    content: { body },
    full_slug,
  } = story

  const clusterContent = body.map((element) => (
    <PreviewComponent key={element._uid} data={element} />
  ))

  return (
    <Link href={full_slug}>
      <a>{clusterContent}</a>
    </Link>
  )
}
