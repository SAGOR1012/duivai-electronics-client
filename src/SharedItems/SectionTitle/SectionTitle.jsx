const SectionTitle = ({ heading }) => {
  return (
    <div className='bg-themeColor w-full rounded-md mt-10 mb-3 flex justify-between items-center font-semibold text-2xl '>
      <h2 className=' text-white py-2  ml-2'>{heading}</h2>
      <button className='btn btn-sm mr-2 '>More Items > </button>
    </div>
  );
};

export default SectionTitle;
