import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import img1 from '../cakes/Black_Forest.webp';
import img2 from '../cakes/choclate_truffle.webp';
import img3 from '../cakes/pink_velvet.jpg';
import img4 from '../cakes/blackcurrent_cake.jpg';
import img5 from '../cakes/snowball_cake.jpg';
import img6 from '../cakes/Funfetti-Cake.jpg';
import img7 from '../cakes/dream_cake.jpg';
import img8 from '../cakes/red-velvet.webp';
import img9 from '../cakes/churro_cake.jpg';
import img10 from '../cakes/white_velvet.jpg';
import img11 from '../cakes/fruit_cake.jpg';
import img12 from '../cakes/choco_vanilla.jpg';
function Cakes(){
    return(
        <div className='row my-4'>

        <div className='d-flex gap-5 justify-content-center flex-wrap' style={{maxWidth:"70%", margin:"0 auto"}}>
        <Card style={{ width: '18rem' }}>
      <img src = {img1} alt="black_forest" />
      <Card.Body>
        <Card.Title>Blackforest Cake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order Now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <img src = {img2} alt="chocolate_truffle" />
      <Card.Body>
        <Card.Title>Chocoalte Truffle Cake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order Now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <img src = {img3} alt="pink_velvet" />
      <Card.Body>
        <Card.Title>Pink Velvet Cake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order Now</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <img src = {img4} alt="black_current" />
      <Card.Body>
        <Card.Title>Blackcurrent Cake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order Now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <img src = {img5} alt="snowball_cake" />
      <Card.Body>
        <Card.Title>Snowball Cake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order Now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <img src = {img6} alt="funfetti-cake" />
      <Card.Body>
        <Card.Title>Funfetti Cake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order Now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <img src = {img7} alt="dream_cake" />
      <Card.Body>
        <Card.Title>Dream Cake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order Now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <img src = {img8} alt="red_velvet" />
      <Card.Body>
        <Card.Title>Red Velvet Cake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order Now</Button>
      </Card.Body>
    </Card>

    
    <Card style={{ width: '18rem' }}>
      <img src = {img9} alt="churro_cake" />
      <Card.Body>
        <Card.Title>Churro Cake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order Now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <img src = {img10} alt="white_velvet" />
      <Card.Body>
        <Card.Title>White Velvet Cake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order Now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <img src = {img11} alt="fruit+cake" />
      <Card.Body>
        <Card.Title>Fruit Cake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order Now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <img src = {img12} alt="choco_vanilla" />
      <Card.Body>
        <Card.Title>Choco Vanilla Cake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order Now</Button>
      </Card.Body>
    </Card>
        </div>

           
        </div>
    );
}

export default Cakes;