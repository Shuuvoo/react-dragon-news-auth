import moment from 'moment';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div className=''>
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;