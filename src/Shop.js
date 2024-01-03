import Header from "./homecomp/Header";
import Footer from "./homecomp/Footer";


import Cakes from "./shopcomp/Cakes.js";

function Shop(){
    return(
        <div >
            <Header />
            <Cakes />
            <Footer />

        </div>
    );
}


export default Shop;