import React, { useState } from 'react'
import Counter from './components/Counter'
import Form from './components/Form'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {

  const [num, setNum] = useState(0);
  
  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
  
  const [submittedName, setSubmittedName] = useState("")


  const increment = () => {
    setNum(prev => prev + 1);
  }

  const reset = () => {
    setNum(0);
  }

  const decrement = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  }

  const handleChange = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault()
    if (!inputs.name || !inputs.email || !inputs.message) {
      alert('Please fill all fields');
      return;
    }
    setSubmittedName(
      inputs.name
    )
    setInputs({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <div className='app'>
      <Navbar />
      <div className='hero'>
        <Counter nums={num} inc={increment} r={reset} dec={decrement} />
        <Form name={inputs.name} email={inputs.email} message={inputs.message} onchange={handleChange} submittedName={submittedName} submit={submit} />
      </div>
      <Footer />
    </div>
  )
}

export default App
