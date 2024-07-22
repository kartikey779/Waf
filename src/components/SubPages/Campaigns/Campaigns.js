import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Campaigns = () => {
    const [country, setCountry] = useState('');
    const [tags] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Submitted:', { country, tags });
    };
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="countrySelect">
                <Form.Label>Select Country</Form.Label>
                <Form.Control
                    as="select"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                    {/* Add more options as needed */}
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="tagsSelect">
                <Form.Label>Select Tags</Form.Label>
                <Form.Control
                    as="select"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                    <option value="" selected>all</option>
                    <option value="USA">Gaming</option>
                    <option value="Canada">dance</option>
                    <option value="UK"></option>
                    {/* Add more options as needed */}
                </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
                Send Campaign
            </Button>
        </Form>

    );
}
export default Campaigns;