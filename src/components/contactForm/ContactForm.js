import '../../styles/ContactForm.scss';

const ContactForm = () => {
    return (  
        <div className="contact-form">
            <form>
                <input type="text" placeholder="Full name" />
                <input type="email" placeholder="Email"/>
                <textarea placeholder="Description"></textarea>
                <button>Send</button>
            </form>
        </div>
    );
}
 
export default ContactForm;