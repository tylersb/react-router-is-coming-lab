import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function House(props) {
  const { id } = useParams()
  const house = props.houses.find((house) => house.id === parseInt(id))
  const members = house.people.map((m, i) => {
    return (
      <li key={`member${i}`}>
        <Link to={`/houses/${id}/members/${m.id}`}>{m.name}</Link>
      </li>
    )
  })

  return (
    <div className="page">
      <div className="header">
        <h2>Members of a GoT House</h2>
      </div>
      <h3>A list of Members:</h3>
      <ul className="list">{members}</ul>
    </div>
  )
}

export default House
