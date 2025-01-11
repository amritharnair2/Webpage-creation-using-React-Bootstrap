import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaTrophy } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa";

function Achievements() {
    return (
        <div className='container'>
            <h2 className="text-center my-4">Achievements</h2>
            <div className="row">
                <div className="col-md-4">
                <Card className='cards'>
                <Card.Body className='text-center'>
                    <Card.Title><FaTrophy className='achieveImg text-warning' /></Card.Title>
                    <Card.Title>5 Ballon d'Or</Card.Title>
                    <Card.Text>
                        Awarded for his outstanding football career.
                    </Card.Text>
                </Card.Body>
            </Card>
                </div>

                <div className="col-md-4">
                <Card className='cards'>
                <Card.Body className='text-center'>
                    <Card.Title><FaStar className='achieveImg text-primary' /></Card.Title>
                    <Card.Title>UEFA Champions League</Card.Title>
                    <Card.Text>
                        Won 5 UEFA Champions League titles.
                    </Card.Text>
                </Card.Body>
            </Card>
                </div>

                <div className="col-md-4">
                <Card className='cards'>
                <Card.Body className='text-center'>
                    <Card.Title><FaCrown className='achieveImg text-success' /></Card.Title>
                    <Card.Title>European Champion</Card.Title>
                    <Card.Text>
                        Led Portugal to victory in Euro 2016.
                    </Card.Text>
                </Card.Body>
            </Card>
                </div>

                

                
            </div>
        </div>
    )
}

export default Achievements