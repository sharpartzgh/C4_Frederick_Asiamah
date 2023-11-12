
import './App.css'
import Button from './components/Button'

// function App() {
//   let name = "Frederick Asiamah Apenteng";
//   let education = ["Certified Graphic Designer,"," ", "currently studying Frontend Development at Azubi Africa"]
//   let skills = ["Graphic Design, ",
//     "HTML, ",
//     "CSS, ",
//     "JavaScript, ",
//     "React and ","Pencil Portrait Art,"]
//     const pBackground = 'Lead Graphic Designer at Kabnedy Enterprise';
//   return (
//     <>
//       <h1>Hello World</h1>
//       <p>I am thrilled to connect with you as a passionate visual artist and graphic designer <br />merging creativity with Front-end Development to create  <br />captivating digital experiences. I am {name}, <br />a {education}</p>
//       <h2>My Skills</h2>
//       <ul>
//         <li>{skills}</li>
//       </ul>
//       <h2>Professional Background</h2>
//       <p>{pBackground}</p>
//       <button>Submit</button>
//     </>
//   )
// }
function App (){

  return (
    <>
    <Button name='Login'/>
    <hr />
    <Button name='Signin'/>
    </>
  )
}

export default App
