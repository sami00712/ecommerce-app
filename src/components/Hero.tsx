import Image from "next/image"

export default function Hero(){
    return(
        <div className="bg-stone-200    ">
            <div className="lg:flex lg:px-20 sm:px-1">
            <div className="lg:pt-7 sm:pt-4 ">
            <div className="lg:text-6xl font-extrabold  uppercase sm:text-4xl">
                <h1>Find clothes</h1>
                <h1>That Matches</h1>
                <h1>Your Style</h1>
            </div>
            <p className="text-gray-600 text-sm mt-5">browse through our diverse range of meticulously
             crafted garments, designed <br /> to bring out your individuality
             and cater to your sense of style</p>
             <button className="bg-black rounded-3xl text-white lg:px-10 py-3 mt-5 text-sm font-bold hover:bg-white hover:text-black sm:px-40">
                Shop Now</button>
             <div className="lg:flex mt-3 lg:justify-center">
                <div className="sm:flex sm:space-x-8 lg:space-x-2">
                <div className="mr-5 sm:ml-2">
                    <h2 className="text-3xl font-bold">200+</h2>
                    <p className="text-xs text-gray-600">International Brands</p>
                </div>
                <p className="w-0.5 h-12 bg-gray-300"></p>
                <div className="lg:ml-2 lg:mr-5">
                    <h2 className="text-3xl font-bold">2,000+</h2>
                    <p className="text-xs text-gray-600">High Quality Products</p>
                </div></div>
                <div className="sm:flex sm:pt-2 sm:ml-28  lg:pt-0 lg:ml-5">
                <p className="w-0.5 h-12 bg-gray-300"></p>
                <div className="lg:ml-2 ">
                    <h2 className="text-3xl font-bold">30,000+</h2>
                    <p className="text-xs text-gray-600">Happy Customers</p>
                </div></div>
             </div>
            </div>
            <div className="  ">
            <Image src={"/str.png"} alt="pic" width={50} height={100} className="absolute mt-48 lg:ml-28 sm:ml-3 "/>
            <Image src={"/str.png"} alt="pic" width={100} height={100} className="absolute lg:mt-16 lg:ml-96 sm:ml-60 "/>
            <Image src={"/img.png"} alt="pic" width={400} height={100} className="lg:ml-28 sm:ml-4"/>
            
            </div>
            </div>
          <div className="lg:flex bg-gray-400 lg:text-center">
            <div className="sm:flex sm:justify-center">
            <h1 className="text-3xl flex items-center lg:ml-24 sm:ml-5 lg:mr-20 sm:mr-5">VERSACE</h1>
            <Image  src={'/zr.png'} alt="zara" width={100} height={100} className="lg:mr-32 sm:mr-10" />
            <Image  src={'/gc.png'} alt="zara" width={100} height={100} className="lg:mr-32 sm:mr-10" /></div>
            <div className="sm:flex sm:justify-center"><Image  src={'/pd.png'} alt="zara" width={100} height={100} className="lg:mr-32 sm:mr-10"/>
            <Image  src={'/ck.png'} alt="zara" width={100} height={100} />
          </div></div>
        </div>
    )
}