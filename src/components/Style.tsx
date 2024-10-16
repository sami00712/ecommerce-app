import Image from "next/image";


export default function Style(){
    return(
        <div className="bg-stone-200 min-h-screen lg:ml-12 lg:mr-12 rounded-2xl sm:ml-4 sm:mr-4 mt-12 mb-12">
            <h1 className="text-center font-extrabold pt-7 lg:text-4xl sm:text-6xl">BROWSE BY DRESS STYLE</h1>
            <div className="mt-16 ml-10">
                <div className="lg:flex">
                    <div className="w-96 bg-white h-44 mr-3 rounded-xl flex">
                    <p className="font-bold text-3xl mt-3 ml-3">Casual</p>
                        <Image src={'/cs.png'} alt="casual" width={300} height={100} className=""/>
                        
                    </div>
                    <div className="lg:w-3/5 sm:w-96 bg-white h-44 rounded-xl flex sm:mt-3 lg:mt-0">
                    <p className="font-bold text-3xl mt-3 ml-3">Formal</p>
                        <Image src={'/fr.png'} alt="formal" width={300} height={100} className="lg:ml-60"/>
                    </div>

                </div>
                <div className="lg:flex lg:mt-3 sm:mt-3">
                <div className="lg:w-3/5 sm:w-96 bg-white h-44 mr-3 rounded-xl flex">
                <p className="font-bold text-3xl mt-3 ml-3">Party</p>
                <Image src={'/pt.png'} alt="party" width={300} height={100} className="lg:ml-60"/>
                </div>
                <div className="w-96 bg-white h-44 mr-3 rounded-xl flex sm:mt-3 lg:mt-0">
                <p className="font-bold text-3xl mt-3 ml-3">Gym</p>
                <Image src={'/gym.png'} alt="gym" width={250} height={100} className="ml-10"/>
                 </div>
                </div>
            </div>
        </div>
    )
}