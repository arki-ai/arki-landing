/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Exo", "system-ui", "sans-serif"],
			},
			colors: {
				arkiblue: {
					900: "#013b6e",
					800: "#024b8c",
					700: "#0281ef",
					600: "#0281ef",
					500: "#339df2",
				},
				arkiorange: {
					900: "#783f04",
					800: "#9c5215",
					700: "#c2693c",
					600: "#e67e45",
					500: "#f8a066",
				},
				arkipurple: {
					900: "#312464",
					800: "#42337d",
					700: "#5640a5",
					600: "#7c5bd9",
					500: "#a78bfa",
				},
				arkigreen: {
					700: "#3d9970",
					600: "#4eba89",
					500: "#90ddbd",
				},
				arkired: {
					700: "#e53e3e",
					600: "#e87979",
					500: "#ffc4c4",
				},
			},
		},
	},
	plugins: [],
};
