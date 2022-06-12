import HeaderContent from '../components/headerContent/HeaderContent';
import ContactForm from '../components/contactForm/ContactForm';

const Contact = () => {
    return (  
        <div className="contact">
            <HeaderContent text='you can contact with us and telling your feedbacks' title='Contact Us' />
            <ContactForm />
        </div>
    );
}
 
export default Contact;