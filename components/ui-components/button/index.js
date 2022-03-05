import style from './button.module.css'

const { buttonStyle } = style

export const Button = ({ title, link, onClick }) => {
  const element = (
    <button className={buttonStyle} onClick={onClick}>
      {title}
    </button>
  )
  if (link) {
    element = (
      <a className={buttonStyle} href={link}>
        {title}
      </a>
    )
  }
  return element
}
