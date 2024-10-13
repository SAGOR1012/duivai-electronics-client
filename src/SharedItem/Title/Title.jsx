
const Title = ({ heading }) => {
    return (
        <div className="bg-themeColor2 w-full">
            <h2 className="font-semibold text-2xl text-white">
                { heading }
            </h2>
        </div>
    );
};

export default Title;