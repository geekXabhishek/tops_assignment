import React from 'react';
import { Container, Typography } from '@mui/material';
import { Row, Col, Card } from 'react-bootstrap';

const Module4 = () => {
    const codeStyles = {
        fontFamily: 'Courier New, monospace',
        fontSize: '16px',
        lineHeight: 1.6,
        color: '#b8c9e6',
        whiteSpace: 'pre',
        padding: '20px',
        backgroundColor: '#0d253f',
        borderRadius: '5px',
        overflowX: 'auto',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box',
    };


    return (
        <Container
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'auto',
                padding: '16px', // Add padding to the container
                boxSizing: 'border-box',
            }}
        >
            <Row className="justify-content-center">
            <Col lg={8}>
          <Card style={{ backgroundColor: '#E3F4F4', borderRadius: 10, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }} >
            <Card.Body>
              <Typography variant="h2" textAlign="center" color="#9BABB8" mb={2}>
                Module 4
              </Typography>
              <Typography variant="h5" textAlign="center" color="#9BABB8" mb={3}>
              Lists and Hooks
              </Typography>
              <Typography variant="h6" color="#FF8080" mb={2}>
                1. Explain Life cycle in Class Component and functional component with Hooks
                </Typography>
              <Typography variant="body1" color="#545B77" fontSize="16" lineHeight="1.6">
              Let's discuss the lifecycle methods in both Class Components and Functional Components with Hooks in React. <br /><br />

<strong>Class Components:</strong><br /><br />

In class components, there are several lifecycle methods that get called at different stages of a component's existence. The main phases are:<br /><br />

1. <strong>Mounting Phase</strong>
   - <strong>constructor()</strong> This method is called when an instance of the component is being created.
   - <strong>render()</strong> This method returns the JSX to be rendered to the DOM.
   - <strong>componentDidMount()</strong> This method is called after the component is rendered to the DOM.<br /><br />

2. <strong>Updating Phase</strong>
   - <strong>shouldComponentUpdate(nextProps, nextState)</strong> This method is called before rendering when new props or state are being received. It can be used to optimize rendering by preventing unnecessary updates.
   - <strong>render()</strong> This method is called to update the DOM with new props or state.
   - <strong>componentDidUpdate(prevProps, prevState)</strong> This method is called after the component is updated in the DOM. <br /><br />

3. <strong>Unmounting Phase</strong>
   - <strong>componentWillUnmount()</strong> This method is called just before the component is removed from the DOM.<br /><br />

Here's an example of a class component with lifecycle methods:<br /><br />

<pre style={{ whiteSpace: 'pre-wrap' }}>
   <code style={codeStyles} >{`"
   import React, { Component } from 'react';

   class MyComponent extends Component {
     constructor(props) {
       super(props);
       console.log('Constructor called');
       this.state = {
         // initial state
       };
     }
   
     componentDidMount() {
       console.log('Component mounted');
       // Perform actions after component is mounted
     }
   
     componentDidUpdate(prevProps, prevState) {
       console.log('Component updated');
       // Perform actions after component is updated
     }
   
     componentWillUnmount() {
       console.log('Component will unmount');
       // Perform cleanup before component is removed
     }
   
     render() {
       console.log('Render called');
       return (
         <div>
           {/* JSX to render */}
         </div>
       );
     }
   }
   
   export default MyComponent;
   "
`}</code>
</pre>

<strong>Functional Components with Hooks:</strong><br /><br />

With React Hooks, functional components can also have lifecycle-like behavior using the `useEffect` hook. The equivalent lifecycle methods are:<br /><br />

1. <strong>Mounting Phase</strong>
   - <strong>{`useEffect(() => {}, [])`}</strong> This hook is used for actions that should be performed after the component is rendered. The empty dependency array (`[]`) ensures it runs only once, similar to `componentDidMount`.<br /><br />

2. <strong>Updating Phase</strong>
   - <strong>{`useEffect(() => {})`}</strong> This hook is used for actions that should be performed after each render. It's similar to `componentDidUpdate`.<br /><br />

3. <strong>Unmounting Phase</strong>
   - <strong>{`useEffect(() => { return () => {} }, [])`}</strong> This hook is used for cleanup actions before the component is removed. The returned function acts as `componentWillUnmount`.<br /><br />

Here's an example of a functional component with hooks:<br /><br />

<pre style={{ whiteSpace: 'pre-wrap' }}>
   <code style={codeStyles} >{`
   import React, { useEffect, useState } from 'react';

const MyFunctionalComponent = () => {
  const [state, setState] = useState(/* initial state */);

  useEffect(() => {
    console.log('Component mounted');
    // Perform actions after component is mounted

    return () => {
      console.log('Component will unmount');
      // Perform cleanup before component is removed
    };
  }, []); // Empty dependency array means it runs once, like componentDidMount

  useEffect(() => {
    console.log('Component updated');
    // Perform actions after component is updated
  });

  return (
    <div>
      {/* JSX to render */}
    </div>
  );
};

export default MyFunctionalComponent;
"`}</code>
</pre>
             </Typography>
            </Card.Body>
          </Card>
        </Col>

            </Row>
        </Container>
    );
};

export default Module4;
