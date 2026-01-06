const getInitials = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join('')

const Avatar = ({ name, image }) => (
  <div
    className="avatar"
    data-initials={!image ? getInitials(name) : undefined}
    style={image ? { backgroundImage: `url(${image})` } : undefined}
    aria-hidden={image ? undefined : true}
  >
    {image && <img src={image} alt={name} loading="lazy" style={{ display: 'none' }} />}
  </div>
)

export default Avatar
