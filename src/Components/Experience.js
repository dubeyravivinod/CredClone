import './styles.css';
import Sky from '../Images/sky.png';


const Experiences = () => {
    return (
        <div className="ExpDiv">
            <div className='Exp'>
                <h1>
                We take your money matters seriously.
                </h1>
                <p className='exP'>
                so that you don't have to.
                </p>
                <p className='summary1'>
                never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always.
                </p>
                <button className='Download'>Experiences the upgrade</button>
            </div>
            <div>
                <img className='images' src={Sky} alt="explore rewards" />
            </div>
        </div>
    
    );
}

export default Experiences;