import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { React, useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
export default function Constitutional() {
	const [selectedValue, setSelectedValue] = useState()
	const handleChange = (event) => {
		setSelectedValue(event.target.value)
	}
	// Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837.
	const navigate = useNavigate()
	const [data, setData] = useState('Submit')
	const handleSubmit = async (e) => {
		e.preventDefault()

		if (selectedValue == 'option1') {
			navigate(`/constitutional_creamy`)
		} else if (selectedValue == 'option2') {
			navigate(`/constitutional_creamy`)
		} else if (selectedValue == 'option3') {
			navigate(`/constitutional_creamy`)
		} else if (selectedValue == 'option4') {
			navigate(`/constitutional_creamy`)
		} else if (selectedValue == 'option5') {
			navigate(`/constitutional_non_creamy`)
		} else {
			setData('Select the answer from given choices')
		}
	}
	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<div>
					<h1 className="heading">
						Does your parents working in Constitutional Authorities
						and have one one of the following benefits?
					</h1>
					<h2>
						<div className="container">
							<div className="group">
								<div className="text-container">
									Parent currently working in Constitutional
									Authorities as
									<Box>
										<FormControl>
											<InputLabel id="demo-simple-select-label">
												Parent currently working in
												Constitutional Authorities as
											</InputLabel>
											<Select
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												value={selectedValue}
												label=""
												onChange={handleChange}
											>
												<MenuItem value={'option1'}>
													President
												</MenuItem>
												<MenuItem value={'option2'}>
													Vice President
												</MenuItem>
												<MenuItem value={'option3'}>
													Judges
												</MenuItem>
												<MenuItem value={'option4'}>
													Governors
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
				{data}
			</form>
			<Link to="/">Go to home</Link>
			<br />
		</div>
	)
}
