import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
export default function Public() {
	const navigate = useNavigate()
	const [data, setData] = useState('Submit')
	const handleSubmit = async (e) => {
		e.preventDefault()
		let number = document.getElementById('public').value
		if (number == 1) {
			navigate(`/public_creamy`)
		} else if (number == 2) {
			navigate(`/public_non_creamy`)
		} else {
			setData('Enter the the answer from given choices')
		}
	}
	return (
		<div>
			<h1>
				Does your parent working in Public Sector Undertakings and have
				following benefits?
			</h1>
			<h2>
				<ol>
					<div className="option">
						<li>Managerial Level Post</li>
					</div>
					<br />
					<div className="option">
						<li>Others</li>
					</div>
				</ol>
			</h2>
			<br />
			<h2>Enter 1 or 2 and click submit to answer</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<br />
					<TextField
						id="public"
						type="number"
						label="Public Sector Undertakings"
						variant="outlined"
					/>
				</div>
				<br />
				<button type="submit">Submit</button>
				<br />
				<br />
				{data}
			</form>
			<br />
			<Link to="/">Go to home</Link>
		</div>
	)
}
