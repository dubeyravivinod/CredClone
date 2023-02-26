import "./styles.css";
import Rating from "../Images/rating.png";
import footer from "../Images/footer.png";


const AppStore = () => {
    return (
        <div className="AppStore">
            <div className="rating">
                <div className="appstore">
                    <img src={Rating} alt="rating" />
                    <img src={footer} alt="rating" />
                </div>
            </div>
        </div>
    );
}

export default AppStore;