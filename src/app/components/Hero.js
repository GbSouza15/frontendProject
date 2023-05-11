export default function Hero() {
    return (
        <section className="hero bg-black h-[25rem] text-center flex flex-col justify-center items-center">
            <div>
                <h1 className="text-white text-[3.5rem] font-bold">SSQ</h1>   
                <div className="bar h-[1.5rem] w-[9rem] bg-white"></div>
            </div>
            <p className="text-white mt-[2rem]">where <span className="text-[#E57F1A] font-bold">S</span>ustainability, <span className="text-[#E57F1A] font-bold">S</span>avings, and <span className="text-[#E57F1A] font-bold">Q</span>uality meet.</p>
        </section>
    )
}