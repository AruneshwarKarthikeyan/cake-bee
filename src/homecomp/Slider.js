import Carousel from 'react-bootstrap/Carousel';

import img1 from '../slides/slide-1.jpg';
import img2 from '../slides/slide-2.jpg';
import img3 from '../slides/slide-3.jpg';

function Slider(){
    return(
        <div className='my-4 container'>
               <Carousel>
      <Carousel.Item>
        <img src={img1} alt="img1" style={{height:"700px", width:"100%"}} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="img2" style={{height:"700px", width:"100%"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt="img3" style={{height:"700px", width:"100%"}} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <p className='fs-2 text-center my-4 text-danger'>Explore your best desire's</p>
        </div>
    )
}

export default Slider;