import React from "react";
import Benifits from "./benifits.jsx";
import Homenav from "./home-nav.jsx"
import Technologies from "./technologies.jsx"
import Footer from "../footer.jsx"

function Home(){
    return <div>
        <Homenav />
        <Benifits />
        <Technologies />
        <Footer />
    </div>
}
export default Home;