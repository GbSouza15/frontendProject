import Link from "next/link";
import url from "../configUrl/urlConfig";

export default async function RecentsProducts() {

    const response = await fetch(`${url}/product`, {
        next: {
            revalidate: 30
        }
    })
    const recentProducts = await response.json()

    console.log(recentProducts);

    return (
        <div className="mt-[4rem] mb-[4rem]">
            <p className="text-[1.5rem] font-bold text-center">Recent</p>
            <div className="productsRecents grid grid-cols-3 justify-items-center mt-[1rem]">
                    {recentProducts.map(product => (
                        <Link href={`/product/${product.id}`}>
                        <div key={product.id} className="bg-black w-[20rem] h-[18rem] mt-[1.5rem] rounded-[.2rem]">
                            <img className="w-[100%] h-[11rem] border-2 border-[#E57F1A] rounded-tl-[.2rem] rounded-th-[.2rem]" src={`${url}/files/${product.img.split('/')[1]}`} alt={product.name} />
                            <div className="mt-[2rem] text-white pl-[.5rem]">
                                <p>{product.name}</p>
                                <p>{parseFloat(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            </div>
                        </div>
                        </Link>
                    ))}
            </div>
        </div>
    )
}