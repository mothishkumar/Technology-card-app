// Write your code here.
import './index.css'

const Techcards = props => {
  const {Techcard} = props
  const {title, description, imgUrl, className} = Techcard
  return (
    <div className="card">
      <li className={className}>
        <h1 className="heading">{title}</h1>
        <p className="para">{description}</p>
        <div className="imgcard">
          <img src={imgUrl} className="image" alt={title} />
        </div>
      </li>
    </div>
  )
}

export default Techcards
