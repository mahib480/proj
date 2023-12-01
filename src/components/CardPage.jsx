import Card from "./CardBox/Card";
const CardPage=()=>{
    return(
        <div className=" bg-gradient-to-r  from-[#FFA9A9] from-5% via-white via-40% to-[#FFD3D3] to-80% p-20 relative">
            <div className="flex flex-row ">
                <div className="w-1/2 mb-[-20px] ">
                    <h1 className="font-bold text-4xl max-w-[500px]">Lorem Ipsu</h1>
                    <h1 className="font-bold text-4xl max-w-[500px] bg-gradient-to-b from-black from-20% to-white to-80% inline-block text-transparent bg-clip-text absolute">Lorem Ipsu</h1>
                </div>
                <div className="w-1/2 justify-center items-center text-gray-500 mx-24">
                    <p>Figma ipsum component variant main layer. Main share bold vector clip shadow invite shadow editor.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div className="p-4 bg-white shadow-lg rounded-lg flex flex-row mt-2 gap-2">
                
                <div className="rounded-full bg-gradient-to-b from-red-500 from-80% to-white-20% max-w-[30px] px-6 py-2">
                    dc
                </div>
            <div className="flex flex-col">
            <h2 className="font-bold ">abhdjhfgf</h2>
            <p className="text-gray-500">Figma ipsum component variant main layer. Main share bold vector clip shadow invite</p>
            </div>
            </div>
                </div>

    )
}

export default CardPage;