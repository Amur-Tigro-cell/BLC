const getInitials = (name = '') => {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join('')
}

export default function Avatar(props) {
  const { name, image } = props
  const initials = getInitials(name)

  if (image) {
    return (
      <div
        className="avatar"
        style={{ background: 'none', backgroundImage: `url(${image})` }}
      >
        <img src={image} alt={name} loading="lazy" decoding="async" style={{ display: 'none' }} />
      </div>
    )
  }

  return (
    <div className="avatar" data-initials={initials} />
  )
}
