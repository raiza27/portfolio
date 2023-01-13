import { Col } from "react-bootstrap";

export const ProjectVideoCard = ({ title, description,subject, videoUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-videobx">
        <video id="datavideo" controls>
        <source src={videoUrl} type="video/mp4"></source>
        </video>
        <div className="projv-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>{subject}</p>
          <div className="insight">
            <ul>
                <li>There is a 28.66% increase in the website traffic from October to November and is expected to have the trend in the following months. During winters, users check out the weather more often than in summer for anticipated rainfall/snow/storm/wind. This trend is an indication to attract winter apparel/food/accessories/games advertisements to the website.</li>
                <li>Summer is the time when most Canadian go out and it will be good time for summer apparel/outdoor plants and some cool sunglasses ads!</li>
                <li>One-quarter of website traffic is from the age population of 25-34 thus creating a chance for youth-oriented products.</li>
                <li>Geographic location data indicates that the major traffic is from Canada followed by USA, UK, India, and Australia:Not in order. More research is needed for this data, based on which location-specific advertisements to be invited to improve the Click-through-rate :if not already in place.</li>
            </ul>
            <img src="https://images.pexels.com/photos/2624077/pexels-photo-2624077.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
          </div>
        </div>
      </div>
    </Col>
  )
}