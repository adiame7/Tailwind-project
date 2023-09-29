import {useState} from 'react' 
import Header from "./components/Header"
import Form from "./components/Form"
import Patients from "./components/Patients"

const App = () => {
  const [patients, setPatients] = useState([])
  return (
    <div className="principal">
      <Header />
      <div className="mt-12 mx-3 flex"> 
        <Form patients={patients} setPatients={setPatients}/>
        <Patients patients={patients} 
        />
      </div>
    </div>
  )
}

export default App;