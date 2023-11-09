import React, { useState } from "react";

export default function ChangePasswordPage() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleChangePassword = () => {
    // Perform password change logic here
    console.log("Old Password:", oldPassword);
    console.log("New Password:", newPassword);
    console.log("Confirm New Password:", confirmPassword);
    // You can add your password change logic and API calls here
  };

  return (
    <div>
      <h2>Change Password</h2>
      <div>
        <label>Old Password:</label>
        <input type="password" value={oldPassword} onChange={handleOldPasswordChange} />
      </div>
      <div>
        <label>New Password:</label>
        <input type="password" value={newPassword} onChange={handleNewPasswordChange} />
      </div>
      <div>
        <label>Confirm New Password:</label>
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      </div>
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
}