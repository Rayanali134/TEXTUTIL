import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [alerts, alertState] = useState(null);

  const showAlert = (type, message) => {
    alertState({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      alertState(null);
    }, 10000);
  };

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("success", "Dark mode enabled");
      document.title = "Textutils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light mode enabled");
      document.title = "Textutils - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="RAYANA ALI" abouttext="ABOUT ME" mode={mode} togglemode={toggleMode} />
        <Alert alert={alerts} />

        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={<TextForm showalert={showAlert} heading="Enter the text and you analyze" mode={mode} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;




// import React, { useState } from 'react';
// import './App.css';
// import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';
// import About from './Components/About';
// import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';


// function App() {

//   const[alerts, alertState]=useState(null);

//   const showAlert=(type,message)=>{
//    alertState({
//      type:type,
//       msg: message,
//     })
//     setTimeout(() => {
//       alertState(null);
//     }, 10000);
//   }   

//   const [mode, setMode] = useState("light");

//   const toggleMode = () => {
//     if (mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "#042743";
//       showAlert("success", "Dark mode enabled");
//       document.title = "Textutils - Dark Mode";
//       // setInterval(() => {
//     //   document.style="Textutils install now";
//     // }, 2000);
//     // }
//     } else {
//       setMode("light");
//       document.body.style.backgroundColor = "white";
//       showAlert("success", "Light mode enabled");
//       document.title = "Textutils - Light Mode";
//     // setInterval(() => {
//     //   document.style="Textutils update now";
//     // }, 4000);
//     // }
// }
 
// // const [color, changeColor] = useState("light");

// // const toggleColor = () => {
// //   if (color === "light") {
// //     changeColor("dark");
// //    document.body.style.backgroundColor='#A09BE7';
// //    showAlert("success","blue mode has been enabled")
// //   } else {
// //     changeColor("light");
// //     document.body.style.backgroundColor='seagreen';
// //     showAlert("success","seagreeen mode has been enabled")

// //   }
// // };

//   return (
//     <>
//       <Router>

//       <Navbar title="RAYANA ALI" abouttext="ABOUT ME" mode={mode}  togglemode={toggleMode} />

//       <Alert alert={alerts}/>
//       {/* <Navbar /> */}

   
//     {/* <About /> */}
//           <div className="container my-3">
//           <Routes>
//             <Route
//              exact path="/"
//           element={<TextForm showalert={showAlert} heading="Enter the text and you analyze" mode={mode} />
//               }
//             />
//             <Route exact path="/about" element={<About />} />
//           </Routes>
//         </div>
//       </Router>
//     </>
//   );
// }

//   export default App;
