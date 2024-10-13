
const Hero = () => {
    return (
        <div className=" mt-10">
            <div className="carousel w-full lg:h-[500px]  rounded-md ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/ZJBGjQ3/cover1.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                        <a href="#slide2" className="  font-bold text-[#fea116] lg:text-5xl ">❮</a>
                        <a href="#slide2" className="  font-bold text-[#fea116] lg:text-5xl">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img src="https://i.ibb.co/0Vp6Gsb/Brown-Elegant-Minimalist-Hotel-Promotion-Facebook-Post-2.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="font-bold text-[#fea116] lg:text-5xl">❮</a>
                        <a href="#slide1" className="font-bold text-[#fea116] lg:text-5xl">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;