export const LeadTextSection = ({ blok }) => {
  const { title, leadText } = blok
  return (
    <div>
      <h1>{title}</h1>
      {leadText && <p>{leadText}</p>}
    </div>
  )
}
