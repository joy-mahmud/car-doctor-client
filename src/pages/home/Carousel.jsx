import banner1 from '../../../public/assets/images/banner/1.jpg'
import banner2 from '../../../public/assets/images/banner/2.jpg'
import banner3 from '../../../public/assets/images/banner/3.jpg'
import banner4 from '../../../public/assets/images/banner/4.jpg'


const Carousel = () => {
    const bannerImages = [banner1, banner2, banner3, banner4]
    return (
        <div className="carousel w-full ">
            {
                bannerImages.map((item, idx) => <div key={idx} id={`slide${idx}`} className="carousel-item relative w-full">
                    <img src={item} className="h-[600px] w-full rounded-lg" />
                    <div className="absolute flex flex-col justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] left-0 top-0 rounded-lg h-[600px] w-full">
                        <div className=' pl-12 w-1/2 space-y-5'>
                            <h2 className='text-white text-6xl font-bold'>
                                Affordable Price For Car Servicing
                            </h2>
                            <p className='text-white'>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div className=''>
                                <button className=" mr-5 btn btn-outline text-[#FFFF] hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]">Discover more</button>
                                <button className="btn btn-outline text-white hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]">Latest project</button>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-end gap-5 transform  left-5 right-5 bottom-10 ">
                        <a href={idx == 0 ? `#slide${3}` : `#slide${idx - 1}`} className="btn btn-circle bg-[#3E4B5E] hover:bg-[#FF3811] hover:border-[#FF3811] text-white">❮</a>
                        <a href={idx == 3 ? `#slide${0}` : `#slide${idx + 1}`} className="btn btn-circle bg-[#3E4B5E] hover:bg-[#FF3811] hover:border-[#FF3811] text-white">❯</a>
                    </div>
                    <div className=''>

                    </div>
                </div>)
            }
        </div>

        // <div className="carousel w-full ">
        // <div id="slide1" className="carousel-item relative w-full">
        //     <img src={banner1} className="h-[650px] w-full rounded-lg" />
        //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //         <a href="#slide4" className="btn btn-circle">❮</a>
        //         <a href="#slide2" className="btn btn-circle">❯</a>
        //     </div>
        // </div>
        //     <div id="slide2" className="carousel-item relative w-full">
        //         <img src={banner2} className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide1" className="btn btn-circle">❮</a>
        //             <a href="#slide3" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide3" className="carousel-item relative w-full">
        //         <img src={banner3} className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide2" className="btn btn-circle">❮</a>
        //             <a href="#slide4" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide4" className="carousel-item relative w-full">
        //         <img src={banner4} className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide3" className="btn btn-circle">❮</a>
        //             <a href="#slide1" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Carousel;