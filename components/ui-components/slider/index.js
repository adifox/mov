export const Slider = ({ blok }) => {
  const { title, elements } = blok
  return (
    <div>
      <h3>{title}</h3>
      {elements.map(({ alt, id }) => (
        <p key={id}>{alt}</p>
      ))}
    </div>
  )
}
