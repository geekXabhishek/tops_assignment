import React from "react";
// import Module3 from "./Modules/Module3";
import Module4 from "./Modules/Module4";
// import Module4test from "./Modules/Module4test";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Module3 from "./Modules/Module3";

function App() {
  return (
    <div>
      {/* <Module3 /> */}
      {/* <Module4test /> */}
      <Module4 />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
        <Route index path="tops/Assignments/React/Module3" element={<> <Module3 /> </>} />
        <Route path="tops/Assignments/React/Module4" element={<> <Module4 /> </>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
