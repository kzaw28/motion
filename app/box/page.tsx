import FadeInBox from "./components/fade-in-box";
import MovingBox from "./components/moving-box";

export default function BoxPage() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center h-screen">
            <FadeInBox />
            <MovingBox />
        </div>
    )
}