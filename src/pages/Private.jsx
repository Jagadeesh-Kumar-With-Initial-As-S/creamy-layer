import { TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
export default function Private() {
	const navigate = useNavigate()
	const [data, setData] = useState('Submit')
	const handleSubmit = async (e) => {
		e.preventDefault()
		let income1 = document.getElementById('income1').value
		let income2 = document.getElementById('income2').value
		let income3 = document.getElementById('income3').value
		let totalIncome = income1 + income2 + income3
		if (totalIncome > 8) {
			navigate(`/private_creamy`)
		}
		if (totalIncome == '') {
			setData('Enter the money in lakhs')
		} else {
			// Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837.
			navigate(`/private_non_creamy`)
		}
	}
	document.body.style.overflow = 'visible'

	return (
		<div>
			<div className="heading">Parent belong in Private Sector</div>
			<div className="text-container">
				Enter the annual income of your parents for three consecutive
				years while not including salary and income from agriculture in
				rupee.
			</div>
			<form action="" onSubmit={handleSubmit}>
				<div>
					<TextField
						id="income1"
						type="number"
						label="Parent income in 1st year"
						variant="outlined"
						color="secondary"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									₹
								</InputAdornment>
							)
						}}
						focused
						required
					/>
					<br />
					<br />
					<TextField
						id="income2"
						type="number"
						label="Parent income in 2nd year"
						variant="outlined"
						color="secondary"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									₹
								</InputAdornment>
							)
						}}
						focused
						required
					/>
					<br />
					<br />
					<TextField
						id="income3"
						type="number"
						label="Parent income in 3rd year"
						variant="outlined"
						color="secondary"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									₹
								</InputAdornment>
							)
						}}
						focused
						required
					/>
				</div>
				<br />
				<Button variant="contained" type="submit">
					Submit
				</Button>
			</form>
			{data}
			<br />
			<Link to="/">Go to home</Link>
			<br />
		</div>
	)
}
