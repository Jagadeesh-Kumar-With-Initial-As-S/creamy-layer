import { useEffect } from 'react'
const Translator = () => {
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
	useEffect(() => {
		var addScript = document.createElement('script')
		addScript.setAttribute(
			'src',
			'//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
		)
		document.body.appendChild(addScript)
		window.googleTranslateElementInit = googleTranslateElementInit
	}, [])
	return (
		<>
			<div id="google_translate_element"></div>
		</>
	)
}

export default Translator
