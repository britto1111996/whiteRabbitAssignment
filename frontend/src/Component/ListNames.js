import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ListName.css";
import axios from "axios";

function ListNames() {
  const [usersData, setUsersData] = useState([]);
  console.log(`USERS DATA IS ${JSON.stringify(usersData)}`);
  const getAllUsers = () => {
    axios
      .get("http://localhost:8000/api/users")
      .then((res) => setUsersData(res.data));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <h1>List Names</h1>
      {usersData.map((item, idx) => (
        <ul key={idx}>
          <Row>
            <Col sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://pickaface.net/gallery/avatar/unr_admin_171016_2225_zewhi.png"
                />
                <Card.Body>
                  <Card.Title>
                    {item.firstName} {item.lastName}
                  </Card.Title>
                  <Card.Text>email : {item.email}</Card.Text>
                  <Link to="/profile">
                    <Button variant="primary">More Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </ul>
      ))}
    </div>
  );
}

export default ListNames;
