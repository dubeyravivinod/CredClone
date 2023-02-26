import './styles.css'
import Dog from "../Images/dog.png"

const Security = () => {
    return (
        <div className='secDiv' >
            <div className='sec'>
                <h1 className='secH1'>
                    security first. and second.
                </h1>
                <p className='ss'>what's your remains only you.</p>
                <p className='summary2'>
                    CRED ensure that all your personal data and transaction are encrypted, and secured so what's your remains only yours. There is no room for making mistakes because we didn't leave any.
                </p>

                <button className='Download'>Become a member</button>
            </div>
            <div>
                <img className='images' src={Dog} alt="security" />
            </div>
        </div>
    );
}

export default Security;