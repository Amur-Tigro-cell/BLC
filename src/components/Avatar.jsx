const getInitials = (name = '') => {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join('')
}

export default function Avatar({ name, image }) {
  const initials = getInitials(name)
  const avatarStyle = image
    ? { background: 'none', backgroundImage: `url(${image})` }
    : undefined

  return (
    <div
      className="avatar"
      data-initials={!image ? initials : undefined}
      style={avatarStyle}
      aria-hidden={image ? undefined : true}
    >
      {image && (
        <img src={image} alt={name} loading="lazy" decoding="async" style={{ display: 'none' }} />
      )}
    </div>
  )
}
