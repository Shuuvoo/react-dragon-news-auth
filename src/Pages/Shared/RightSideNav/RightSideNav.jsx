import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            {/* <h2 className="text-2xl">Right Side</h2> */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Log in With</h2>
                <button  className="btn btn-outline w-full">
                <FaGoogle></FaGoogle>
                   <span className='text-green-600'> Google</span>
                </button>
                <button  className="btn btn-outline w-full">
                <FaGithub></FaGithub>
                   <span className='text-green-600'> Github</span>
                </button>
            </div>
            <div className='p-4  mb-6'>
                <h2 className="text-3xl">Find us On</h2>
               <a className='p-4 flex text-lg items-center border rounded-t-lg' href="">
                <FaFacebook className='mr-3'></FaFacebook>
               <span> Facebook</span>
               </a>
               <a className='p-4 flex text-lg items-center border-x' href="">
                <FaInstagram className='mr-2'></FaInstagram>
               <span> Instagram</span>
               </a>
               <a className='p-4 flex text-lg items-center border rounded-t-lborder-x' href="">
                <FaTwitter className='mr-2'></FaTwitter>
               <span> Twitter</span>
               </a>
            </div>

            {/* Q zone */}
            <div>
            <div className='p-4 space-y-3 mb-6'>
                <h1 className='bg-pink-300 px-4 py-1 '>Q Zone</h1>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
            </div>
        </div>
    );
};

export default RightSideNav;