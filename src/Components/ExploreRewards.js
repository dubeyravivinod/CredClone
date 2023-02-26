import './styles.css'
import Chair from  '../Images/chair.png'

const ExploreRewards = () => {
    return (
        <div className="ExploreDiv">
            <div className='Explore'>
                <h1>
                    feel special more often.
                </h1>
                <p className='ex'>
                    exclusive rewards for paying your bills
                </p>
                <p className='summary'>
                    everytime you pay your credit card bills on CRED coins. You can use these to win exclusive rewards or get special access to curated products and experiences. On CRED, good badgets good.
                </p>
                <button className='Download'>Explore rewards</button>
            </div>
            <img src={Chair} alt="explore rewards" />
        </div>
    );
}


export default ExploreRewards;