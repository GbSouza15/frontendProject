import url from "@/app/configUrl/urlConfig"

export default async function Page({ params }) {

    const responseProduct = await fetch(`${url}/product/${params.id}`)
    const productSelect = await responseProduct.json()
    
    const responseUserInfo = await fetch(`${url}/user/${productSelect.authorId}`)
    const userInfo = await responseUserInfo.json()

    return (

        <section>
            <div className="flex justify-center gap-[10rem] items-center bg-black text-white pt-[5rem] pb-[5rem]">
                <img className="w-[30rem] h-[20rem]" src={`${url}/files/${productSelect.img.split('/')[1]}`} alt={productSelect.name} />

                <div className="infos flex flex-col gap-[3rem]">
                    <div className="info-product">
                        <p className="font-bold text-[1.5rem]">Informações</p>
                        <p>{productSelect.name}</p>
                        <p>PREÇO: {parseFloat(productSelect.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    </div>

                    <div className="info-owner">
                        <p className="font-bold text-[1.5rem]">Informações do vendedor</p>
                        <p>NOME: {userInfo.name}</p>
                        <p>CONTATO: {userInfo.phone}</p>
                    </div>
                </div>
            </div>

            <div className="description ml-[5rem] mr-[5rem] mt-[5rem] mb-[15rem]">
                <p className="font-bold text-[1.5rem]">DESCRIÇÃO</p>
                <p className="mt-[1rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            
        </section>
    )
}