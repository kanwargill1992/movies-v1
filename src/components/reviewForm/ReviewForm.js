import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>{labelText}</Form.Label>
        <Form.Control
          ref={revText}
          as='textarea'
          rows={3}
          defaultValue={defaultValue}
        />
      </Form.Group>
      <Button onClick={handleSubmit} variant='outline-info'>
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;