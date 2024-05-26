import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material'
import { useState } from 'react'
export default function Government() {
	const navigate = useNavigate()
	const [data, setData] = useState('Submit')

	const handleSubmit = async (e) => {
		e.preventDefault()

		let number = document.getElementById('government').value
		number = number.toLowerCase().trim()
		if (number == 1) {
			navigate(`/government_creamy`)
		} else if (number == 2) {
			navigate(`/government_creamy`)
		} else if (number == 3) {
			navigate(`/government_creamy`)
		} else if (number == 4) {
			navigate(`/government_creamy`)
		} else if (number == 5) {
			navigate(`/government_non_creamy`)
		} else {
			setData('Enter the the answer from given choices')
		}
	}
	return (
		<div>
			<h1>
				Does your parents working in Government Sector and have
				following benefits?
			</h1>

			<h2>
				<ol>
					<div className="option">
						<li>
							Father <u>AND</u> Mother got Directly recruited to
							Group A/Class 1 Officers before their 40 years of
							age.
						</li>
					</div>
					<br />
					<div className="option">
						<li>
							Father <u>OR</u> Mother got directly recruited to
							Group A/Class 1 Officers before their 40 years of
							age.
						</li>
					</div>
					<br />
					<div className="option">
						<li>
							Father <u>AND</u> Mother got directly recruited to
							Group B/Class 2 Officers before their 40 years of
							age.
						</li>
					</div>
					<br />
					<div className="option">
						<li>
							Father got directly recruited to Group B and got
							promoted to Group A before his 40 years age
						</li>
					</div>
					<br />
					<div className="option">
						<li>Others</li>
					</div>
					<br />
				</ol>
			</h2>
			<form action="" onSubmit={handleSubmit}>
				Enter 1 or 2 or 3 or 4 or 5 and click submit to answer
				<div>
					<br />
					<TextField
						id="government"
						type="number"
						label="Government Sector"
						variant="outlined"
					/>
				</div>
				<br />
				<button type="submit">Submit</button>
			</form>
			<br />
			{data}
			<br />
			<br />
			<Link to="/">Go to home</Link>
		</div>
	)
}
