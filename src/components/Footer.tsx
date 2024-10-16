import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage} from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { faAppleWhole} from '@fortawesome/free-solid-svg-icons';



export default function Footer(){
    return(
        <div className="bg-gradient-to-b from-white to-stone-300">
            <h1 className="font-extrabold text-4xl ml-12">OUR HAPPY CUSTOMERS</h1>
            <div className="flex justify-center mt-5">
                <div className="border border-gray-400 w-fit p-4 rounded-xl">
                    <p> ⭐⭐⭐⭐⭐</p>
                    <p className="font-bold">Sarah M.</p>
                    <p className="text-xs">I recently bought a shirt and a pair of jeans,<br />
                    and I’m impressed with the quality. The fabric <br />feels soft but durable, and both items fit perfectly
                    <br /> and the shirt stays comfortable all day.</p>
                </div>
                <div className="border border-gray-400 w-fit p-4 ml-12 rounded-xl">
                    <p> ⭐⭐⭐⭐⭐</p>
                    <p className="font-bold">Jammes L.</p>
                    <p className="text-xs">These are now my go-to jeans and shirt!<br />
                    The shirt’s design is trendy but still casual enough<br /> for everyday wear, and the jeans look great whether
                    <br /> and they hold up well. I’m happy with this purchase!.</p>
                </div>
                <div className="border border-gray-400 w-fit p-4 ml-12 rounded-xl  sm:hidden lg:block">
                    <p> ⭐⭐⭐⭐⭐</p>
                    <p className="font-bold">Alex K.</p>
                    <p className="text-xs">I ordered the shirt and jeans combo, and both items<br />
                    are perfect for daily wear. The shirt feels lightweight,<br /> great for layering, and the jeans are super comfortable.
                    <br />  but they fit true to size. I’ll definitely be ordering more!</p>
                </div>
            </div>
            <div className="mt-16  bg-black lg:flex lg:justify-between mr-12 ml-12 p-4 rounded-2xl">
                <div className="text-white font-bold lg:text-3xl sm:text-3xl">
                    <h1>STAY UPTO DATE ABOUT</h1>
                    <h1>OUR LATEST OFFERS</h1>
                </div>
                <div className="sm:mt-3 lg:mt-0 ">
                    <div className="flex px-5 sm:w-fit sm:px-6 sm:ml-20 lg:ml-0 bg-white mb-4 rounded-2xl items-center">
                    <FontAwesomeIcon icon={faMessage} width={10} className="text-gray-400 mr-2" />
                    <input type="email" placeholder="Enter your email address" className="text-sm py-2  border-none outline-none focus:ring-inset " />
                    </div>
                    <a href="" className="bg-white font-bold text-sm px-16 py-2 sm:ml-20 lg:ml-0 rounded-2xl hover:bg-gray-500 hover:text-white ">Subscribe to Us</a>

                </div>
            </div>
            
            <div className="bg-stone-200 w-full h-full  pl-16 pt-16">
                <div className="lg:flex">
                <div className="">
                    <h1 className="font-extrabold lg:text-4xl sm:text-7xl">SHOP.CO</h1>
                    <p className="text-xs mt-3">We have clothes that suit your style and 
                        <br /> which you're prooud to wear. From <br />
                        women to men.
                    </p>
                    <div className="flex mt-7" >
                      <a href="" target="_blank">
                       <FaFacebook size={30} color="" className="mr-2  bg-white p-1 rounded-full hover:bg-black hover:text-white" />
                        </a>
                     <a href="" target="_blank" >
                      <FaTwitter size={30} color="" className="mr-2  bg-white p-1 rounded-full hover:bg-black hover:text-white" />
                          </a>
                      <a href="" target="_blank">
                         <FaInstagram size={30} color="" className="mr-2  bg-white p-1 rounded-full hover:bg-black hover:text-white" />
                      </a>
                      <a href="" target="_blank">
                         <FaGithub size={30} color="" className="mr-2 bg-white p-1 rounded-full hover:bg-black hover:text-white" />
                      </a>
                    </div>
                </div>
                <div className="sm:flex sm:mt-6 lg:mt-0">
                <div className="lg:ml-28 sm:ml-16 text-xs text-gray-700 ">
                    <h1 className=" font-bold text-sm">COMPANY</h1>
                    <div className="flex-col flex"><a href="" className="mt-2">About</a>
                    <a href=""className="mt-2">Features</a> 
                    <a href=""className="mt-2">Work</a>
                    <a href=""className="mt-2">Career</a></div>

                </div>
                <div className="lg:ml-28 sm:ml-32 text-xs text-gray-700">
                    <h1 className=" font-bold text-sm">HELP</h1>
                    <div className="flex-col flex"><a href="" className="mt-2">Customer Support</a>
                    <a href=""className="mt-2">Delivery Details</a> 
                    <a href=""className="mt-2">Terms and Condition</a>
                    <a href=""className="mt-2">Privacy Policy</a></div>

                </div></div>
                <div className="sm:flex sm:mt-6 lg:mt-0">
                <div className="lg:ml-28 sm:ml-16 text-xs text-gray-700">
                    <h1 className=" font-bold text-sm">FAQ</h1>
                    <div className="flex-col flex"><a href="" className="mt-2">Account</a>
                    <a href=""className="mt-2">Manage Delivery</a> 
                    <a href=""className="mt-2">Orders</a>
                    <a href=""className="mt-2">Payments</a></div>

                </div>
                <div className="ml-28 text-xs text-gray-700">
                    <h1 className=" font-bold text-sm">Resources</h1>
                    <div className="flex-col flex"><a href="" className="mt-2">Free eBooks</a>
                    <a href=""className="mt-2">Development Tutorial</a> 
                    <a href=""className="mt-2">How to -Blog</a>
                    <a href=""className="mt-2">Youtube Playlist</a></div>

                </div>
                </div>
                </div>
               
                <div className="bg-gray-400 w-11/12 mt-4 h-px "></div>
                <div className="lg:flex lg:justify-between sm:ml-20 lg:ml-0">
                    <div className="mt-4 text-xs text-gray-500">
                        <p>Shop.co © 2000-2024. All Rights Reserved</p>
                    </div>
                    <div className="flex text-sm mt-4 mr-20 items-center">
                        <p className="font-sans font-bold text-blue-600 bg-white p-1 mr-4 rounded-md">VISA</p>
                        <p className="mr-4 text-blue-800 font-bold bg-white p-1 rounded-md">Pay<span className="text-sky-600">Pal</span></p>
                        <p className="flex mr-4 bg-white p-1 font-semibold rounded-md"><FontAwesomeIcon icon={faAppleWhole} width={10} className="" />Pay</p>
                        <p className="flex mr-4 bg-white p-1 font-semibold rounded-md"><span className="text-red-400 font-bold">G</span>Pay</p>
                    </div>
                </div>
            </div>
            
            
           
        </div>
    )
}