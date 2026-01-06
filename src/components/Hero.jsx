import { useRef, useState, useEffect } from "react";
import Button from "./Button";
import { FiMonitor } from "react-icons/fi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)
const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideo = 3;
    const nextVdref = useRef(null);

    const upComingVideo = (currentIndex % totalVideo) + 1;

    const handleMiniVdClicks = () => {
        setIsHovered(true);

        setCurrentIndex(upComingVideo);
    }

    useEffect(() => {
        if(loadedVideos === totalVideo ) {
            setIsLoading(false);
        }
    }, [loadedVideos])

    useGSAP(() => {
        if(isHovered){
            gsap.set('#next-video', {visibility: 'visible'});
            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: "100%",
                height: "100%",
                ease: "power1.inOut",
                duration: 1,
                onStart: () => nextVdref.current.play(),
            })
            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: "power1.inOut",
            })
        }
    }, {dependencies: [currentIndex], revertOnUpdate: true}) 

    useGSAP(()=>{
        gsap.set('#video-frame',{
            clipPath: 'polygon(5% 11%, 90% 0, 78% 78%, 0 94%)',
            borderRadius: '40% 10% 10% 50%'
        })

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: "power1.inOut",
            scrollTrigger:{
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true
            }
            
        })
    })

    const getVideo = (index) => `videos/hero-${index}.mp4`;

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }

  return (
    <div className="relative h-dvh">

        {isLoading && (
            <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-400">
                <div className="three-body">
                    <div className="three-body__dot"/>
                    <div className="three-body__dot"/>
                    <div className="three-body__dot"/>
                </div>
            </div>
        )}

        <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
            <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                <div onClick={handleMiniVdClicks} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                    <video
                    ref={nextVdref}
                    src={getVideo(upComingVideo)}
                    loop
                    muted
                    id="current-video"
                    className="size-64 origin-center scale-150 object-cover object-center"
                    onLoadedData={handleVideoLoad}
                    />
                </div>
            </div>
            
            <video
            ref={nextVdref}
            src={getVideo(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-24 object-cover object-center"
            onLoadedData={handleVideoLoad}
            />

            <video
            src={getVideo(currentIndex === totalVideo - 1 ? 1 : currentIndex)}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
            />

            <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-200">
                St<b>u</b>d<b>i</b>o
            </h1>

            <div className="absolute top-0 left-0 z-40 size-full mt-24 md:mt-16">
                <div className="mt-25 lg:mt-5 px-5 sm:px-10"> 
                    <h1 className="special-font hero-heading z-40 text-blue-100">
                        <b>D</b>ope<b>e</b>min
                    </h1>
                    <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                        Crafting Epic Experiences <br/> for the Digital Age
                    </p>
                    <Button id="watch-trailer" title="Learn More" containerClass="bg-blue-200 flex-center gap-1" rightIcon={FiMonitor} link={'#about'}/>
                </div>
            </div>
        </div>
        
        <h1 className="special-font hero-heading absolute bottom-5 right-5 text-blue-75">
            St<b>u</b>d<b>i</b>o
        </h1>
    </div>
  )
}

export default Hero
