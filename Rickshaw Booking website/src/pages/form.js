import React, { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

import "../styles/form.css";

function Book() {

  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    pickupLocation: "",
    dropLocation: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  
  const showSnackbar = (message) => {
    setAlertMessage(message);
    setSnackbarOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        showSnackbar(data.message);

        setFormData({
          name: "",
          mobileNumber: "",
          pickupLocation: "",
          dropLocation: "",
        });

      } else {
        console.error("Error:", response.status);
        showSnackbar("An error occurred."); 
      }
    } catch (error) {
      console.error("Error:", error);
      showSnackbar("Network error.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="book-page">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          name="name"
          placeholder=""
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="mobileNumber">Mobile Number</label>
        <input
          name="mobileNumber"
          placeholder=""
          type="text"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="pickupLocation">Pick-up Location</label>
        <input
          name="pickupLocation"
          placeholder=""
          type="text"
          value={formData.pickupLocation}
          onChange={handleChange}
          required
        />

        <label htmlFor="dropLocation">Drop Location</label>
        <input
          name="dropLocation"
          placeholder=""
          type="text"
          value={formData.dropLocation}
          onChange={handleChange}
          required/>

        <button type="submit">Book</button>
      </form>

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={alertMessage.includes("successful") ? "success" : "error"}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Book;