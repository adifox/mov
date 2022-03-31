import { getStoryblokData } from '../../../utils/storyblok'

export const ArticleCluster = ({ articleList }) => {
  console.log('ARTICLE CLUSTER DATA:', articleList)

  const content = articleList.map((article) => {
    return <li key={article.data.story.uuid}>{article.data.story.name}</li>
  })

  return (
    <div>
      <h2>Article Cluster</h2>
      <h3>Available Articles:</h3>
      <ul>{content}</ul>
    </div>
  )
}
