import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Private() {
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		let income = document.getElementById('income').value
		if (income > 800000) {
			navigate(`/private_creamy`)
		} else {
			// Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837.
			navigate(`/private_non_creamy`)
		}
	}

	return (
		<div>
			<h1>Parent belong in Private Sector</h1>
			<br />
			<h2></h2>
			Enter the annual income of your parents for three consecutive years
			while not including salary and income from agriculture in rupees.
			<br />
			<form action="" onSubmit={handleSubmit}>
				<div>
					<br />
					<TextField
						id="income"
						type="number"
						label="Parent income"
						variant="outlined"
					/>
				</div>
				<br />
				<button type="submit">Submit</button>
			</form>
			<br />
			<Link to="/">Go to home</Link>
		</div>
	)
}
