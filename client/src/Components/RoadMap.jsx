import { useEffect, useRef, useState } from "react";
import "../Styles/RoadMap.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function RoadMap() {
    
    const data = new Array(6).fill(0);
    const parentRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        AOS.init();
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - parentRef.current.offsetLeft);
        setScrollLeft(parentRef.current.scrollLeft);
      };
    
      const handleMouseUp = () => {
        setIsDragging(false);
      };
    
      const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - parentRef.current.offsetLeft;
        const walk = (x - startX)*1;
        parentRef.current.scrollLeft = scrollLeft - walk;
      };

    return (
        <div className='main3 overflow-hidden relative flex w-full py-16 flex-col justify-center items-start gap-14'>
            
            {/* Text Parent */}
            <div data-aos="fade-right" data-aos-duration="800" className="textparent relative flex px-28 flex-col gap-3">
                <h1>Roadmap</h1>
                <div className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" width="177" height="20" viewBox="0 0 177 20" fill="none">
                    <path d="M0.551003 18.3865C48.1951 6.09829 115.064 -0.428688 176.712 2.97441" stroke="#000000" stroke-width="3"/>
                    </svg>
                </div>
            </div>

            {/* Scrollable Parent Box */}
            <div data-aos="fade-right" data-aos-duration="800" ref={parentRef} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} className="scrollable ">
                {
                    data.map((ele,ind)=>(
                        <div key={ind} className="scrollchild text-center inline-block relative w-80 mx-8">
                            <h1>{(ind+1).toString().padStart(2,'0')}</h1>
                            <div className="box absolute p-6 w-full">
                                <div className="boxtext">
                                    <h3>Initial Design and Development</h3>
                                    <p>Q4 2023</p>
                                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada </p>
                                </div>
                            </div>
                            <div className="upside absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" width="197" height="21" viewBox="0 0 197 21" fill="none">
                                <path d="M13.5 0.0184326C13.5 0.0184326 65.2911 2.51843 98.5 2.51843C131.709 2.51843 183.5 0.0184326 183.5 0.0184326C187.262 8.72424 189.938 13.2179 196.5 20.0184H0.5C7.42572 12.9001 10.1215 8.47554 13.5 0.0184326Z" fill="#969000"/>
                                </svg>
                            </div>
                            <div className="upside2 absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" width="187" height="62" viewBox="0 0 187 62" fill="none">
                                <g filter="url(#filter0_di_3279_97)">
                                    <path d="M8.5 0.0184326C8.5 0.0184326 60.2909 2.51843 93.5 2.51843C126.709 2.51843 178.5 0.0184326 178.5 0.0184326V51.0184C178.5 51.0184 126.926 61.0184 93.5 61.0184C60.0738 61.0184 8.5 51.0184 8.5 51.0184V0.0184326Z" fill="#FFD940"/>
                                </g>
                                <defs>
                                    <filter id="filter0_di_3279_97" x="0.4" y="-5.08157" width="186.2" height="77.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="3"/>
                                    <feGaussianBlur stdDeviation="4.05"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3279_97"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3279_97" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="2"/>
                                    <feGaussianBlur stdDeviation="4.25"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_3279_97"/>
                                    </filter>
                                </defs>
                                </svg>
                            </div>
                            <p className="upsidetext absolute">PHASE-{ind+1}</p>
                        </div>
                    ))
                }
            </div>


            <div className="righticonmain absolute">
                <svg xmlns="http://www.w3.org/2000/svg" width="195" height="245" viewBox="0 0 195 245" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.314697 205.91C45.0509 184.739 67.4187 159.862 67.4187 131.281C48.3508 129.164 32.5833 121.666 20.1158 108.786C7.64841 95.907 1.41476 80.999 1.41476 64.0618C1.41476 46.0661 7.46506 30.8934 19.5658 18.5434C31.6666 6.19334 46.884 0.0184326 65.2185 0.0184326C85.7532 0.0184326 103.537 8.04584 118.572 24.1009C133.606 40.1559 141.123 59.651 141.123 82.5868C141.123 151.394 101.154 205.204 21.2159 244.018L0.314697 205.91ZM158.191 205.91C203.294 184.739 225.845 159.862 225.845 131.281C206.41 129.164 190.459 121.666 177.992 108.786C165.524 95.907 159.291 80.999 159.291 64.0618C159.291 46.0661 165.433 30.8934 177.717 18.5434C190.001 6.19334 205.31 0.0184326 223.645 0.0184326C244.179 0.0184326 261.872 8.04584 276.723 24.1009C291.574 40.1559 298.999 59.651 298.999 82.5868C298.999 151.394 259.214 205.204 179.642 244.018L158.191 205.91Z" fill="rgba(255, 255, 255, 0.40)"/>
                </svg>
            </div>

        </div>
    )
}
