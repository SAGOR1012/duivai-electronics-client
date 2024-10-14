import { IoCheckmarkSharp } from 'react-icons/io5';
import { TbCurrencyTaka } from 'react-icons/tb';

const LimitedOffer = () => {
  return (
    <div className='mt-10 border-t border-black py-10 grid grid-cols-2 md:grid-cols-6 gap-4'>
      <div className='max-w-72 h-[410px] p-3 rounded-xl shadow-md bg-white border  '>
        <img
          src='https://ipsbazarbd.com/wp-content/uploads/2023/08/Black-Friday-Social-Media-Banner-05.png'
          alt=''
          className='object-cover object-center w-full rounded-md h-48 dark:bg-gray-500'
        />
        <div className='mt-6 mb-2 space-y-2'>
          <h2 className='text-sm text-orange-500 font-semibold tracking-wide'>
            Mono Solar Panel 150w 12v
          </h2>
          <h2 className='text-sm font-semibold tracking-wide text-gray-500'>
            IPS Battery{' '}
          </h2>
          <span className='flex gap-1 items-center text-sm font-semibold tracking-wide '>
            <i className=' text-green-500'>
              <IoCheckmarkSharp />
            </i>{' '}
            <span>Stock In</span>
          </span>
        </div>
        <div className='font-semibold text-themeColor flex justify-start md:justify-end gap-2'>
          <span>Price </span>
          <span className='flex items-center'>
            1200 <TbCurrencyTaka />
          </span>
        </div>
        <div>
          <button className='btn btn-sm  w-full text-white bg-themeColor mt-2'>
            Buy Now
          </button>
        </div>
      </div>
      <div className='max-w-72 h-[410px] p-3 rounded-xl shadow-md bg-white border  '>
        <img
          src='https://ipsbazarbd.com/wp-content/uploads/2023/08/Black-Friday-Social-Media-Banner-05.png'
          alt=''
          className='object-cover object-center w-full rounded-md h-48 dark:bg-gray-500'
        />
        <div className='mt-6 mb-2 space-y-2'>
          <h2 className='text-sm text-orange-500 font-semibold tracking-wide'>
            Mono Solar Panel 150w 12v
          </h2>
          <h2 className='text-sm font-semibold tracking-wide text-gray-500'>
            IPS Battery{' '}
          </h2>
          <span className='flex gap-1 items-center text-sm font-semibold tracking-wide '>
            <i className=' text-green-500'>
              <IoCheckmarkSharp />
            </i>{' '}
            <span>Stock In</span>
          </span>
        </div>
        <div className='font-semibold text-themeColor flex justify-start md:justify-end gap-2'>
          <span>Price </span>
          <span className='flex items-center'>
            1200 <TbCurrencyTaka />
          </span>
        </div>
        <div>
          <button className='btn btn-sm  w-full text-white bg-themeColor mt-2'>
            Buy Now
          </button>
        </div>
      </div>
      <div className='max-w-72 h-[410px] p-3 rounded-xl shadow-md bg-white border  '>
        <img
          src='https://ipsbazarbd.com/wp-content/uploads/2023/08/Black-Friday-Social-Media-Banner-05.png'
          alt=''
          className='object-cover object-center w-full rounded-md h-48 dark:bg-gray-500'
        />
        <div className='mt-6 mb-2 space-y-2'>
          <h2 className='text-sm text-orange-500 font-semibold tracking-wide'>
            Mono Solar Panel 150w 12v
          </h2>
          <h2 className='text-sm font-semibold tracking-wide text-gray-500'>
            IPS Battery{' '}
          </h2>
          <span className='flex gap-1 items-center text-sm font-semibold tracking-wide '>
            <i className=' text-green-500'>
              <IoCheckmarkSharp />
            </i>{' '}
            <span>Stock In</span>
          </span>
        </div>
        <div className='font-semibold text-themeColor flex justify-start md:justify-end gap-2'>
          <span>Price </span>
          <span className='flex items-center'>
            1200 <TbCurrencyTaka />
          </span>
        </div>
        <div>
          <button className='btn btn-sm  w-full text-white bg-themeColor mt-2'>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LimitedOffer;
