export const SideBarText = ({ blok }) => {
  const { text, author } = blok

  return (
    <div>
      <p>{text}</p>
      <p>{author}</p>
    </div>
  )
}
