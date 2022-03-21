import Head from 'next/head'
import { getCacheVersion, getStoryblokData } from '../../utils/storyblok'
import { DynamicComponent } from '../../components/dynamic-component'

export default function Actividades({ storyblokData }) {
  console.log('DATA:', storyblokData)
  const pageContent = storyblokData.data.story.content.body.map((blok) => (
    <DynamicComponent key={blok._uid} blok={blok} />
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

export const getStaticPaths = async () => {
  const response = await getCacheVersion()
  const storyblokData = await getStoryblokData('cdn/links/', {
    starts_with: 'actividades/',
    cv: response.data.space.version,
    version: 'draft',
  })

  const articlePaths = Object.values(storyblokData.data.links).map(
    (article) => article.slug
  )

  let paths = []
  articlePaths.forEach((article) => {
    article.split('/').filter((element) => {
      if (element !== '' && element !== 'actividades') {
        const a = { params: { article: element } }
        paths.push(a)
      }
    })
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const response = await getCacheVersion()
  const { article } = context?.params

  const storyblokData = await getStoryblokData(
    `cdn/stories/actividades/${article}`,
    {
      cv: response.data.space.version,
      version: 'draft',
    }
  )

  return {
    props: { storyblokData },
  }
}
