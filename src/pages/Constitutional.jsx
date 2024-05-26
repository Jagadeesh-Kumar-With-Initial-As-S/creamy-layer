import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material'
import { useState } from 'react'
export default function Constitutional() {
	const navigate = useNavigate()
	const [data, setData] = useState('Submit')
	const handleSubmit = async (e) => {
		e.preventDefault()
		let number = document.getElementById('constitutional').value
		number = number.toLowerCase().trim()
		if (number == 1) {
			navigate(`/constitutional_creamy`)
		} else if (number == 2) {
			navigate(`/constitutional_creamy`)
		} else if (number == 3) {
			navigate(`/constitutional_creamy`)
		} else if (number == 4) {
			navigate(`/constitutional_creamy`)
		} else if (number == 5) {
			navigate(`/constitutional_non_creamy`)
		} else {
			setData('Enter the the answer from given choices')
		}
	}
	return (
		<div>
			<h1>
				Does your parents working as Constitutional Authorities and have
				following benefits?
			</h1>
			<h2>
				<ol>
					<div className="option">
						<li>President</li>
					</div>
					<br />
					<div className="option">
						<li>Vice President</li>
					</div>
					<br />
					<div className="option">
						<li>Judges</li>
					</div>
					<br />
					<div className="option">
						<li>Governors</li>
					</div>
					<br />
					<div className="option">
						<li>Others</li>
					</div>
				</ol>
			</h2>
			<form onSubmit={handleSubmit}>
				<h2>Enter 1 or 2 or 3 or 4 or 5 and submit to answer</h2>
				<div>
					<br />
					<TextField
						id="constitutional"
						type="Text"
						label="Constitutional"
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
