import { useEffect } from 'react'
const Translator = () => {
	useEffect(() => {
		var addScript = document.createElement('script')
		addScript.setAttribute(
			'src',
			'//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
		)
		document.body.appendChild(addScript)
		const googleTranslateElementInit = () => {
			new window.google.translate.TranslateElement(
				// Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837.
				{
					pageLanguage: 'en',
					autoDisplay: false
				},
				'google_translate_element'
			)
		}
		window.googleTranslateElementInit = googleTranslateElementInit
	}, [])
	return (
		<>
			<div id="google_translate_element"></div>
		</>
	)
}

export default Translator
