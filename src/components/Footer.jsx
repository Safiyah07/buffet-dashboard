import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export const Footer = () => {
	const { theme } = useContext(ThemeContext)

	const footerYear = new Date().getFullYear()
	return (
		<>
			<p
				className={`
        ${theme === 'light' ? 'text-neutral-800' : 'text-white'}
        lg:py-4 max_md:py-6 max_md:text-center text-base font-bold `}
			>
				Copyright &copy; {footerYear} All rights reserved
			</p>
		</>
	)
}

export default Footer
