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

export const getStaticProps = async () => {
  const storyblokData = await getStoryblokData('actividades')

  return {
    props: { storyblokData },
  }
}
