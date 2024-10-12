import { IoSearchCircle } from 'react-icons/io5';
import { TbWorldBolt } from 'react-icons/tb';
import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Navbar1 = () => {
    return (
        <div className='  md:px-54 lg:px-72  bg-white flex lg:justify-between justify-around items-center'>
            <div className='navbar w-auto pt-5 '>
                <div className=''>
                    <a className='btn btn-ghost text-xl'>DV Electronics</a>
                </div>
                {/* search box */ }
                <div className=' hidden lg:flex '>
                    <input
                        type='text'
                        placeholder='Search for products'
                        className='py-2 px-3  rounded-full  lg:w-[700px] bg-white border'
                    />
                    <i className='relative -ml-12 text-5xl text-themeColor hover:text-blue-500 cursor-pointer'>
                        <IoSearchCircle />
                    </i>
                </div>
            </div>
            {/* Contact section  */ }
            <div className='w-auto  flex flex-row md:flex lg:gap-4 md:gap-2'>
                <div className='flex gap-3 items-center text-xs md:text-neutral'>
                    <div className='w-3 md:w-4 h-4 lg:w-6 lg:h-5'>
                        {/* icon */ }
                        <svg
                            id='Layer_1'
                            data-name='Layer 1'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 122.88 84.04'>
                            <title>call-message</title>
                            <path d='M34.11,3h83a5.8,5.8,0,0,1,5.79,5.79V70.27a5.76,5.76,0,0,1-1,3.25,2.32,2.32,0,0,1-.55.82,2.2,2.2,0,0,1-.54.38,5.78,5.78,0,0,1-3.7,1.35H68a15.44,15.44,0,0,0,.42-4.45h47.22L84.8,39.23,74.62,47.91h0a2.22,2.22,0,0,1-2.84,0L61.1,39.23h0l-9.69,9.71A12.4,12.4,0,0,0,47,47.07L57.64,36.41,37.91,20.32a14,14,0,0,0-.68-3.42l-.79-3.49L73.15,43.34,115.26,7.46H35.11L34.11,3ZM17.46,31a61.46,61.46,0,0,0,4.73,14.91A51.89,51.89,0,0,0,32.61,60.48a1.47,1.47,0,0,0,1.17.45,5.31,5.31,0,0,0,2-.67,17.91,17.91,0,0,0,2.1-1.36c3.14-2.18,7-4.89,10.29-1.85.08.07.12.14.2.2L58.84,68.78a1.13,1.13,0,0,1,.1.13,6.09,6.09,0,0,1,.79,5.77,14.31,14.31,0,0,1-3.94,5.76,13.76,13.76,0,0,1-7.94,3.46,29.8,29.8,0,0,1-8.28-.4,27.16,27.16,0,0,1-11.31-4.73,54.16,54.16,0,0,1-9.86-9.43l-.24-.29c-1.52-1.8-3.16-3.73-4.69-5.88A78.72,78.72,0,0,1,1,34.34C-.72,25.59-.37,16.85,3.33,9.62c2-4,5.06-7.2,9-8.69,3.44-1.32,7.51-1.34,12.13.63a1.67,1.67,0,0,1,1,1.24l3.73,16.58a4.57,4.57,0,0,1-.82,4.88,9.43,9.43,0,0,1-4.29,2.5c-.56.24-1.21.45-1.9.67-2.27.74-4.86,1.61-4.73,3.65v0Zm70.72,5.33,30.26,31.73V10.58L88.18,36.36Z' />
                        </svg>
                    </div>
                    {/* number */ }
                    <div className='font-semibold '>
                        <h4 className=''>24/7 Support</h4>
                        <h4>+880 1707592670</h4>
                    </div>
                </div>
                <div className='  gap-3 items-center hidden md:flex' >
                    <i className=' md:text-xl lg:text-3xl '>
                        <TbWorldBolt />{ ' ' }
                    </i>
                    <div className='font-semibold'>
                        <h4>All Over BD</h4>
                        <h4 className='text-xs font-normal'>Delivery Available</h4>
                    </div>

                </div>
            </div>

            {/* social media */ }
            <div className='flex gap-2 md:hidden'>
                <a href=""><i className='text-green-600'><FaWhatsapp /></i></a>
                <a href=""><i className='text-blue-600'><FaFacebook /></i></a>
                <a href=""><i className='text-red-600'><FaYoutube /></i></a>
            </div>
        </div>
    );
};

export default Navbar1;
