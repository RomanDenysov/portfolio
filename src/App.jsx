import Header from "@common/components/Header"
import AboutPage from "@about/components/AboutPage"
import ContactPage from "@contact/components/ContactPage"

import { Routes, Route, Link, Router } from 'react-router-dom'

import { createGlobalStyle, ThemeProvider } from "styled-components"

import { LanguageProvider } from "@language/LanguageProvider"
import WorkPage from "@work/components/WorkPage"



// Глобальні стилі й теми, у змінній theme - одразу сховані й медіа запити
const Global = createGlobalStyle`
  	@import url('https://fonts.googleapis.com/css2?family=Cookie&family=Poppins:wght@100;200;300;400;600;900&display=swap');
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html {
		font-family: 'Poppins', sans-serif;
		scroll-snap-type: y mandatory;
		scroll-behavior: smooth;
		overscroll-behavior: auto;
		overflow-anchor: none;
	}
	body {
		transition: translateZ(0);
	}
`
const theme = {
	colors: {
		primary: '#feffff',
		secondary: '#FFDD00',
		background: '#ff9398',
		elements: '#BAD8E0',
		text: '#0D0D0D'
	},
	media: {
		phone: '(max-width: 425px)',
		tablet: '(max-width: 768px)',
	}
}




function App() {
	return (
		<ThemeProvider theme={theme}>
			<LanguageProvider>
				<Global/>
					
					<Routes>
						<Route path="/" element={<Header/>}>

							<Route index element={<AboutPage/>}/>
							<Route path="/work" element={<WorkPage/>}/>
							<Route path="/contact" element={<ContactPage/>}/>
						
						</Route>
						{/* <Route path="&" element={<ContactPage/>}/> */}
					</Routes>
			</LanguageProvider>
		</ThemeProvider>
	)
}

export default App