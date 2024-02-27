import "../Styles/Products.css";
import yellowborder from "../assets/yellowborder.svg";
import planeyellowborder from "../assets/planeyellowborder.svg";
import boxtopicon from "../assets/boxtopicon.svg";
import boxbottomicon from "../assets/boxbottomicon.svg";
import trolley from "../assets/trolley.png";
import exchange from "../assets/exchange.png";
import rocket from "../assets/rocket.png";
import coins from "../assets/coins.png";
import connection from "../assets/connection.png";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const products = [
    {id:1,img:trolley,name:'Bita Marketplace'},
    {id:2,img:exchange,name:"Bitadex"},
    {id:3,img:connection,name:'Bitabridge'},
    {id:4,img:rocket,name:'Bitapad'},
    {id:5,img:coins,name:'BitaLend'}
]

export function Products() {

    const [data,setData] = useState(products);

    useEffect(() => {
        AOS.init();
    }, []);
    

    return (
        <div data-aos="fade-up" data-aos-duration="800" className='main2 py-16 flex flex-col items-center gap-16 self-stretch relative'>

            {/* Text Parent Box */}
            <div data-aos="fade-up" data-aos-duration="800" className="maintext flex px-30 flex-col items-center gap-6 self-stretch">
                <div className="relative">
                    <h1>Our <span>Products</span></h1>
                    <img src={yellowborder} alt="border" />
                </div>
                <p>Pellentesque habitant morbi tristique senectus et netus et Pellentesque habitant morbi.</p>
            </div>

            {/* Products Parent Box */}
            <div className="products flex px-14 justify-center items-start content-start self-stretch flex-wrap gap-x-12 gap-y-14 ">
                {
                    data.map((ele)=>(
                        <div data-aos="fade-up" data-aos-duration="800" key={ele.id} className="child flex w-80 min-w-80 relative flex-col justify-center items-center gap-2">
                            <div className="childimg"><img src={ele.img} alt={ele.id} /></div>
                            <div className="text-center">
                                <p>{ele.name}</p>
                                <img className="block m-auto my-2" src={planeyellowborder} alt='planeyellowborder' />
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada </p>
                            </div>
                            <img className="topicon absolute" src={boxbottomicon} alt="topicon" />
                            <img className="bottomicon absolute" src={boxtopicon} alt="bottomicon" />
                        </div>
                    ))
                }
            </div>

            <div className="bottomlefticon absolute">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="214" height="447" viewBox="0 0 214 447" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M-92.0001 84.0565L13.3439 111.09L-9.42099 199.801L-114.765 172.767L-92.0001 84.0565ZM-87.8785 91.0237L6.3767 115.211L-13.5426 192.833L-107.798 168.646L-87.8785 91.0237Z" fill="url(#paint0_linear_198_2418)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M-100.243 70.122L-134.391 203.188L15.3087 241.604L49.4561 108.538L-100.243 70.122ZM42.4889 112.659L-96.1217 77.0892L-127.423 199.067L11.1871 234.637L42.4889 112.659Z" fill="url(#paint1_linear_198_2418)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M-108.487 56.1876L85.5682 105.986L40.0384 283.407L-154.016 233.609L-108.487 56.1876ZM-104.365 63.1548L78.601 110.107L35.9168 276.44L-147.049 229.487L-104.365 63.1548Z" fill="url(#paint2_linear_198_2418)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M-116.73 42.2531L-173.642 264.03L59.2237 323.788L116.136 102.011L-116.73 42.2531ZM109.169 106.133L-112.608 49.2203L-166.675 259.908L55.102 316.821L109.169 106.133Z" fill="url(#paint3_linear_198_2418)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M-124.973 28.3186L146.704 98.0362L78.4089 364.169L-193.268 294.451L-124.973 28.3186ZM-120.851 35.2859L139.736 102.158L74.2873 357.201L-186.301 290.329L-120.851 35.2859Z" fill="url(#paint4_linear_198_2418)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M-133.216 14.3842L-212.893 324.872L97.5942 404.549L177.271 94.0614L-133.216 14.3842ZM170.304 98.183L-129.095 21.3514L-205.926 320.75L93.4726 397.582L170.304 98.183Z" fill="url(#paint5_linear_198_2418)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M-141.459 0.449707L-232.519 355.293L122.324 446.352L213.384 91.5094L-141.459 0.449707ZM206.416 95.631L-137.338 7.41694L-225.552 351.171L118.202 439.385L206.416 95.631Z" fill="url(#paint6_linear_198_2418)"/>
                        <defs>
                        <linearGradient id="paint0_linear_198_2418" x1="-135.915" y1="1.87251" x2="125.734" y2="456.092" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_198_2418" x1="-135.915" y1="1.87251" x2="125.734" y2="456.092" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_198_2418" x1="-135.915" y1="1.87251" x2="125.734" y2="456.092" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_198_2418" x1="-135.915" y1="1.87251" x2="125.734" y2="456.092" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_198_2418" x1="-135.915" y1="1.87251" x2="125.734" y2="456.092" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear_198_2418" x1="-135.915" y1="1.87251" x2="125.734" y2="456.092" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint6_linear_198_2418" x1="-135.915" y1="1.87251" x2="125.734" y2="456.092" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                    </defs>
                    </svg>
                </div>
            </div>

        </div>
    )
}
