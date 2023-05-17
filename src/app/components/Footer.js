import Image from "next/image"
import logo from '../components/img/logo.svg'

export default function Footer() {
    return (
        <footer className="bg-[#E57F1A] p-[4rem] text-white">
            <div className="flex items-center justify-center gap-[4rem]">
                <div className="logo">
                    <Image src={logo} className="w-[3rem] h-[3rem] bg-white"/>
                </div>

                <p className="text-[.8rem]">Copyright © 2023 SSQ. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}