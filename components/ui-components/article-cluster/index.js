import { ArticleClusterItem } from './articleClusterItem'
import { mainWrapper } from './articleCluster.module.css'

export const ArticleCluster = ({ articleList }) => {
  console.log('ARTICLE CLUSTER DATA:', articleList)

  const content = articleList.map((article) => {
    const {
      data: { story },
    } = article
    return <ArticleClusterItem key={story.uuid} story={story} />
  })

  return <div className={mainWrapper}>{content}</div>
}
