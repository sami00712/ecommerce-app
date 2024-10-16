import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
export default function View(){
    return(
        <div>
        <div className="bg-white ">
        <h1 className="text-center text-4xl font-extrabold pt-10">SHOP.CO</h1>
        <div className="flex justify-center mt-10">
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
           </div>
           <div className="ml-10">
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
        {/* <div className="flex justify-center mt-10">
        <button className="text-xs font-bold  border-gray-300 border px-10 py-1 rounded-2xl ">
           View All
        </button> </div> */}
        {/* <div className="bg-gray-300 w-4/5 h-px ml-32 mt-16"> */}
        {/* </div> */}


       </div>
       <div className="bg-white ">
         {/* <h1 className="text-center text-4xl font-extrabold pt-10">TOP SELLING</h1> */}
         <div className="flex justify-center mt-10">
            <div>
                <Image src={'/suit2.png'} alt="suit" width={230} height={100} className="bg-stone-200 p-4 rounded-2xl"/>
                <p className="font-bold">Suit</p>
                <div className="flex text-xs mt-1 mb-1">
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-2" />
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-2" />
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-2" />
                <FontAwesomeIcon icon={faStar} width={15} className="text-yellow-400 mr-3" />
                <p>
                    4/<span className="text-gray-500">5</span>
                </p>
                
                </div>
                <p className="font-bold">$600 <del className="ml-2 text-gray-500">$720</del>
                 <span className="bg-red-300 text-red-600 text-xs rounded-xl p-1 font-normal ml-5 ">-20%</span></p>
            </div>
            <div className="ml-10">
                <Image src={'/shirt3.png'} alt="shirt" width={190} height={100} className="bg-stone-200 p-5 rounded-2xl"/>
                <p className="font-bold">Shirt</p>
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
                <p className="font-bold">$100 <del className="ml-2 text-gray-500">$110</del>
                <span className="bg-red-300 text-red-600 text-xs rounded-xl p-1 font-normal ml-5 ">-10%</span> </p>
            </div>
            <div className="ml-10">
                <Image src={'/shirt4.png'} alt="shirt" width={250} height={100} className="bg-stone-200 py-4 rounded-2xl"/>
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
                <Image src={'/jeans2.png'} alt="jeans" width={220} height={100} className="bg-stone-200 py-8 px-8 rounded-2xl"/>
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
         {/* <div className="flex justify-center mt-10"> */}
         {/* <button className="text-xs font-bold  border-gray-300 border px-10 py-1 rounded-2xl ">
            View All
         </button> </div>
         <div className="bg-gray-300 w-4/5 h-px ml-32 mt-16">
         </div> */}
         <div className="flex justify-center pb-5 pt-5">
            <button className="text-xs font-bold  border-gray-300 border px-10 py-1 rounded-2xl hover:border hover:border-gray-500">
                <Link href={'/'}>Back to Homepage</Link>
            </button>
         </div>

        </div>
       </div>
    )
}