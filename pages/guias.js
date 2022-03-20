import Head from 'next/head'
import Image from 'next/image'
import { getCacheVersion, getStoryblokData } from '../utils/storyblok'
import styles from '../styles/Home.module.css'

// Components
import { LeadTextSection } from '../components/ui-components/leadtext-section'
import { ImageWrapper } from '../components/ui-components/image-wrapper'
import { RichTextComponent } from '../components/ui-components/richtext-component'
import { SideBarText } from '../components/ui-components/sidebar-text'
import { Slider } from '../components/ui-components/slider'

const COMPONENTS = {
  leadTextSection: LeadTextSection,
  image: ImageWrapper,
  richTextComponent: RichTextComponent,
  sideBarText: SideBarText,
  slider: Slider,
}

export default function Guias({ storyblokData }) {
  console.log('DATA:', storyblokData)
  let pageContent = storyblokData.data.story.content.body.map((blok) => {
    console.log('THE BLOK:', blok)
    const Component = COMPONENTS[blok.component]
    if (Component) {
      return <Component key={blok._uid} blok={blok} />
    }
  })
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
  const response = await getCacheVersion()

  const storyblokData = await getStoryblokData('cdn/stories/guias', {
    cv: response.data.space.version,
    version: 'draft',
  })

  return {
    props: { storyblokData },
  }
}
