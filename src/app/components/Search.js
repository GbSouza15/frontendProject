export default function Search() {
    return (
        <div className="text-center mt-[3.5rem]">
            <p className="font-bold text-[1.2rem]">What would you like to find?</p>
            <form className="flex items-center justify-center gap-[1.2rem] mt-[1.4rem]">
                <input type="text" className="border-2 border-[#E57F1A] rounded-[.5rem] w-[25rem] px-[1rem]"></input>
                <button className="bg-[#E57F1A] py-[.2rem] px-[.5rem] rounded-[.5rem]">SEARCH</button>
            </form>
        </div>
    )
}