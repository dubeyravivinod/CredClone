import "./styles.css";
import two from '../Images/two.png'

const Options2 = () => {
    return (
        <div className="OptionDiv">
            <div className="OptDiv">
                <h1 className="OptH1">
                    Begin your winning streak.
                </h1>
                <p className="OptP" >
                    Use your cred coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. Good Luck!.
                </p>
            </div>
            <div className="Imge">
                <img src={two} alt="two" />
            </div>
        </div>
    );
}

export default Options2;