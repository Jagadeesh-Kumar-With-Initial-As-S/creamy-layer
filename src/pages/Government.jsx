import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function Government() {
  const [selectedValue, setSelectedValue] = useState();
  const [father, setFather] = useState();
  const [mother, setMother] = useState();
  const handleChange1 = (event) => {
    setSelectedValue(event.target.value);
    if (selectedValue != "option2") {
      setFather("");
    } else if (selectedValue == "option2") {
      setFather("");
    }
  };
  const handleChange2 = (event) => {
    setMother(event.target.value);
  };
  const handleChange3 = (event) => {
    setFather(event.target.value);
  };
  // Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837.

  const navigate = useNavigate();
  const [data, setData] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837.

    if (selectedValue == "" || mother == "") {
      setData("Select the answer from given choices");
    } else if (selectedValue == "option1" || mother == "option1") {
      navigate(`/government_creamy`);
    } else if (selectedValue == "option2" && mother == "option2") {
      navigate(`/government_creamy`);
    } else if (selectedValue == "option2" && father == "option1") {
      navigate(`/government_creamy`);
    } else if (selectedValue == "option2" && mother == "option3") {
      navigate(`/government_non_creamy`);
    } else if (selectedValue == "option3" && mother == "option3") {
      navigate(`/government_non_creamy`);
    } else if (selectedValue == "option3" && mother == "option2") {
      navigate(`/government_non_creamy`);
    } else if (selectedValue == "option4" && mother == "option4") {
      navigate(`/private_sector`);
    } else if (selectedValue == "option4") {
      navigate(`/PrivateFather`);
    } else if (mother == "option4") {
      navigate(`/PrivateMother`);
    } else if (selectedValue == "option5" && mother == "option5") {
      navigate(`/government_non_creamy`);
    } else {
      setData("Select the answer from given choices");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <div className="heading">
            Does your parents working in{" "}
            <span className="highlight">Government Sector</span> and have
            following benefits?
          </div>
          <h2>
            <div className="container">
              <div className="group">
                <div className="text-container">
                  Father got{" "}
                  <span className="highlight">directly recruited</span> to
                  <Box>
                    <FormControl>
                      <InputLabel className="demo-simple-select-label">
                        Father got directly recruited to
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        className="demo-simple-select"
                        value={selectedValue}
                        label=""
                        onChange={handleChange1}
                        required
                      >
                        <MenuItem value={"option1"}>
                          Group A/Class 1 Officers
                        </MenuItem>
                        <MenuItem value={"option2"}>
                          Group B/Class 2 Officers
                        </MenuItem>
                        <MenuItem value={"option3"}>
                          Other Government Sector
                        </MenuItem>
                        <MenuItem value={"option4"}>Private Sector</MenuItem>
                        <MenuItem value={"option5"}>Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                {selectedValue == "option2" ? (
                  <div className="text-container">
                    Father got <span className="highlight">promoted</span> to
                    <Box>
                      <FormControl>
                        <InputLabel className="demo-simple-select-label">
                          Father got promoted to
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          className="demo-simple-select"
                          value={father}
                          label=""
                          onChange={handleChange3}
                          required
                        >
                          <MenuItem value={"option1"}>
                            Group A/Class 1 before his 40 years of age
                          </MenuItem>
                          <MenuItem value={"option2"}>Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                ) : null}
                <div className="text-container">
                  Mother got{" "}
                  <span className="highlight">directly recruited</span> to
                  <Box>
                    <FormControl>
                      <InputLabel className="demo-simple-select-label">
                        Mother got directly recruited to
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        className="demo-simple-select"
                        value={mother}
                        label=""
                        onChange={handleChange2}
                        required
                      >
                        <MenuItem value={"option1"}>
                          Group A/Class 1 Officers
                        </MenuItem>
                        <MenuItem value={"option2"}>
                          Group B/Class 2 Officer
                        </MenuItem>
                        <MenuItem value={"option3"}>
                          Other Government Sector
                        </MenuItem>
                        <MenuItem value={"option4"}>Private Sector</MenuItem>
                        <MenuItem value={"option5"}>Other</MenuItem>
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
  );
}
