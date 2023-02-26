import "./styles.css";
import four from '../Images/four.png'

const Options4 = () => {
    return (
        <div className="OptionDiv">
            <div className="OptDiv">
                <h1 className="OptH1">
                    More cash in your pockets.
                </h1>
                <p className="OptP" >
                    switch to CRED RentPay and start paying rent with your credit card, this way you get up to 45 days of credit free peroid, more rewards points and a happy landlord.
                </p>
            </div>
            <div className="Imge">
                <img src={four} alt="four" />
            </div>
        </div>
    );
}

export default Options4;