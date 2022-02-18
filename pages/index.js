import Head from 'next/head'
import Image from 'next/image'
import { getCacheVersion, getStoryblokData } from '../utils/storyblok'
import styles from '../styles/Home.module.css'

export default function Home({ storyblokData }) {
  console.log('STORY BLOK DATA:', storyblokData)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await getCacheVersion()

  console.log('CONNECTED:', response)

  const storyblokData = await getStoryblokData('cdn/stories/home', {
    cv: response.data.space.version,
    version: 'draft',
  })

  return {
    props: { storyblokData },
  }
}
