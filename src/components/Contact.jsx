import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
    return (
        <div className='contactDetails'>
            <h2 className='text-center mb-4'>Contact</h2>
            <div className='container'>
            <Form>
                <div className='row'>
                    <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Your Name" required />
                    </Form.Group>
                    </div>
                    <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Your Email" required/>
                        </Form.Group>
                    </div>
                </div>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={5} placeholder='Your Message' required/>
                </Form.Group>
                <div className='d-flex justify-content-center align-items-center'>
                    <Button variant="primary" type="submit">
                        Send Message
                    </Button>   
                </div>
                
            </Form>
            </div>
        </div>
    )
}

export default Contact