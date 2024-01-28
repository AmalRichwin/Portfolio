import svgToDataUri from 'mini-svg-data-uri';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			cursor: {
				"default": "var(--cursorDefault)",
				"pointer": "var(--cursorPointer)",
				"grab": "var(--cursorGrab)",
				"grabbing": "var(--cursorGrabbing)",
				"text": "var(--cursorText)"
			},
			fontFamily: {
				body: ["Jost", "sans-serif"],
				heading: ['PT Mono', "monospace"],
				mono: ["PT Mono", "monospace"],
				sans: ["Jost", "sans-serif"],
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				primary: {
					blue: "rgb(var(--color-primary-blue) / <alpha-value>)",
					green: "rgb(var(--color-primary-green) / <alpha-value>)",
					yellow: "rgb(var(--color-primary-yellow) / <alpha-value>)",
				},
				text: {
					body: "rgb(var(--color-text-body) / <alpha-value>)",
					bold: "rgb(var(--color-text-bold) / <alpha-value>)",
					heading: "rgb(var(--color-text-heading) / <alpha-value>)",
					muted: "rgb(var(--color-text-muted) / <alpha-value>)",
					code: "rgb(var(--color-text-code) / <alpha-value>)",
					link: "rgb(var(--color-text-link) / <alpha-value>)",
					selection: "rgb(var(--color-text-selection) / <alpha-value>)",
					richie: "linear-gradient(215deg,#da77f2 0%,#e599f7  35%,#b197fc 100%)",
				},
				bg: {
					body: "rgb(var(--color-bg-body) / <alpha-value>)",
					code: "rgb(var(--color-bg-code) / <alpha-value>)",
					selection: "rgb(var(--color-bg-selection) / <alpha-value>)",
				},
				border: {
					code: "rgb(var(--color-border-code) / <alpha-value>)",
				},
			},
			typography: () => ({
				DEFAULT: {
					css: {
						a: {
							"text-decoration": "none",
							"background-repeat": "no-repeat",
							"background-size": "100% 1.5px",
							"background-position": "0 100%",
							"background-image":
								"linear-gradient(to right, rgb(var(--color-text-link)/1), rgb(var(--color-text-link)/1))",
							"&:hover": {
								color: "rgb(var(--color-text-link))",
							},
						},
						"h1, h2, h3, h4, h5": {
							color: "rgb(var(--color-text-heading))",
						},
						"code::before": {
							content: "none",
						},
						"code::after": {
							content: "none",
						},
						blockquote: {
							border: "none",
							position: "relative",
							width: "96%",
							margin: "0 auto",
							"font-size": "1.0625em",
							"padding-top": "1.5rem",
							"padding-bottom": "0.5rem",
							"padding-left": "1.5rem",
							"padding-right": "1.5rem",
						},
						"blockquote::before": {
							"font-family": "Arial",
							content: "'“'",
							"font-size": "4em",
							color: "rgb(var(--color-text-bold))",
							position: "absolute",
							left: "-10px",
							top: "-10px",
						},
						"blockquote::after": {
							content: "",
						},
						"blockquote p:first-of-type::before": {
							content: "",
						},
						"blockquote p:last-of-type::after": {
							content: "",
						},
					},
				},
				richie: {
					css: {
						"--tw-prose-body": "rgb(var(--color-text-body))",
						"--tw-prose-headings": "rgb(var(--color-text-heading))",
						"--tw-prose-lead": "rgb(var(--color-text-body))",
						"--tw-prose-links": "rgb(var(--color-text-body))",
						"--tw-prose-bold": "rgb(var(--color-text-bold))",
						"--tw-prose-counters": "rgb(var(--color-text-body))",
						"--tw-prose-bullets": "rgb(var(--color-text-body))",
						"--tw-prose-hr": "rgb(var(--color-text-muted))",
						"--tw-prose-quotes": "rgb(var(--color-text-body))",
						"--tw-prose-quote-borders": "rgb(var(--color-text-muted))",
						"--tw-prose-captions": "rgb(var(--color-primary-heading))",
						"--tw-prose-quote-captions": "rgb(var(--color-primary-heading))",
						"--tw-prose-code": "rgb(var(--color-text-code))",
						"--tw-prose-pre-code": "rgb(var(--color-text-code))",
						"--tw-prose-pre-bg": "rgb(var(--color-bg-code))",
						"--tw-prose-th-borders": "rgb(var(--color-text-muted))",
						"--tw-prose-td-borders": "rgb(var(--color-text-muted))",
					},
				},
			}),
		},
	},
	plugins: [
		function ({ matchUtilities, theme })
		{
			matchUtilities(
				{
					"bg-grid": (value) => ({
						backgroundImage: `url("${ svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${ value }"><path d="M0 .5H31.5V32"/></svg>`
						) }")`,
					}),
					"bg-grid-small": (value) => ({
						backgroundImage: `url("${ svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${ value }"><path d="M0 .5H31.5V32"/></svg>`
						) }")`,
					}),
					"bg-dot": (value) => ({
						backgroundImage: `url("${ svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${ value }" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
						) }")`,
					}),
				},
				{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
			);
		}],
}
