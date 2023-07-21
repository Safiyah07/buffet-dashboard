import PropTypes from 'prop-types'
import { useState, useEffect, createContext } from 'react'

const ThemeContext = createContext()

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
	// use theme from local storage if available or set light theme
	const [theme, setTheme] = useState(
		localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
	)

	// update state on toggle
	const handleToggle = (e) => {
		if (e.target.checked) {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}

	// set theme state in localstorage on mount & also update localstorage on state change
	useEffect(() => {
		localStorage.setItem('theme', theme)
		const localTheme = localStorage.getItem('theme')
		// add custom data-theme attribute to html tag required to update theme using DaisyUI
		document.querySelector('html').setAttribute('data-theme', localTheme)
	}, [theme])

	return (
		<ThemeContext.Provider
			value={{
				theme,
				handleToggle,
				setTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}

ThemeContext.propTypes = {
	children: PropTypes.any,
}

export default ThemeContext
