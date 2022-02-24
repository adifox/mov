import Head from 'next/head'
import Image from 'next/image'
import { getCacheVersion, getStoryblokData } from '../utils/storyblok'
import styles from '../styles/Home.module.css'

export default function Home({ storyblokData }) {
  return (
    <>
      <Head>
        <meta name='description' content='Pagina de inicio de Estudio Mov' />
      </Head>

      <main>In main</main>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await getCacheVersion()

  const storyblokData = await getStoryblokData('cdn/stories/home', {
    cv: response.data.space.version,
    version: 'draft',
  })

  return {
    props: { storyblokData },
  }
}
