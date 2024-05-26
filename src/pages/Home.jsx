import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
export default function Home() {
	const navigate = useNavigate()
	const [data, setData] = useState('Submit')

	const handleSubmit = async (e) => {
		e.preventDefault()
		let number = document.getElementById('parent').value
		number = number.toLowerCase().trim()
		if (number == 1) {
			// Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837.
			navigate(`/government_sector`)
		} else if (number == 2) {
			navigate(`/constitutional_sector`)
		} else if (number == 3) {
			navigate(`/private_sector`)
		} else if (number == 4) {
			navigate(`/public_sector`)
		} else if (number == 5) {
			navigate(`/non_creamy`)
		} else {
			setData('Enter the the answer from given choices')
		}
	}
	return (
		<>
			<h1>Where does your parent belong to?</h1>

			<h2>
				<ol>
					<div className="option">
						<li>Parent currently working in Government Sector</li>
					</div>
					<br />
					<div className="option">
						<li>
							Parent currently working in Constitutional
							Authorities
						</li>
					</div>

					<br />
					<div className="option">
						<li>Parent currently working in Private Sector</li>
					</div>
					<br />

					<div className="option">
						<li>
							Parent currently working in Public Sector
							Undertakings
						</li>
					</div>
					<br />
					<div className="option">
						<li>Father and mother are retired or dead</li>
					</div>
				</ol>
			</h2>
			<form action="" onSubmit={handleSubmit}>
				<h2>Enter 1 or 2 or 3 or 4 or 5 and click submit to answer</h2>
				<div>
					<TextField
						id="parent"
						type="number"
						label="Parent's current work"
						variant="outlined"
					/>
				</div>
				<br />
				<button type="submit">Submit</button>
				<br />
				<br />
				{data}
			</form>
		</>
	)
}
