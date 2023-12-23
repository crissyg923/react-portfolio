import { useState } from 'react';
function Form (){

     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [message, setMessage] = useState('');
     const [errorMessage, setErrorMessage] = useState('');

     const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'name') {
          setName(inputValue);
        } else if (inputType === 'email') {
          setEmail(inputValue);
        } else {
          setMessage(inputValue);
        }
      };
      const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!email || !name || !message) {
          setErrorMessage('Please complete all fields befoe submitting!');
          return;

        }
        alert(`Hello ${name}. Your message has been sent.`);
    
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setEmail('');
        setMessage('');
      };


    return (
        <div className="container h-100 contact-page">
        <div className="contactbox col-12 col-md-8">

        <form onSubmit={handleFormSubmit}>
        <div className="col-12">
         <label htmlFor="inputName" className="form-label">Name</label>
        <input 
            type="text" 
            name="name"
            value={name}
            onChange={handleInputChange}
            className="form-control" 
            id="inputName" 
            placeholder="Enter Name" 
            />
        </div>
        <div className="col-12">
         <label htmlFor="inputEmail" className="form-label">Email Address</label>
        <input 
        type="email" 
        className="form-control"
        value={email}
        onChange={handleInputChange}
        id="inputEmail3" 
        name="email"
        placeholder="Enter email" 
        />
        </div>
        <div className="col-12 ">
        <label htmlFor="exampleFormControlTextarea1">Message</label>
        <textarea 
        className="form-control" 
        id="exampleFormControlTextarea1" 
        value={message}
        name="message"
        onChange={handleInputChange}
        rows="4">

        </textarea>
        </div>
        <div class="flexcenter">
        <button className="resumebutton innerbutton " type="submit">Submit</button>
        </div>
        </form>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        </div>
        </div>
    );
}

export default Form