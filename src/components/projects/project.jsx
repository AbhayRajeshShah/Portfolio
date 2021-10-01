import Nav from "../nav.jsx"
import AllProj from "./allprojects"
import Footer from "../footer.jsx"

function Project(){
    return <div>
        <Nav />            
        <AllProj />
        <Footer className="project-contact"/>
    </div>
}

export default Project;