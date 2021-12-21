function Episode({ episode }) {
  return (
    <li className="episode-item" key={episode.id}>
      Name: {episode.name}
    </li>
  )
}

export default Episode
