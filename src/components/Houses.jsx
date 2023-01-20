import { Link } from 'react-router-dom'

function Houses(props) {
  const houses = props.houses.map((house, i) => {
    return (
      <li key={`house-${i}`}>
        <Link to={`/houses/${house.id}`}>{house.name}</Link>
      </li>
    )
  })
  return (
    <div>
      <div className="header">
        <h2>Game of Thrones Houses</h2>
      </div>
      <h3>A list of houses:</h3>
      <ul className="list">{houses}</ul>
    </div>
  )
}

export default Houses
