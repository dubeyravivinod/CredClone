import logo from '../Images/logo.png'
import poster from '../Images/poster.png'
import './styles.css'


const Header = () => {
    return (
        <div className='headerMainDiv'>
            <div className='headerDiv'>
                <img className='logo' src={logo} alt="Cred Logo" />
                <div className='menus'>
                    <h1>credit score check</h1>
                    <h1>CRED pay</h1>
                </div>
            </div>
            <div className='mainHeading'>
                <h1>rewards for paying credit card bills.</h1>
                <h4>join 9M+ members who win rewards and cashbacks everyday</h4>
                <button className='Download'>Download CRED</button>
                <img src={poster} alt="Poster" />
            </div>
        </div>
    )
}

export default Header;