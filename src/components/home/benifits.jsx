import Benifit from "./benifit.jsx";
import Subheading from "../subheading.jsx"

function Benifits(){
    return <div id="feature-section">
    <Subheading name="Features" />
      <div className="row benifits">
        <Benifit icon="fa-rocket" title="Fast Website" />
        <Benifit icon="fa-cogs" title="Responsive Design" />
        <Benifit icon="fa-inr" title="Affordable Rate" />
      </div>
    </div>
}

export default Benifits;