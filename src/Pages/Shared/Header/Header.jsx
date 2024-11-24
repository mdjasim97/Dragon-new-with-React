
import logo from '../../../assets/images/logo/logo.png'
import moment from 'moment/moment';

const Header = () => {
    return (
        <div>
            <div className='text-center space-y-2 md:space-y-4 md:mt-10'>
                <img className='mx-auto' src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
        </div>
    );
};

export default Header;