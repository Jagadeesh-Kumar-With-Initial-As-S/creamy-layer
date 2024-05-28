import React, { useState } from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function Home() {
	const [parent, setParent] = React.useState('')

	const handleChange = (event) => {
		setParent(event.target.value)
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
			flexDirection: 'row',
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
			width: '500px',
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
		if (parent == 'option1') {
			// Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837.
			navigate(`/government_sector`)
		} else if (parent == 'option2') {
			navigate(`/constitutional_sector`)
		} else if (parent == 'option3') {
			navigate(`/private_sector`)
		} else if (parent == 'option4') {
			navigate(`/public_sector`)
		} else if (parent == 'option5') {
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
									<Box sx={{ minWidth: 500 }}>
										<FormControl fullWidth>
											<InputLabel id="demo-simple-select-label">
												Parent currently working in
											</InputLabel>
											<Select
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												value={parent}
												label=""
												onChange={handleChange}
											>
												<MenuItem value={'option1'}>
													Government Sector
												</MenuItem>
												<MenuItem value={'option2'}>
													Constitutional Authorities
												</MenuItem>
												<MenuItem value={'option3'}>
													Private Sector
												</MenuItem>
												<MenuItem value={'option4'}>
													Public Sector Undertakings
												</MenuItem>
												<MenuItem value={'option5'}>
													Others
												</MenuItem>
											</Select>
										</FormControl>
									</Box>
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
