import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";


export default function Arrivals(){
    return(
        <div className="bg-white min-h-screen">
         <h1 className="text-center text-4xl font-extrabold pt-10">NEW ARRIVALS</h1>
         <div className="lg:flex lg:justify-center mt-10">
            <div className="sm:flex sm:ml-2 sm:mb-10">
            <div>
                <Image src={'/shirt1.png'} alt="shirt" width={230} height={100} className="bg-stone-200 p-4 rounded-2xl"/>
                <p className="font-bold">T-Shirt</p>
                <div className="flex text-xs mt-1 mb-1">
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-2" />
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-2" />
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-2" />
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-3" />
                <p>
                    4/<span className="text-gray-500">5</span>
                </p>
                
                </div>
                <p className="font-bold">$200 <del className="ml-2 text-gray-500">$240</del>
                 <span className="bg-red-300 text-red-600 text-xs rounded-xl p-1 font-normal ml-5 ">-20%</span></p>
            </div>
            <div className="ml-10">
                <Image src={'/suit1.png'} alt="suit" width={230} height={100} className="bg-stone-200 p-4 rounded-2xl"/>
                <p className="font-bold">3 Pcs Suit</p>
                <div className="flex text-xs mt-1 mb-1">
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-2" />
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-2" />
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-2" />
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-2" />
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-3" />
                <p>
                    5/<span className="text-gray-500">5</span>
                </p>
                
                </div>
                <p className="font-bold">$500 <del className="ml-2 text-gray-500">$550</del>
                <span className="bg-red-300 text-red-600 text-xs rounded-xl p-1 font-normal ml-5 ">-10%</span> </p>
            </div></div>
            <div className="sm:flex sm:ml-2">
            <div className="lg:ml-10">
                <Image src={'/shirt2.png'} alt="shirt" width={230} height={100} className="bg-stone-200 p-4 rounded-2xl"/>
                <p className="font-bold">Shirt</p>
                <div className="flex text-xs mt-1 mb-1">
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-2" />
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-2" />
                
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-3" />
                <p>
                    3/<span className="text-gray-500">5</span>
                </p>
                
                </div>
                <p className="font-bold">$120 </p>
            </div>
            <div className="ml-10">
                <Image src={'/jeans1.png'} alt="jeans" width={205} height={100} className="bg-stone-200 py-8 px-8 rounded-2xl"/>
                <p className="font-bold">Jeans for Men</p>
                <div className="flex text-xs mt-1 mb-1">
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-2" />
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-2" />
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-2" />
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-3" />
                <p>
                    4/<span className="text-gray-500">5</span>
                </p>
                
                </div>
                <p className="font-bold">$150 </p>
            </div>
          </div>
         </div>
         <div className="flex justify-center mt-10">
            <Link href={'/view'}>
         <button className="text-xs font-bold  border-gray-300 border px-10 py-1 rounded-2xl hover:border hover:border-gray-500 ">
            View All
         </button></Link> </div>
         <div className="bg-gray-300 w-4/5 h-px lg:ml-32 sm:ml-4 mt-16">
         </div>


        </div>
    )
}