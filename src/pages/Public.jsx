import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
export default function Public() {
	const [selectedValue, setSelectedValue] = useState()
	const handleChange = (event) => {
		setSelectedValue(event.target.value)
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
			navigate(`/public_creamy`)
			// Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837.
		} else if (selectedValue == 'option2') {
			navigate(`/public_non_creamy`)
		} else {
			setData('Select the answer from given choices')
		}
	}
	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<div>
					<div className="heading">
						Does your parent working in Public Sector Undertakings
						and have any one of the following benefits?
					</div>
					<h2>
						<div className="container">
							<div className="group">
								<div className="text-container">
									Parent currently working in Government
									Sector as
									<Box>
										<FormControl>
											<InputLabel id="demo-simple-select-label">
												Parent currently working in
												Government Sector as
											</InputLabel>
											<Select
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												value={selectedValue}
												label=""
												onChange={handleChange}
											>
												<MenuItem value={'option1'}>
													Managerial Level Post
												</MenuItem>
												<MenuItem value={'option2'}>
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
				<Button variant="contained" type="submit">
					Submit
				</Button>
				<br />
				{data}
			</form>
			<Link to="/">Go to home</Link>
			<br />
			<br />
		</div>
	)
}
