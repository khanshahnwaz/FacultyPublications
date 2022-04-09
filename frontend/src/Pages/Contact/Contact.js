import './Contact.css';
import LeftNav from '../../components/LeftNav/LeftNav';
import TopNav from '../../components/TopNavbar/TopNav';
const Contact=() =>{
    return (
        <div className='body_view'>
        <div className="left_nav">
                <LeftNav />
            </div>
            <div className='flex_col'>
            <div className="top_nav">
                    <TopNav />
                </div>
        <div className='Feedback_container '>

    
            <div className='Feedback'>
            <div className='Feedback_header'>
        <h2>We are here </h2>
        <small>Let's have a talk.</small>
        <hr></hr>
    </div>
        <p className='contact'>Mobile:</p>
         <p className='contact'><a className='contact data ' href='tel:+91 9142277970'>+91: 9142277970</a> </p>
         <p className='contact'><a className='contact data' href='tel:+91 8010011556'>+91: 8010011556</a></p>
         <p className='contact'>Email:</p>
         <p className='contact data'><a className='contact' href='mailto:avengershahnwaz1@gmail.com'>avengershahnwaz1@gmail.com</a></p>

        </div>
        </div>
        </div>
        </div>
    );
};
export default Contact;
