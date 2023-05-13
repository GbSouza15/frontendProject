import Link from "next/link"

export default async function Dashboard() {
    return (
        <div className="flex flex-col items-center justify-center mb-[20rem]">
            <h1 className="mt-[5rem] font-bold text-[1.8rem]">DASHBOARD</h1>
            
            <section className="flex mt-[5rem] gap-[4rem]">
                <div className="flex flex-col items-center">
                    <Link href='/dashboard/addProduct'>
                        <button className="bg-[#E57F1A] p-[2rem] rounded-[.5rem]"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg></button>
                    </Link>
                    <p className="mt-[.5rem] font-bold text-[1.5rem]">Adicionar Produto</p>
                </div>

                <div className="flex flex-col items-center">
                    <button className="bg-[#E57F1A] p-[2rem] rounded-[.5rem]"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><line x1="5" x2="19" y1="12" y2="12"></line></svg></button>
                    <p className="mt-[.5rem] font-bold text-[1.5rem]">Remover Produto</p>
                </div>

                <div className="flex flex-col items-center">
                    <button className="bg-[#E57F1A] p-[2rem] rounded-[.5rem]"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg></button>
                    <p className="mt-[.5rem] font-bold text-[1.5rem]">Meus Produtos</p>
                </div>
            </section>
        </div>
    )
}