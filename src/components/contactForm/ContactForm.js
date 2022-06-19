import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ContactForm.scss';

const ContactForm = () => {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const myUrl = 'http://localhost:8000/feedback';
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        }

        fetch(myUrl, options)
          .then(response => console.log(response.ok))
          .then(
            setTimeout(() => {
                navigate('/', {replace: true});
            }, 600)
          );
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputs(values => ({...values, [name]: value}));
    }

    return (  
        <div className="contact-form">
            <form onSubmit={ handleSubmit }>
                <h3>Enter your feedback</h3>
                <input type="text" name='fullname' placeholder='Full name' onChange={ handleChange } />
                <input type="email" name='postmail' placeholder='Email' onChange={ handleChange } />
                <textarea name='description' placeholder="Description" onChange={ handleChange } ></textarea>
                <button>Send</button>
            </form>
        </div>
    );
}
 
export default ContactForm;