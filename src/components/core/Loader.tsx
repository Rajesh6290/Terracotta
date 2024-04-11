
import { LOADER } from "@/animation";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

interface Props {
    image?: any;
    animeHight?: number;
    animeWidth?: number;
}
const Loader = ({ image, animeHight = 150, animeWidth = 150 }: Props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: image ? image : LOADER,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className="h-screen w-full flex  justify-center items-center">
            <Lottie
                options={defaultOptions}
                isPaused={false}
                isClickToPauseDisabled={true}
                height={animeHight}
                width={animeWidth}
            />
        </div>
    );
};

export default Loader;
