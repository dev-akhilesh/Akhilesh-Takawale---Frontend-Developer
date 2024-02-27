import { useEffect, useState } from "react";
import "../Styles/Tokens.css";
import yellowborder from "../assets/yellowborder.svg";
import bitcoin from "../assets/bitcoin.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Tokens() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AOS.init();

        setLoading(true);

        fetch('https://matrix-labs-api.onrender.com/data')
            .then((res) => {
                return res.json();
            }).then((resData) => {
                setData(resData);
                setLoading(false);

            }).catch((err) => {
                console.log(err);
                setLoading(false);

            })
    }, []);

    return (
        <div data-aos="fade-up" data-aos-duration="800" className="main4 flex py-16 flex-col items-center gap-16">

            {/* Our Token Text */}
            <div data-aos="fade-up" data-aos-duration="800" className="textbox3 flex px-30 flex-col items-center gap-6">
                <div className="relative">
                    <h1>Our <span>Tokens</span></h1>
                    <img className="absolute" src={yellowborder} alt="yellowborder" />
                </div>
                <p>Pellentesque habitant morbi tristique senectus et netus et Pellentesque habitant morbi.</p>
            </div>

            {/* All Tokens */}
            {!loading && <div className="tokenparent flex px-16 justify-center items-start content-start gap-x-12 gap-y-16 flex-wrap">

                {
                    data.map((ele, ind) => (
                        <div data-aos="fade-up" data-aos-duration="800" key={ind} className="tokenchild relative flex flex-col items-center gap-6">
                            <img className="w-1/2 absolute" src={bitcoin} alt={ele.decimals} />

                            <div className="tokenchildmid w-11/12">
                                <h1>Bitcoin</h1>
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td>Symbol</td>
                                            <td>{ele.symbol}</td>
                                        </tr>
                                        <tr>
                                            <td>Decimals</td>
                                            <td>{ele.decimals}</td>
                                        </tr>
                                        <tr>
                                            <td>Market Cap</td>
                                            <td>{ele.marketcap}</td>
                                        </tr>
                                        <tr>
                                            <td>Chain</td>
                                            <td>{ele.chain}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="flex py-3 px-5 justify-center items-center gap-2">
                                <p>Details</p>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <path d="M10.5 8.38843L14.5 12.3884L10.5 16.3884" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                    ))
                }

            </div>}

            {/* Pagination */}
            {!loading && <div data-aos="fade-up" data-aos-duration="800" className="pagination flex p-6 justify-center items-center gap-24">
                <button>Previous</button>
                <p>Page 1 of 10</p>
                <button>Next</button>
            </div>}

        </div>
    )
}
