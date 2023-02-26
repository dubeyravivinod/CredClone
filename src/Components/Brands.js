import './styles.css';
import brands from '../Images/brands.png'

const Brands = () => {
    return (
        <div className='BrandDiv'>
            <div className='brandMain'>
                <h1>rewards from brands you love</h1>
                <img src={brands} alt="brands" />
            </div>
        </div>
    );
}


export default Brands;