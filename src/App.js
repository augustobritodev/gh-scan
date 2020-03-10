import React, { useState, useEffect } from "react";
import "./App.css";
import { Form, Card, Image, Icon } from "semantic-ui-react";

function App() {
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);

  return (
    <div>
      <div className="navbar">Github Search</div>
      <div className="search">
        <Form>
          <Form.Group>
            <Form.Input placeHolder="Github user" name="github user" />
            <Form.Button content="Search" />
          </Form.Group>
        </Form>
      </div>
      <div className="card">
        <Card>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/matthew"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Augusto Brito</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>Software Developer</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}

export default App;
