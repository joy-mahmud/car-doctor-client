import person from '../../../public/assets/images/about_us/person.jpg'
import parts from '../../../public/assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className='flex items-center mb-[150px]'>
            <div className='relative w-1/2 mt-10'>
                <img src={person} alt="" className='h-[473px] w-[460px] rounded-lg' />
                <img src={parts} alt="" className='h-[324px] rounded-lg right-[100px] -bottom-[84px] w-[320px] absolute border-8 border-white' />
            </div>
            <div className='w-1/2 space-y-5'>
                <p className='text-xl font-bold text-[#FF3811]'>About us</p>
                <h2 className='text-5xl font-bold'>We are qualified & of experience in this field</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, <br /> by injected humour, or randomised words which dont look even slightly believable. the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                <button className="btn text-white border-[#FF3811] bg-[#FF3811] hover:bg-[#c04d36]">Secondary</button>
            </div>
        </div>
    );
};

export default AboutUs;