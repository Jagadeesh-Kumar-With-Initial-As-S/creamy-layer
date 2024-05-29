import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
export default function Government() {
	const [selectedValue, setSelectedValue] = useState()
	const handleChange = (event) => {
		setSelectedValue(event.target.value)
	}
	// Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837.

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
					<div className="heading">
						Does your parents working in Government Sector and have
						following benefits?
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
													Father AND Mother got
													<br />
													Directly recruited to Group
													<br />
													A/Class 1 Officers
												</MenuItem>
												<MenuItem value={'option2'}>
													Father OR Mother got
													<br />
													directly recruited to Group
													<br />
													A/Class 1 Officer
												</MenuItem>
												<MenuItem value={'option3'}>
													Father AND Mother got
													<br />
													directly recruited to Group
													<br />
													B/Class 2 Officers
												</MenuItem>
												<MenuItem value={'option4'}>
													Father got directly
													<br />
													recruited to Group B and got
													<br />
													promoted to Group A before
													<br />
													his 40 years of age
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
				<Button variant="contained" type="submit">
					Submit
				</Button>
				<br />
				{data}
				<br />
				<Link to="/">Go to home</Link>
			</form>
		</div>
	)
}
