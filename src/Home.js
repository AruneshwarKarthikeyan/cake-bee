import Header from './homecomp/Header.js';
import Slider from './homecomp/Slider.js';
import Samples from './homecomp/Samples.js';
import Footer from './homecomp/Footer.js';

function Home(){
    return(
        <div>
            <Header />
            <Slider />
            <Samples />
            <Footer />            
        </div>
    )

}

export default Home;