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
					<h1 className="heading">
						Where does your parent belong to?
					</h1>

					<h2>
						<div className="container">
							<div className="group">
								<div className="text-container">
									Parent currently working in
									<Box>
										<FormControl>
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
			</form>
		</>
	)
}
