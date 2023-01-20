import { useParams } from 'react-router-dom'

function Member(props) {
  const { houseId, memberId } = useParams()
  const house = props.houses.find((house) => house.id === parseInt(houseId))
  const member = house.people.find((member) => member.id === parseInt(memberId))
  return (
    <div className="page">
      <div className="header">
        <h2>{member.name}</h2>
      </div>
      <div className="desc">
        {member.description}
        <br />
        <a href={`https://awoiaf.westeros.org/index.php/${member.wikiSuffix}`}>
          Wiki
        </a>
      </div>
    </div>
  )
}

export default Member
