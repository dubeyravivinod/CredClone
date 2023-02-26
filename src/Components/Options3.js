import "./styles.css";
import three from '../Images/three.png'

const Options3 = () => {
    return (
        <div className="OptionDiv">
            <div className="OptDiv">
                <h1 className="OptH1">
                    For your electronic taste.
                </h1>
                <p className="OptP" >
                    get access to the CRED store, a member-exclusive selection of products and experiences at special prices that complement your taste. This is the good life they spoke of.
                </p>
            </div>
            <div className="Imge">
                <img src={three} alt="three" />
            </div>
        </div>
    );
}

export default Options3;