import "./styles.css";
import one from '../Images/one.png'

const Options1 = () => {
    return (
        <div className="OptionDiv">
            <div className="OptDiv">
                <h1 className="OptH1">
                    We've got your back
                </h1>
                <p className="OptP" >
                    gain complete control over your credit card with CRED Protect. Receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.
                </p>
            </div>
            <div className="Imge">
                <img src={one} alt="one" />
            </div>
        </div>
    );
}

export default Options1;