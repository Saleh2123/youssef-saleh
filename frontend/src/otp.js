import axios from "axios";
import { useState } from "react";
import { TextField, Button } from '@mui/material'; // Import Mui components
import PasswordChecklist from "react-password-checklist";

export default function Otp() {
  const [form, setForm] = useState({});
  const [valid, setValid] = useState(false);
  const [otp, setOtp] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log(await axios.post("http://localhost:5000/otp", { email: form.email }));
      alert("Check your email");
      setOtp(true);
    } catch (err) {
      alert("Email is not associated with any user");
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    if (valid) {
      await axios.post("http://localhost:5000/checkotp", {
        email: form.email,
        token: form.otp,
        pass: form.password
      });
      alert("Check your email");
    }
  };

  return (
    <div className="formcontainer">
      <form className="login100-form validate-form" onSubmit={(e) => e.preventDefault()}>

        {!otp && (
          <div className="wrap-input100 validate-input" data-validate="Hourly Rate is required">
            <TextField
              className="input100"
              onChange={handleChange}
              id="rate"
              type="email"
              name="email"
              placeholder="Name"
              required
            />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <i className="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>
        )}

        {otp && (
          <div>
            <div className="wrap-input100 validate-input" data-validate="Affiliation (hospital) is required">
              <TextField
                className="input100"
                id="Affiliation"
                type="text"
                name="otp"
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Affiliation (hospital) is required">
              <TextField
                className="input100"
                id="Affiliation"
                type="text"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <PasswordChecklist
              rules={["minLength", "specialChar", "number", "capital"]}
              minLength={5}
              value={form.password ? form.password : "  "}
              onChange={(isValid) => {
                setValid(isValid);
              }}
            />
          </div>
        )}

        {!otp && (
          <Button name="Login" className="login100-form-btn" onClick={handleClick} variant="contained">
            Send
          </Button>
        )}

        {otp && (
          <Button name="Login" className="login100-form-btn" onClick={handleVerify} variant="contained">
            Change
          </Button>
        )}

      </form>
    </div>
  );
}
