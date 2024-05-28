import { Link } from 'react-router-dom'
export default function Private_Creamy() {
	return (
		<div>
			<h1>You belong to creamy layer</h1>
			<h2>
				{/* Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837. */}
				You have no age relaxation.
				<br />
				Hint: You belong to creamy layer if annual income of your parent
				for <u>three consecutive years</u> is more than <u>₹800000</u>{' '}
				while
				<u> not including salary</u> and <u>income from agriculture</u>
			</h2>
			<Link to="/">Go to home</Link>
			<br />
			<br />
		</div>
	)
}
