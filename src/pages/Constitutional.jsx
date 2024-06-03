import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { React, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function Constitutional() {
  const [selectedValue, setSelectedValue] = useState();
  const [mother, setMother] = useState();
  const handleChange1 = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChange2 = (event) => {
    setMother(event.target.value);
  };
  // Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837.
  const navigate = useNavigate();
  const [data, setData] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedValue == "option1" || mother == "option1") {
      navigate(`/constitutional_creamy`);
    } else if (selectedValue == "option2" || mother == "option2") {
      navigate(`/constitutional_creamy`);
    } else if (selectedValue == "option3" || mother == "option3") {
      navigate(`/constitutional_creamy`);
    } else if (selectedValue == "option4" || mother == "option4") {
      navigate(`/constitutional_creamy`);
    } else if (selectedValue == "option5" && mother == "option5") {
      navigate(`/constitutional_non_creamy`);
    } else if (selectedValue == "option5" && mother == "option7") {
      navigate(`/constitutional_non_creamy`);
    } else if (selectedValue == "option6" && mother == "option6") {
      navigate(`/private_sector`);
    } else if (selectedValue == "option6" && mother == "option7") {
      navigate(`/PrivateFather`);
    } else if (selectedValue == "option6" && mother == "option5") {
      navigate(`/PrivateFather`);
    } else if (selectedValue == "option5" && mother == "option6") {
      navigate(`/PrivateMother`);
    } else if (selectedValue == "option7" && mother == "option6") {
      navigate(`/PrivateMother`);
    } else if (selectedValue == "option7" && mother == "option5") {
      navigate(`/constitutional_non_creamy`);
    } else if (selectedValue == "option8" && mother == "option8") {
      navigate(`/constitutional_non_creamy`);
    } else {
      setData("Select the answer from given choices");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <h1 className="heading">
            Does your parent currently working in{" "}
            <span className="highlight">constitutional authorities</span> and
            have any one of the following benefits?
          </h1>
          <h2>
            <div className="container">
              <div className="group">
                <div className="text-container">
                  Father <span className="highlight">currently working</span> as
                  <Box>
                    <FormControl>
                      <InputLabel className="demo-simple-select-label">
                        Father currently working as
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        className="demo-simple-select"
                        value={selectedValue}
                        label=""
                        onChange={handleChange1}
                      >
                        <MenuItem value={"option1"}>President</MenuItem>
                        <MenuItem value={"option2"}>Vice President</MenuItem>
                        <MenuItem value={"option3"}>Judges</MenuItem>
                        <MenuItem value={"option4"}>Governors</MenuItem>
                        <MenuItem value={"option5"}>
                          Other Constitutional Authorities
                        </MenuItem>
                        <MenuItem value={"option6"}>Private Sector</MenuItem>
                        <MenuItem value={"option7"}>Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>

                <div className="text-container">
                  Mother <span className="highlight">currently working</span> as
                  <Box>
                    <FormControl>
                      <InputLabel className="demo-simple-select-label">
                        Mother currently working as
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        className="demo-simple-select"
                        value={mother}
                        label=""
                        onChange={handleChange2}
                      >
                        <MenuItem value={"option1"}>President</MenuItem>
                        <MenuItem value={"option2"}>Vice President</MenuItem>
                        <MenuItem value={"option3"}>Judges</MenuItem>
                        <MenuItem value={"option4"}>Governors</MenuItem>
                        <MenuItem value={"option5"}>
                          Other Constitutional Authorities
                        </MenuItem>
                        <MenuItem value={"option6"}>Private Sector</MenuItem>
                        <MenuItem value={"option7"}>Other</MenuItem>
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
  );
}
