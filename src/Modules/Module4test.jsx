import React from 'react';
import { Container, Typography } from '@mui/material';
import { Row, Col, Card } from 'react-bootstrap';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

const Module4test = () => {
    const [counter, setcounter] = useState(0)
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
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // Add more items as needed
    ];

    const listItemStyles = {
        backgroundColor: '#F0F8FF',
        margin: '8px 0',
        padding: '12px',
        borderRadius: '8px',
        color: '#0d253f',
        listStyleType: 'none',
        fontSize: '16px',
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
                JAVASCRIPT BASIC & DOM
              </Typography>
              <Typography variant="h6" color="#FF8080" mb={2}>
                1. What is React Js?
                </Typography>
              <Typography variant="body1" color="#545B77" fontSize="16" lineHeight="1.6">
              React.js, commonly referred to as React, is an open-source JavaScript library used for building user interfaces or UI components, particularly for single-page applications where user interactions are dynamic and frequent. It was developed and is maintained by Facebook. <br /><br />

Key features of React include:<br /><br />

<strong>1. Component-Based Architecture:</strong> React follows a component-based architecture, allowing developers to break down the UI into reusable, self-contained components. Each component manages its own state and behavior, making it easier to develop and maintain complex UIs.<br /><br />

<strong>2. Virtual DOM:</strong> React uses a virtual DOM (Document Object Model) to improve performance. Instead of updating the actual DOM every time a change occurs, React first updates a virtual representation of the DOM and then compares it with the actual DOM. This allows React to make efficient updates by only modifying the necessary parts of the DOM.<br /><br />

<strong>3. Declarative Syntax:</strong> React uses a declarative syntax, which means developers describe what they want the UI to look like, and React takes care of updating the DOM to match that description. This is in contrast to imperative programming, where developers would specify step-by-step instructions for how to achieve a particular result.<br /><br />

<strong>4. JSX (JavaScript XML):</strong> React uses JSX, a syntax extension that allows developers to write HTML-like code in their JavaScript files. JSX makes it easier to describe UI components and their structure within the JavaScript code.<br /><br />

<strong>5. Unidirectional Data Flow:</strong> React follows a unidirectional data flow, also known as one-way data binding. This means that data flows in a single direction, from parent components to child components. This helps to maintain a clear and predictable data flow in the application.<br /><br />

<strong>6. React Router:</strong> React Router is a library that provides navigation and routing capabilities for React applications. It allows developers to create a navigation structure and handle different views in a single-page application.<br /><br />

React is widely used in the development of web applications and has a large and active community. It can be integrated with other libraries and frameworks, and it is often used in conjunction with tools like Redux for state management in larger applications.
              </Typography>
            </Card.Body>
          </Card>
        </Col>
        {/*  */}
        <Col lg={8}>
          <Card style={{ backgroundColor: '#E3F4F4', borderRadius: 10, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}>
            <Card.Body>
              <Typography variant="h6" color="#FF8080" mb={2}>
                2. What is NPM in React Js? 
              </Typography>
              <Typography variant="body1" color="#545B77" fontSize="16" lineHeight="1.6">
              In the context of React.js and many other JavaScript projects, NPM stands for Node Package Manager. It is a package manager for JavaScript and Node.js applications, used for managing and installing third-party libraries and tools. NPM comes bundled with Node.js, and it plays a crucial role in the development workflow of React applications. <br /><br />

Here are some key points related to NPM in the context of a React.js assignment:<br />

<strong>1. Package Management:</strong> NPM allows you to easily manage and install packages (libraries, tools, and dependencies) needed for your React project. You can specify these dependencies in a `package.json` file, which serves as a manifest for your project.<br /><br />

<strong>2. Installing React:</strong> React is typically installed in a project using NPM. For example, to install the latest version of React, you can run the following command in your project directory:<br /><br />

   <code style={codeStyles}>{`npm install react`}</code>

   This command downloads and installs the React library and adds it to your project's dependencies.<br />

<strong>3. Package.json:</strong> The `package.json` file in your project directory is a key aspect of NPM. It contains metadata about your project and lists its dependencies. It also includes scripts for common tasks, making it easy to manage and share projects with other developers.<br /><br />

<strong>4. Scripts:</strong> NPM allows you to define custom scripts in your `package.json` file. These scripts can be used for various tasks, such as running the development server, building the project, or running tests. For example, you might have scripts like:<br /><br />
<pre style={{ whiteSpace: 'pre-wrap' }}>
   <code style={codeStyles} >{`"scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test"
      }
`}</code>
</pre>

   These scripts can be executed using the `npm run` command.<br /><br />

<strong>5. Dependency Management:</strong> NPM keeps track of project dependencies and their versions. When you install a package, NPM downloads and installs the specified version, and this information is stored in the `package.json` file. This helps ensure that everyone working on the project uses the same versions of dependencies.<br /><br />

In summary, NPM is an essential tool for managing dependencies, scripts, and the overall development workflow in React.js projects. It simplifies the process of installing and updating libraries, making it easier to collaborate on projects and maintain consistency across different development environments.<br /><br />
              </Typography>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={8}>
          <Card style={{ backgroundColor: '#E3F4F4', borderRadius: 10, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}>
            <Card.Body>
              <Typography variant="h6" color="#FF8080" mb={2}>
                3. What is Role of Node Js in react Js? 
              </Typography>
              <Typography variant="body1" color="#545B77" fontSize="16" lineHeight="1.6">
              Node.js plays a crucial role in a React.js application, primarily in the development and build process. Here are some key roles of Node.js in a React.js project: <br /><br />

<strong>1. Server-Side Rendering (SSR):</strong><br />
   - Node.js enables server-side rendering in React applications. With server-side rendering, the initial rendering of the React components occurs on the server rather than the client. This can improve the performance of the application, especially for search engine optimization (SEO) and faster initial page loads.<br /><br />

<strong>2. Development Server:</strong><br />
   - Node.js is often used to run a development server during the development phase. Development servers provide a local environment for developers to test their React applications, allowing for hot-reloading, code changes without manual server restarts, and other development conveniences.<br /><br />

<strong>3. Package Management with npm:</strong><br />
   - Node.js comes with npm (Node Package Manager), which is a package manager for JavaScript. React applications typically rely on numerous third-party packages and libraries, and npm simplifies the process of installing, managing, and updating these dependencies.<br /><br />

<strong>4. Build Tools (Webpack, Babel):</strong><br />
   - Node.js is used in conjunction with build tools like Webpack and Babel to bundle, transpile, and optimize React code. These tools help convert modern JavaScript features and JSX syntax into a format that can be understood by browsers. Node.js, being a JavaScript runtime, is essential for running these build processes.<br /><br />

<strong>5. Middleware for API Requests:</strong><br />
   - In a full-stack application where the React front end communicates with a back-end server, Node.js can be used to create middleware for handling API requests. It can act as a proxy server, forwarding requests to the back end and serving as an intermediary between the front end and back end.<br /><br />

<strong>6. Serverless Functions:</strong><br />
   - Node.js is often used in serverless architectures, where functions are executed in response to events. This can be beneficial for certain React applications, especially when deploying to serverless platforms like AWS Lambda or Azure Functions.<br /><br />

<strong>7. Unified Development Environment:</strong> <br />
   - Node.js provides a unified development environment across the stack. Since both the front end (React) and back end (if using Node.js) can be written in JavaScript, developers can work seamlessly across different layers of the application.<br /><br />

In summary, Node.js is an integral part of the React.js ecosystem, providing the runtime environment, tools, and capabilities needed for efficient development, build processes, and server-side operations.
              </Typography>
            </Card.Body>
          </Card>
        </Col>
                {/* Question 4: What is CLI command In React Js? */}
<Col lg={8}>
    <Card style={{ backgroundColor: '#E3F4F4', borderRadius: 10, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }} >
        <Card.Body>
            <Typography variant="h6" color="#FF8080" mb={2}>
                4. What is the CLI command In React Js?
            </Typography>
            <Typography variant="body1" color="#545B77" fontSize="16" lineHeight="1.6">
                The CLI (Command Line Interface) command for creating a new React.js application is as follows:
                <code style={codeStyles}>{`npx create-react-app my-react-app`}</code>
                This command uses npx to execute the create-react-app tool, which sets up a new React.js project with a default folder structure and configuration.
            </Typography>
        </Card.Body>
    </Card>
</Col>

{/* Question 5: What is Components in React Js? */}
<Col lg={8}>
    <Card style={{ backgroundColor: '#E3F4F4', borderRadius: 10, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }} >
        <Card.Body>
            <Typography variant="h6" color="#FF8080" mb={2}>
                5. What is Components in React Js?
            </Typography>
            <Typography variant="body1" color="#545B77" fontSize="16" lineHeight="1.6">
                Components in React.js are reusable and self-contained units of UI that encapsulate a specific piece of functionality or view. They can be functions or classes that return React elements representing a part of the user interface. Components enable a modular and structured approach to building applications, making it easier to manage and maintain code.
            </Typography>
        </Card.Body>
    </Card>
</Col>

{/* Question 6: What is Header and Content Components in React Js? */}
<Col lg={8}>
    <Card style={{ backgroundColor: '#E3F4F4', borderRadius: 10, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }} >
        <Card.Body>
            <Typography variant="h6" color="#FF8080" mb={2}>
                6. What are Header and Content Components in React Js?
            </Typography>
            <Typography variant="body1" color="#545B77" fontSize="16" lineHeight="1.6">
                In a React.js application, Header and Content Components typically refer to two distinct parts of the user interface. The Header Component may contain elements such as navigation menus, logos, or any content displayed at the top of the page. The Content Component, on the other hand, includes the main content or specific sections of the application. Separating these concerns into individual components promotes code organization and maintainability.
            </Typography>
        </Card.Body>
    </Card>
</Col>

{/* Question 7: How to install React Js on Windows, Linux Operating System? How to install NPM and How to check version of NPM? */}
<Col lg={8}>
    <Card style={{ backgroundColor: '#E3F4F4', borderRadius: 10, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }} >
        <Card.Body>
            <Typography variant="h6" color="#FF8080" mb={2}>
                7. How to install React Js on Windows, Linux Operating System? How to install NPM and How to check version of NPM?
            </Typography>
            <Typography variant="body1" color="#545B77" fontSize="16" lineHeight="1.6">
                To install React.js on Windows or Linux, you can use the following command:
                <code style={codeStyles}>{`npx create-react-app my-react-app`}</code>
                This command sets up a new React.js project in a folder named "my-react-app."

                To install NPM, it usually comes bundled with Node.js. You can download and install Node.js from the official website, and NPM will be included.

                To check the version of NPM, use the following command:
                <code style={codeStyles}>{`npm -v`}</code>
                This will display the installed version of NPM in the terminal.

                To check the version of React.js in your project, you can navigate to your project folder and run:
                <code style={codeStyles}>{`npm list react`}</code>
                This will show the installed version of React.js in your project.
            </Typography>
        </Card.Body>
    </Card>
</Col>

{/* Question 8: How to check version of React Js? */}
<Col lg={8}>
    <Card style={{ backgroundColor: '#E3F4F4', borderRadius: 10, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }} >
        <Card.Body>
            <Typography variant="h6" color="#FF8080" mb={2}>
                8. How to check version of React Js?
            </Typography>
            <Typography variant="body1" color="#545B77" fontSize="16" lineHeight="1.6">
                To check the version of React.js in your project, you can navigate to your project folder and run:
                <code style={codeStyles}>{`npm list react`}</code>
                This will show the installed version of React.js in your project.
            </Typography>
        </Card.Body>
    </Card>
</Col>

{/* Question 9: How to change in components of React Js? */}
<Col lg={8}>
    <Card style={{ backgroundColor: '#E3F4F4', borderRadius: 10, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }} >
        <Card.Body>
            <Typography variant="h6" color="#FF8080" mb={2}>
                9. How to change in components of React Js?
            </Typography>
            <Typography variant="body1" color="#545B77" fontSize="16" lineHeight="1.6">
                To make changes in React.js components, follow these steps: <br /> <br />

                1. Open the component file you want to modify in your code editor. <br /> <br />
                2. Locate the part of the code you wish to change. <br /> <br />
                3. Make the necessary modifications to the code. <br /> <br />
                4. Save the file. <br /> <br />

                React will automatically hot-reload the changes, and you can see the updated components in your application.
            </Typography>
        </Card.Body>
    </Card>
</Col>
{/* Question 10: How to Create a List View in React Js? */}
<Col lg={8}>
    <Card style={{ backgroundColor: '#E3F4F4', borderRadius: 10, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }} >
        <Card.Body>
            <Typography variant="h6" color="#FF8080" mb={2}>
                10. How to Create a List View in React Js?
            </Typography>
            <Typography variant="body1" color="#545B77" fontSize="16" lineHeight="1.6">
            In this example, we have an array of items (<strong>items</strong>). We use Array.map to iterate over each item and create a list item (<strong>&lt;li&gt;</strong>) for each. The key for each list item is set to the unique identifier of the item (<strong>item.id</strong>), ensuring a unique key for each rendered element. <br /> <br />

Using <strong>Array.map</strong> is a recommended approach for rendering lists in React, as it provides a concise and declarative way to generate elements without resorting to using a traditional <strong>for</strong> loop. Additionally, providing a unique key for each item helps React efficiently update and manage the virtual DOM.<br /> <br />


            </Typography>
            <ul style={codeStyles}>
                {/* Use Array.map to render each item */}
                {items.map((item) => (
                    // Ensure each item has a unique key (in this case, 'id')
                    <li key={item.id} style={listItemStyles}>
                        <Typography variant="h6" color="#FF8080" align='center'>
                        {item.name}
                        </Typography>
                    </li>
                ))}
            </ul>
            <pre style={{ whiteSpace: 'pre-wrap' }}>
   <code style={codeStyles} >{`
            const items = [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' },
                // Add more items as needed
            ];
        
            const listItemStyles = {
                backgroundColor: '#F0F8FF',
                margin: '8px 0',
                padding: '12px',
                borderRadius: '8px',
                color: '#0d253f',
                listStyleType: 'none',
                fontSize: '16px',
            };


            <ul style={codeStyles}>
                {/* Use Array.map to render each item */}
                {items.map((item) => (
                    // Ensure each item has a unique key (in this case, 'id')
                    <li key={item.id} style={listItemStyles}>
                        <Typography variant="h6" color="#FF8080" align='center'>
                        {item.name}
                        </Typography>
                    </li>
                ))}
            </ul>
`}</code>
</pre>



        </Card.Body>
    </Card>
</Col>
{/* Question 11: Create Increment decrement state change by button click? */}
<Col lg={8}>
    <Card style={{ backgroundColor: '#E3F4F4', borderRadius: 10, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }} >
        <Card.Body>
            <Typography variant="h6" color="#FF8080" mb={2}>
                11. Create Increment decrement state change by button click?
            </Typography>
            <code style={codeStyles}>
                <Typography variant="h3" color="#545B77" fontSize="16" lineHeight="1.6" align='center'>Counter</Typography>
                <Typography variant="h3" color="#545B77" fontSize="16" lineHeight="1.6" align='center'>{counter}</Typography>
                <Stack spacing={2} direction="row" alignItems="center" justifyContent="center" >
                    <Button variant="contained" onClick={()=>{setcounter(counter - 1)}}>Decrement</Button>
                    <Button variant="contained" onClick={()=>{setcounter(0)}}>Reset</Button>
                    <Button variant="contained" onClick={()=>{setcounter(counter + 1)}}>Increment</Button>
                </Stack>
            </code>
            <Typography variant="h2" color="#545B77" fontSize="16" lineHeight="1.6" align='center'>Code</Typography>
            <pre style={{ whiteSpace: 'pre-wrap' }}>
   <code style={codeStyles} >{`
//Imports
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

//useState
const [counter, setcounter] = useState(0);


<Typography variant="h3" color="#545B77" fontSize="16" lineHeight="1.6" align='center'>Counter</Typography>
<Typography variant="h3" color="#545B77" fontSize="16" lineHeight="1.6" align='center'>{counter}</Typography>
<Stack spacing={2} direction="row" alignItems="center" justifyContent="center" >
    <Button variant="contained" onClick={()=>{setcounter(counter - 1)}}>Decrement</Button>
    <Button variant="contained" onClick={()=>{setcounter(0)}}>Reset</Button>
    <Button variant="contained" onClick={()=>{setcounter(counter + 1)}}>Increment</Button>
</Stack>
`}</code>
</pre>
        </Card.Body>
    </Card>
</Col>

            </Row>
        </Container>
    );
};

export default Module4test;
