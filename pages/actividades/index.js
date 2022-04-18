import Head from 'next/head'
import { getStoryblokData } from '../../utils/storyblok'
import { DynamicComponent } from '../../components/dynamic-component'
import { LeadTextSection } from '../../components/ui-components/leadtext-section'
import styles from '../../styles/actividades.module.css'

console.log('STYLES:', styles)

const { mainWrapper } = styles

const COMPONENTS = {
  leadTextSection: LeadTextSection,
}

export default function Actividades({ storyblokData, articleList }) {
  console.log('DATA:', storyblokData)
  console.log('Article List:', articleList)
  let headerContent = null
  const pageContent = storyblokData.data.story.content.body.map((blok) => {
    if (blok.component && COMPONENTS[blok.component]) {
      const Component = COMPONENTS[blok.component]
      headerContent = <Component key={blok._uid} blok={blok} />
    } else {
      return (
        <DynamicComponent
          key={blok._uid}
          blok={blok}
          articleList={articleList}
        />
      )
    }
  })
  return (
    <>
      <Head>
        <meta name='description' content='Guías de reciclaje Estudio Mov' />
      </Head>
      <div className={mainWrapper}>
        {headerContent}
        {pageContent}
      </div>
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
