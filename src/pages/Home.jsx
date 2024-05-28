import React, { useState } from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Home() {
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
		if (selectedValue == 'option1') {
			// Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837.
			navigate(`/government_sector`)
		} else if (selectedValue == 'option2') {
			navigate(`/constitutional_sector`)
		} else if (selectedValue == 'option3') {
			navigate(`/private_sector`)
		} else if (selectedValue == 'option4') {
			navigate(`/public_sector`)
		} else if (selectedValue == 'option5') {
			navigate(`/non_creamy`)
		} else {
			setData('Select the answer from given choices')
		}
	}
	return (
		<>
			<form action="" onSubmit={handleSubmit}>
				<div>
					<h1 style={styles.heading}>
						Where does your parent belong to?
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
										Parent currently working in Government
										Sector
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
										Parent currently working in
										Constitutional Authorities
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
										Parent currently working in Private
										Sector
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
										Parent currently working in Public
										Sector Undertakings
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
										Father and mother are retired or dead
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
				<br />
				<br />
			</form>
		</>
	)
}
