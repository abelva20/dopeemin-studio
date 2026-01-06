import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { BiDownArrow } from "react-icons/bi";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const NavItem = ['about', 'project', 'contact']

const Navbar = () => {
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const navContainerRef =  useRef(null);
    const audioElement = useRef(null);

    const { y: pageYOffset } = useWindowScroll();

    useEffect(() => {
        if (pageYOffset === 0) {
            setIsNavVisible(true);
            navContainerRef.current.classList.remove("floating-nav");
        } else if (pageYOffset > lastScrollY) {
            setIsNavVisible(false);
            navContainerRef.current.classList.add("floating-nav");
        } else if (pageYOffset < lastScrollY) {
            setIsNavVisible(true);
            navContainerRef.current.classList.add("floating-nav");
        }
        setLastScrollY(pageYOffset);
    }, [pageYOffset, lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible? 0 : -100,
            opacity: isNavVisible? 1 : 0,
            duration: 0.2,
            ease: "power1.inOut"
        })
    },[isNavVisible])

    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);

        setIsIndicatorActive((prev) => !prev);
    }

    useEffect(()=>{
        if(isAudioPlaying){
            audioElement.current.play();
        }else{
        audioElement.current.pause();
        }
    },[isAudioPlaying])
    
  return (
    <div 
    ref={navContainerRef}
    className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
        <header className="absolute top-1/2 w-full -translate-y-1/2 ">
            <nav className="flex size-full items-center justify-between p-4">
                <div className="flex items-center gap-7">
                    <img
                    src="/img/logo.png"
                    alt="Logo"
                    className="w-10"
                    />
                    <Button
                    id="product-button"
                    title='Product'
                    rightIcon={<BiDownArrow/>}
                    containerClass="bg-blue-200 flex items-center justify-center gap-1"
                    />
                </div>

                <div className="flex h-full items-center">
                    <div className="hidden md:block">
                        {NavItem.map((item) => (
                            <a 
                            className="nav-hover-btn"
                            key={item}
                            href={`#${item.toLowerCase()}`}>
                              {item}  
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <button 
                    onClick={toggleAudioIndicator}
                    className="ml-10 flex items-center space-x-0.5">
                       <audio ref={audioElement} className="hidden" src="/audio/loop.mp3" loop/>
                        {[1,2,3,4].map((bar) => (
                            <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' : ' '}`} style={{animationDelay: `${bar * 0.1}s`}}/>
                        ))}
                    </button>
                </div>
            </nav>
        </header>

    </div>
  )
}

export default Navbar