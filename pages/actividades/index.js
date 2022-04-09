import Head from 'next/head'
import { getStoryblokData } from '../../utils/storyblok'
import { DynamicComponent } from '../../components/dynamic-component'

export default function Actividades({ storyblokData, articleList }) {
  // console.log('DATA:', storyblokData)
  console.log('Article List:', articleList)
  const pageContent = storyblokData.data.story.content.body.map((blok) => (
    <DynamicComponent key={blok._uid} blok={blok} articleList={articleList} />
  ))
  return (
    <>
      <Head>
        <meta name='description' content='Guías de reciclaje Estudio Mov' />
      </Head>
      {pageContent}
    </>
  )
}

export const getStaticProps = async () => {
  const storyblokData = await getStoryblokData('actividades')
  const [articleCluster] = storyblokData.data.story.content.body.filter(
    (blok) => blok.component === 'articleCluster'
  )
  const { publishedArticles } = articleCluster

  let articleList = null
  if (publishedArticles.length !== 0) {
    articleList = await Promise.all([
      ...publishedArticles.map((id) => getSelectedArticle(id)),
    ])
  }

  return {
    props: { storyblokData, articleList },
    revalidate: 10,
  }
}

const getSelectedArticle = async (id) => {
  const response = await getStoryblokData(id, {
    find_by: 'uuid',
  })

  return response
}
