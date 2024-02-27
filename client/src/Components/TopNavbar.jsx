import "../Styles/TopNavbar.css";
import logo from "../assets/Logo Yellow 1.svg"
import bank from "../assets/bank.png";
import halfstar from "../assets/halfstar.svg";
import fullstar from "../assets/fullstar.svg";
import starborder from "../assets/starwithborder.svg";
import yellowborder from "../assets/yellowborder.svg";
import lefticon from "../assets/leftsideicon.svg";
import pentagon from "../assets/pentagon.png";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function TopNavbar() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='main w-full p-10 relative overflow-hidden'>

            {/* Navbar HTML */}
            <div className='navbar w-full py-4 px-8 flex justify-between items-center rounded-2xl'>

                <div className="navbarlogo h-14 flex justify-center items-center gap-2">
                    <div><img src={logo} alt="logo" /></div>
                    <div>
                        <p>BITVERSE</p>
                        <p>FINANCE</p>
                    </div>
                </div>

                <div className="navbarlinks flex justify-between items-center gap-8">

                    <div className="flex justify-between items-center gap-8 py-4 px-6">
                        <a href="/">About</a>
                        <a href="/">Our Products</a>
                        <a href="/">Taken Utility</a>
                        <a href="/">Roadmap</a>
                    </div>

                    <button>
                        Connect Wallet
                    </button>

                </div>

            </div>
            <img className="lefticon absolute" src={lefticon} alt="left icon" />
            <img className="righticon absolute" src={pentagon} alt="right icon" />

            {/* Middle Main */}
            <div className="mainpart flex justify-center items-center flex-col gap-0 m-auto my-14">

                <div className="mainpartext ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="720" height="185" viewBox="0 0 720 185" fill="none">
                        <path d="M23.1 66V42.3L0 1.59997H16.8L31.2 28.3L45.6 1.59997H62.4L39.3 42.3V66H23.1Z" fill="#F0F6FB" />
                        <path d="M90.0594 67C79.5927 67 71.626 64.3333 66.1594 59C60.6927 53.6666 57.9594 45.3666 57.9594 34.1C57.9594 22.1666 60.6927 13.6 66.1594 8.39998C71.626 3.19998 79.5927 0.599976 90.0594 0.599976C100.526 0.599976 108.493 3.19998 113.959 8.39998C119.426 13.6 122.159 22.1666 122.159 34.1C122.159 45.3666 119.426 53.6666 113.959 59C108.493 64.3333 100.526 67 90.0594 67ZM90.0594 53.3C95.4594 53.3 99.3927 51.7666 101.859 48.7C104.393 45.5666 105.659 40.7 105.659 34.1C105.659 26.9 104.393 21.8333 101.859 18.9C99.3927 15.9 95.4594 14.4 90.0594 14.4C84.5927 14.4 80.5927 15.9 78.0594 18.9C75.5927 21.8333 74.3594 26.9 74.3594 34.1C74.3594 40.7 75.5927 45.5666 78.0594 48.7C80.5927 51.7666 84.5927 53.3 90.0594 53.3Z" fill="#F0F6FB" />
                        <path d="M159.47 67C153.47 67 148.236 66.0333 143.77 64.1C139.37 62.1666 135.936 59.3 133.47 55.5C131.07 51.7 129.87 47.0333 129.87 41.5V1.59997H145.97V40C145.97 44.4666 147.136 47.8 149.47 50C151.803 52.2 155.136 53.3 159.47 53.3C163.803 53.3 167.136 52.2 169.47 50C171.803 47.8 172.97 44.4666 172.97 40V1.59997H189.07V41.5C189.07 47.0333 187.836 51.7 185.37 55.5C182.97 59.3 179.536 62.1666 175.07 64.1C170.67 66.0333 165.47 67 159.47 67Z" fill="#F0F6FB" />
                        <path d="M198.729 66V1.59997H230.929C238.529 1.59997 244.129 3.59997 247.729 7.59997C251.329 11.6 253.129 16.9666 253.129 23.7C253.129 28.0333 252.029 31.8333 249.829 35.1C247.629 38.3666 244.629 40.8 240.829 42.4C241.762 43.1333 242.496 43.9666 243.029 44.9C243.629 45.7666 244.262 47 244.929 48.6L252.529 66H235.729L228.529 49.6C227.929 48.2 227.162 47.2 226.229 46.6C225.296 45.9333 223.962 45.6 222.229 45.6H214.829V66H198.729ZM214.829 33.2H226.729C229.862 33.2 232.296 32.4333 234.029 30.9C235.829 29.3 236.729 26.9 236.729 23.7C236.729 17.2333 233.629 14 227.429 14H214.829V33.2Z" fill="#F0F6FB" />
                        <path d="M314.911 67C303.778 67 295.311 64.2 289.511 58.6C283.711 52.9333 280.811 44.9666 280.811 34.7C280.811 23.9666 283.778 15.6 289.711 9.59998C295.644 3.59998 304.378 0.599976 315.911 0.599976C319.844 0.599976 323.378 0.83331 326.511 1.29998C329.711 1.76664 332.744 2.46664 335.611 3.39998V17.2C332.744 16.1333 329.744 15.4 326.611 15C323.544 14.6 320.378 14.4 317.111 14.4C310.178 14.4 305.111 16.0666 301.911 19.4C298.778 22.6666 297.211 27.7666 297.211 34.7C297.211 41.0333 298.711 45.7333 301.711 48.8C304.711 51.8 309.144 53.3 315.011 53.3C318.878 53.3 322.478 52.7666 325.811 51.7V39.5H311.911V29.4H339.311V61.3C337.044 62.7666 333.878 64.1 329.811 65.3C325.811 66.4333 320.844 67 314.911 67Z" fill="#F0F6FB" />
                        <path d="M345.557 66L370.157 1.59997H387.557L412.157 66H395.357L389.557 51.4H368.057L362.357 66H345.557ZM370.257 39.5H387.357L378.757 17.1L370.257 39.5Z" fill="#F0F6FB" />
                        <path d="M426.715 66V14H407.815V1.59997H461.715V14H442.815V66H426.715Z" fill="#F0F6FB" />
                        <path d="M468.944 66V1.59997H516.444V14H485.044V27.5H512.744V40.1H485.044V53.6H516.444V66H468.944Z" fill="#F0F6FB" />
                        <path d="M537.12 66L522.12 1.59997H537.92L546.42 40.4L555.22 10.7V1.59997H568.42L579.52 40.5L588.42 1.59997H604.22L589.32 66H574.42L563.62 28.8L552.02 66H537.12Z" fill="#F0F6FB" />
                        <path d="M600.928 66L625.528 1.59997H642.928L667.528 66H650.728L644.928 51.4H623.428L617.728 66H600.928Z" fill="#F0F6FB" />
                        <path d="M680.229 66V42.3L657.129 1.59997H673.929L688.329 28.3L702.729 1.59997H719.529L696.429 42.3V66H680.229Z" fill="#F0F6FB" />
                        <path d="M19 184V132H0.1V119.6H54V132H35.1V184H19Z" fill="#F0F6FB" />
                        <path d="M90.3523 185C79.8857 185 71.919 182.333 66.4523 177C60.9857 171.667 58.2523 163.367 58.2523 152.1C58.2523 140.167 60.9857 131.6 66.4523 126.4C71.919 121.2 79.8857 118.6 90.3523 118.6C100.819 118.6 108.786 121.2 114.252 126.4C119.719 131.6 122.452 140.167 122.452 152.1C122.452 163.367 119.719 171.667 114.252 177C108.786 182.333 100.819 185 90.3523 185ZM90.3523 171.3C95.7523 171.3 99.6857 169.767 102.152 166.7C104.686 163.567 105.952 158.7 105.952 152.1C105.952 144.9 104.686 139.833 102.152 136.9C99.6857 133.9 95.7523 132.4 90.3523 132.4C84.8857 132.4 80.8857 133.9 78.3523 136.9C75.8857 139.833 74.6523 144.9 74.6523 152.1C74.6523 158.7 75.8857 163.567 78.3523 166.7C80.8857 169.767 84.8857 171.3 90.3523 171.3Z" fill="#F0F6FB" />
                    </svg>
                </div>

                <img className="bank" src={bank} alt="bank" />
                <img className="halfstar1" src={halfstar} alt="halfstar1" />
                <img className="halfstar2" src={halfstar} alt="halfstar2" />
                <img className="fullstar" src={fullstar} alt="fullstar" />
                <img className="starborder" src={starborder} alt="starborder" />
                <img className="yellowborder" src={yellowborder} alt="yellowborder" />

                <div className="mainpartext2 flex justify-center items-center gap-4 pl-10 ">
                    <p>DeFi on</p>
                    <p>Bitcoin</p>
                </div>

            </div>

            {/* last part */}
            <div className="last flex justify-center items-center flex-col gap-10 m-auto mt-20">
                <p data-aos="fade-up" data-aos-duration="800">Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse id velit proin eleifend id mauris. Amet sem in id eget nunc quam lacus tellus augue.</p>
                <div data-aos="fade-up" data-aos-duration="800">
                    <p>Get Started</p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M10.5 8.5L14.5 12.5L10.5 16.5" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </p>
                </div>
            </div>

            <div className="radialshadow"></div>
            <br /><br /><br /><br /><br />

        </div>
    )
}
