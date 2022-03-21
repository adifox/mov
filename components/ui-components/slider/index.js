import Slider from 'react-slick'

export const SliderWrapper = ({ blok }) => {
  const { title, elements } = blok

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  }

  return (
    <div>
      <h3>{title}</h3>
      <Slider {...settings}>
        {elements.map(({ alt, id }) => (
          <p key={id}>{alt}</p>
        ))}
      </Slider>
    </div>
  )
}
