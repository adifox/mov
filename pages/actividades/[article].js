import Head from 'next/head'
import { getStoryblokLinks, getStoryblokData } from '../../utils/storyblok'
import { DynamicComponent } from '../../components/dynamic-component'

const PAGE_PATH = 'actividades'

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

export const getStaticPaths = async () => await getStoryblokLinks()
export const getStaticProps = async (context) => {
  const { article } = context?.params
  const path = [PAGE_PATH, article].join('/')
  const storyblokData = await getStoryblokData(path)

  return {
    props: { storyblokData },
  }
}
