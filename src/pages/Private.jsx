import { TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Private() {
	const navigate = useNavigate()
	const [data, setData] = useState('Submit')
	const handleSubmit = async (e) => {
		e.preventDefault()
		let income = document.getElementById('income').value
		if (income > 800000) {
			navigate(`/private_creamy`)
		}
		if (income == '') {
			setData('Enter the money in rupee')
		} else {
			// Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837.
			navigate(`/private_non_creamy`)
		}
	}

	return (
		<div>
			<h1>Parent belong in Private Sector</h1>
			<br />
			<h2>
				Hint: You belong to creamy layer if annual income of your parent
				for <u>three consecutive years</u> is more than <u>₹800000</u>{' '}
				while
				<u> not including salary</u> and <u>income from agriculture</u>
				<br />
				<br />
				Enter the annual income of your parents for three consecutive
				years while not including salary and income from agriculture in
				rupees.
				<br />
			</h2>
			<form action="" onSubmit={handleSubmit}>
				<div>
					<br />
					<TextField
						id="income"
						type="number"
						label="Parent income"
						variant="outlined"
						color="secondary"
						focused
					/>
				</div>
				<br />
				<Button variant="contained" type="submit">
					Submit
				</Button>
			</form>
			<br />
			{data}
			<br />
			<br />
			<Link to="/">Go to home</Link>
			<br />
			<br />
		</div>
	)
}
