import React from 'react'

const contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact </h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" reqired placeholder='Abc'/>
          </div>
          <div>
            <label>Email</label>
            <input type="email" reqired placeholder='Abc@xyz.com'/>
          </div>
          <div>
            <label>Message</label>
            <input type="text" reqired placeholder='Tell us about your query...'/>
          </div>
         <button type="Submit">Send</button>
        </form>
      </main>

    </div>
  )
}

export default contact