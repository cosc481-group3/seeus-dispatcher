import React from 'react';
import './App.css';
import { Alignment, Button, Intent, Navbar } from '@blueprintjs/core';

function App() {
  return (
      <div className="App">
          <Navbar>
              <Navbar.Group align={Alignment.LEFT}>
                  <Navbar.Heading>SEEUS</Navbar.Heading>
                  <Navbar.Divider/>
                  <Button minimal icon="list" text="Requests"/>
              </Navbar.Group>
              <Navbar.Group align={Alignment.RIGHT}>
                  <Button minimal icon="cog" text="Settings"/>
                  <Button minimal icon="log-out" text="Logout"/>
              </Navbar.Group>
          </Navbar>
          <Button intent={Intent.SUCCESS} icon="plus">New Request</Button>
      </div>
  );
}

export default App;
