import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useState } from 'react'
export default function Government() {
	const [selectedValue, setSelectedValue] = useState()
	const handleRadioChange = (value) => {
		setSelectedValue(value)
	}
	const styles = {
		container: {
			display: 'flex',
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center'
		},
		heading: {
			color: 'green',
			textAlign: 'center'
		},
		radioGroup: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-around',
			marginTop: '20px',
			borderRadius: '8px',
			backgroundColor: 'white',
			padding: '30px',
			boxShadow: '0px 2px 3.84px rgba(0, 0, 0, 0.25)'
		},
		radioButton: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center'
		},
		radioLabel: {
			marginLeft: '8px',
			fontSize: '17px',
			color: '#333'
		}
	}
	const navigate = useNavigate()
	const [data, setData] = useState('Submit')

	const handleSubmit = async (e) => {
		e.preventDefault()
		// Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837.

		if (selectedValue == 'option1') {
			navigate(`/government_creamy`)
		} else if (selectedValue == 'option2') {
			navigate(`/government_creamy`)
		} else if (selectedValue == 'option3') {
			navigate(`/government_creamy`)
		} else if (selectedValue == 'option4') {
			navigate(`/government_creamy`)
		} else if (selectedValue == 'option5') {
			navigate(`/government_non_creamy`)
		} else {
			setData('Select the answer from given choices')
		}
	}
	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<div>
					<h1 style={styles.heading}>
						Does your parents working in Government Sector and have
						following benefits?
					</h1>
					<h2>
						<div style={styles.container}>
							<div style={styles.radioGroup}>
								<div style={styles.radioButton}>
									<input
										type="radio"
										id="option1"
										value="option1"
										checked={selectedValue === 'option1'}
										onChange={() =>
											handleRadioChange('option1')
										}
									/>
									<label
										htmlFor="option1"
										style={styles.radioLabel}
									>
										Father AND Mother got Directly recruited
										to Group A/Class 1 Officers before their
										40 years of age.
									</label>
								</div>
								<div style={styles.radioButton}>
									<input
										type="radio"
										id="option2"
										value="option2"
										checked={selectedValue === 'option2'}
										onChange={() =>
											handleRadioChange('option2')
										}
									/>
									<label
										htmlFor="option2"
										style={styles.radioLabel}
									>
										Father OR Mother got directly recruited
										to Group A/Class 1 Officers before their
										40 years of age.
									</label>
								</div>

								<div style={styles.radioButton}>
									<input
										type="radio"
										id="option3"
										value="option3"
										checked={selectedValue === 'option3'}
										onChange={() =>
											handleRadioChange('option3')
										}
									/>
									<label
										htmlFor="option3"
										style={styles.radioLabel}
									>
										Father AND Mother got directly recruited
										to Group B/Class 2 Officers before their
										40 years of age.
									</label>
								</div>
								<div style={styles.radioButton}>
									<input
										type="radio"
										id="option4"
										value="option4"
										checked={selectedValue === 'option4'}
										onChange={() =>
											handleRadioChange('option4')
										}
									/>
									<label
										htmlFor="option4"
										style={styles.radioLabel}
									>
										Father got directly recruited to Group B
										and got promoted to Group A before his
										40 years age
									</label>
								</div>
								<div style={styles.radioButton}>
									<input
										type="radio"
										id="option5"
										value="option5"
										checked={selectedValue === 'option5'}
										onChange={() =>
											handleRadioChange('option5')
										}
									/>
									<label
										htmlFor="option5"
										style={styles.radioLabel}
									>
										Others
									</label>
								</div>
							</div>
						</div>
					</h2>
				</div>
				<br />
				<Button variant="contained" type="submit">
					Submit
				</Button>
				<br />
				<br />
				{data}
			</form>
			<br />
			<Link to="/">Go to home</Link>
			<br />
			<br />
		</div>
	)
}
