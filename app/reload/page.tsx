import { LayoutGroup } from "framer-motion";
import MenuText from "./components/menu-text";

export default function ReloadPage() {
    return (
        
        <div className="flex flex-col items-end gap-2">
            <LayoutGroup>
                <MenuText>Home</MenuText>
                <MenuText>Components</MenuText>
                <MenuText>Contact</MenuText>
            </LayoutGroup>
        </div>
    )
}