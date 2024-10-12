import { createPortal } from "react-dom";
import ToasterContainer from "@components/general/ToasterContainer.tsx";
import { useThemeDetector } from "@functions/ThemeDetector.ts";
import AppRoutes from "@routes/index";

function App() {
    const isDarkTheme = useThemeDetector();
    return (
        <div>
            <ToasterContainer />
            {createPortal(
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href={isDarkTheme ? "/white_owl.svg" : "/black_owl.svg"}
                />,
                document.getElementById("link-by-user-theme") as
                    | Element
                    | DocumentFragment
            )}
            <AppRoutes />
        </div>
    );
}

export default App;
