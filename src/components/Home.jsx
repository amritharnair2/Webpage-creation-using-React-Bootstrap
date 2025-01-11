import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <div id="homepage" className='text-white'>
            <h1 id='name'>Cristiano Ronaldo</h1>
            <p className='fs-5'>Football Legend | Record-Breaker | Global Icon</p>
            <Button variant="primary" className='mt-3'>Learn More</Button>
        </div>
    )
}

export default Home