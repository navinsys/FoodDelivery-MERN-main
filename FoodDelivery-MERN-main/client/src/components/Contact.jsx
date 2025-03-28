import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          fullWidth
        />

        <Button type="submit" variant="contained" sx={{ backgroundColor: "red", color: "#fff" }}>
          Send
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
