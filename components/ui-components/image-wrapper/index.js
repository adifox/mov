import Image from 'next/image'

export const ImageWrapper = ({ blok }) => {
  const {
    src: { filename, alt },
  } = blok

  return <Image src={filename} alt={alt} width={1024} height={768} />
}
