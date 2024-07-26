/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {},
        screens: {
            "2xs": "100px",
            xs: "515px",
            ...defaultTheme.screens
        },
        extend: {
            colors: {}
        }
    },
    plugins: []
};
