import { mainWrapper } from './leadtext.module.css'

export const LeadTextSection = ({ blok }) => {
  const { title, leadText } = blok
  return (
    <div className={mainWrapper}>
      <h1>{title}</h1>
      {leadText && <p>{leadText}</p>}
    </div>
  )
}
