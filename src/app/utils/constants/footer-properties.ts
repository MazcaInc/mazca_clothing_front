import IFooter from "@interfaces/constants/IFooter.ts";
import { toast } from "react-hot-toast";

export const footerProperties: IFooter[] = [
    {
        title: "e-mail",
        action: () => {
            toast.dismiss();
            void toast.promise(
                navigator.clipboard.writeText("mazca.contact@gmail.com"),
                {
                    loading: "Copiando texto para a área de transferência...",
                    success: "Texto copiado para a área de transferência!",
                    error: (error: Error) => error.message
                },
                {
                    style: {
                        backgroundColor: "transparent",
                        color: "white"
                    }
                }
            );
        }
    },
    {
        title: "faq",
        navigate: "/faq"
    },
    {
        title: "Instagram",
        action: () =>
            window.open(
                "https://www.instagram.com/MazcaSafada",
                "_blank",
                "noopener,noreferrer"
            )
    }
];
