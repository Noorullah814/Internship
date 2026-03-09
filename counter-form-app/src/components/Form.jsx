import React from 'react'

const Form = ({onchange, submit, name, email, message,submittedName}) => {
  return (
    <div className='form-container'>
      <h1>Contact Form</h1>
      <form onSubmit={submit}>
        <input type="text"
        placeholder='Enter name' 
        name='name'
        value={name}
        onChange={onchange}
        />
        <input type="email" 
        placeholder='Enter email' 
        name='email'
        value={email}
        onChange={onchange}
        />
        <textarea
        placeholder='type message..'
        name='message'
        value={message}
        onChange={onchange}
        />
        <button type='submit'>Submit</button>
                   {submittedName && (
  <div className="success-message">
   Thank you, <strong>{submittedName}.</strong> Your form has been submitted successfully.
  </div>
)}
      </form>
    
    
    </div>
  )
}

export default Form
