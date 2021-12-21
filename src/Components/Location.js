function Location({ location }) {
  return (
    <li className="location-item" key={location.id}>
      Name: {location.name}
    </li>
  )
}

export default Location;