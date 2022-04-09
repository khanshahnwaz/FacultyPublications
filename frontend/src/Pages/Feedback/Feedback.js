import './Feedback.css';
import Button from '../auth/login/Button';
import LeftNav from '../../components/LeftNav/LeftNav';
import TopNav from '../../components/TopNavbar/TopNav';
const Feedback =() =>{
    return (
        <>
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
        <h2>Feedback Form </h2>
        <h4>We value your Feedback</h4>
        <hr></hr>
    </div>
                <form>
                
                <input type='email' placeholder='Email' className='designation' name='email'></input><br></br>


                <textarea className='designation tex' placeholder='Please express your experience.' name='feedback'></textarea>
                <Button title='Submit'></Button>
                </form>
        </div>
        </div>
        </div>
        </div>
        </>
    );
};
export default Feedback;
