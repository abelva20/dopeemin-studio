import { TiLocationArrow } from "react-icons/ti"
import { BentoCard } from "./Bentocard"
import { useRef, useState } from "react"

// eslint-disable-next-line react/prop-types
const BentoTilt = ({children, className = ""}) => {
    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef();

    const handleMouseMove = (e) => {
        if(!itemRef.current) return;

        const {left, top, width, height} = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left)/width;
        const relativeY = (e.clientY - top)/height;
        const tiltY = (relativeX - 0.5)* 5;
        const tiltX = (relativeY - 0.5)* -5;

        const newTransfom = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;

        setTransformStyle(newTransfom)
    };

    const handleMouseLeave = () => {
        setTransformStyle('');
    }
    return (
        <div className={className} 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{transform: transformStyle}}
        ref={itemRef}
        >
            {children}
        </div>
    )
}
const Features = () => {
  return (
    <section id="project" className="bg-black pb-52">
        <div className="container mx-auto px-3 md:px-10">
            <div className="px-5 py-32">
                <p className="font-circular-web text-lg text-blue-50">
                    Our features are designed to make your digital experience more enjoyable and efficient.
                </p>
                <p className="max-w-md font-circular-web text-lg text-blue-50/50">
                    Start by exploring our product and discover how it can help you improve your online presence and create lasting memories.
                </p>
            </div>

            {/* Bento Grid */}
            <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                <BentoCard 
                src="videos/feature-1.mp4"
                title={<><b>D</b>ope<b>e</b>min St<b>u</b>d<b>i</b>o</>}
                description="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae!"
                />
            </BentoTilt>

            <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                    <BentoCard
                    src="videos/feature-2.mp4"
                    title={<><b>W</b>at<b>c</b>h <b>O</b>ut!</>}
                    />
                </BentoTilt>
                <BentoTilt className="bento-tilt_1 row-span-1 ms-14 md:col-span-1 md:ms-0">
                    <BentoCard
                    src="videos/feature-3.mp4"
                    title={<><b>D</b>ope<b>e</b>min <b>P</b>r<b>o</b>ductio<b>n</b></>}
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, dolores."
                    />
                </BentoTilt>
                <BentoTilt className="bento-tilt_1 row-span-1 me-14 md:col-span-1 md:me-0">
                    <BentoCard
                    src="videos/feature-4.mp4"
                    title={<><b>D</b>ope<b>e</b>.T<b>v</b></>}
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, error?"
                    />
                </BentoTilt>
                <BentoTilt className="bento-tilt_2">
                    <div className="flex size-full flex-col justify-between bg-blue-200 bento-title special-font p-5">
                        <hi>
                            Something <b>Big</b> Is Co<b>m</b>ing your way!
                        </hi>
                        <TiLocationArrow className="m-5 scale-[5] self-end"/>
                    </div>
                </BentoTilt>

                <BentoTilt className="bento-tilt_2">
                    <video
                    src="videos/feature-5.mp4"
                    loop
                    muted
                    autoPlay
                    className="size-full object-cover object-center"
                    />
                </BentoTilt>
            </div>
            
        </div>
    </section>
  )
}

export default Features