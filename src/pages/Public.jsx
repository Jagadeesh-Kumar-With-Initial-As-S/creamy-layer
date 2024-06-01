import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function Public() {
  const [selectedValue, setSelectedValue] = useState();
  const [mother, setMother] = useState();
  const handleChange1 = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChange2 = (event) => {
    setMother(event.target.value);
  };

  const navigate = useNavigate();
  const [data, setData] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedValue == "option1" || mother == "option1") {
      navigate(`/public_creamy`);
      // Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837.
    } else if (selectedValue == "option2" && mother == "option2") {
      navigate(`/public_non_creamy`);
    } else if (selectedValue == "option3" && mother == "option3") {
      navigate(`/private_sector`);
    } else if (selectedValue == "option3" && mother == "option2") {
      navigate(`/FatherPrivate`);
    } else if (selectedValue == "option2" && mother == "option3") {
      navigate(`/MotherPrivate`);
    } else if (selectedValue == "option3" && mother == "option4") {
      navigate(`/FatherPrivate`);
    } else if (selectedValue == "option4" && mother == "option3") {
      navigate(`/MotherPrivate`);
    } else if (selectedValue == "option4" && mother == "option4") {
      navigate(`/public_non_creamy`);
    } else {
      setData("Select the answer from given choices");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <div className="heading">
            Does your parent working in{" "}
            <span className="highlight">Public Sector Undertakings</span> and
            have any one of the following benefits?
          </div>
          <h2>
            <div className="container">
              <div className="group">
                <div className="text-container">
                  Father <span className="highlight">currently working</span> as
                  <Box>
                    <FormControl>
                      <InputLabel id="demo-simple-select-label">
                        Father currently working as
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        className="demo-simple-select"
                        value={selectedValue}
                        label=""
                        onChange={handleChange1}
                      >
                        <MenuItem value={"option1"}>
                          Managerial Level Post
                        </MenuItem>
                        <MenuItem value={"option2"}>
                          Other Public Sector Undertakings
                        </MenuItem>
                        <MenuItem value={"option3"}>Private Sector</MenuItem>
                        <MenuItem value={"option4"}>Others</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div className="text-container">
                  Mother <span className="highlight">currently working</span> as
                  <Box>
                    <FormControl>
                      <InputLabel id="demo-simple-select-label">
                        Father currently working as
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        className="demo-simple-select"
                        value={mother}
                        label=""
                        onChange={handleChange2}
                      >
                        <MenuItem value={"option1"}>
                          Managerial Level Post
                        </MenuItem>
                        <MenuItem value={"option2"}>
                          Other Public Sector Undertakings
                        </MenuItem>
                        <MenuItem value={"option3"}>Private Sector</MenuItem>
                        <MenuItem value={"option4"}>Others</MenuItem>
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
  );
}
