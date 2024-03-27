import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'

function App() {
  // let myObject = {
  //   username : "Alka",
  //   age : 24
  // }
  // let newArr = [1, 2, 3, 4]

  return (
   <div>
    {/* <Card/> */}
    {/* <Card/> */}
    {/* <Card channel = 'alka'/> */}
    {/* <Card channel = 'alka' myArr = {name : "chaiax`urcode"}/>//wrong */}
    {/* <Card channel = 'alka' myArr = [1, 2, 3]/>//wrong  */}
    {/* <Card channel = "ALka" someObj = myObject/>//not allowed */}
    {/* <Card channel = "Alka" someObj = { myObject }/> */}
    {/* Can pass object */}
    {/* <Card channel = "Alka" someArr = { newArr }/> */}
    {/* <Card username='Alka'/> */}
    {/* <Card username='Anushka'/> */}
    {/* <Card username='Alka' desText = "carefully"/>  */}
    {/* <Card username='Anushka' desText = "correctly"/> */}
   </div>
  )
}

export default App
