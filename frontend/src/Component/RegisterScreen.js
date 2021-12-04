import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterScreen() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experiance, setExperiance] = useState("");
  const [achievements, setAchievements] = useState("");

  const register = () => {
    if (
      !firstName ||
      !lastName ||
      !introduction ||
      !email ||
      !phone ||
      !experiance ||
      !achievements
    ) {
      alert("please fill all the fields");
    } else if (!validateEmail(email)) {
      alert("please enter a valid email");
    } else {
      navigate("/userList");
      axios.post("http://localhost:8000/api/users", {
        firstName: firstName,
        lastName: lastName,
        introduction: introduction,
        email: email,
        phone: phone,
        experiance: experiance,
        achievements: achievements,
      });
    }
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  return (
    <div>
      <h1>Register</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            size="lg"
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="First Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            size="lg"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Last Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            size="lg"
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Introduction</Form.Label>
          <Form.Control
            onChange={(e) => setIntroduction(e.target.value)}
            size="lg"
            type="text"
            placeholder="Introduction"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            onChange={(e) => setPhone(e.target.value)}
            size="lg"
            type="text"
            placeholder="Phone Number"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Experiance</Form.Label>
          <Form.Control
            onChange={(e) => setExperiance(e.target.value)}
            size="lg"
            type="text"
            placeholder="Experiance"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Achievements</Form.Label>
          <Form.Control
            onChange={(e) => setAchievements(e.target.value)}
            size="lg"
            type="text"
            placeholder="Achievements"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button onClick={() => register()} variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default RegisterScreen;
