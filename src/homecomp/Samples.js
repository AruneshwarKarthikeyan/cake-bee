
import Card from 'react-bootstrap/Card';

import snowball from '../cakes/snowball_cake.jpg';
import redvelvet from '../cakes/red-velvet.webp';
import blackcurrent from '../cakes/blackcurrent_cake.jpg';
import { Link } from 'react-router-dom';



function Samples(){
    return(
        <div className="row m-4 d-flex justify-content-center">
          <div className="d-flex gap-4 justify-content-center  flex-wrap">
          <Card style={{ width: '18rem' }}>
      <img src = {snowball} alt="snowball_cake" />
      <Card.Body>
        <Card.Title>Snowball Cake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <img src = {redvelvet} alt="redvelvet_cake" />
      <Card.Body>
        <Card.Title>Redvelvet Cake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <img src = {blackcurrent} alt="blackcurrent_cake" />
      <Card.Body>
        <Card.Title>Blackcurrent Cake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <Link className=' text-danger text-center m-4 fs-5' to='/Shop'>choose your's</Link>
        </div>
    )
}

export default Samples;