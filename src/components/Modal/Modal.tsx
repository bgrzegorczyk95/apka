import React from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Form, Formik } from 'formik';
import { CaloriesForm, initialValues } from './initialFormValues';
import './Modal.css';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  handleSubmit: (values: CaloriesForm) => any;
}

const fields: { name: string; label: string; type: string }[] = [
  { name: 'name', label: 'Nazwa produktu', type: 'text' },
  { name: 'calories', label: 'Kalorie', type: 'number' },
  { name: 'fat', label: 'Tłuszcz', type: 'number' },
  { name: 'carbs', label: 'Węglowodany', type: 'number' },
  { name: 'protein', label: 'Białko', type: 'number' },
];

export const FormModal = ({ isOpen, handleClose, handleSubmit }: Props) => {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        className="modal"
      >
        <div className="form-modal">
          <h3>Dodaj nowy produkt do tabeli</h3>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange }) => (
              <Form>
                {fields.map((field) => (
                  <TextField
                    key={field.name}
                    required
                    type={field.type}
                    name={field.name}
                    value={values[field.name]}
                    onChange={handleChange} 
                    id="outlined-basic" 
                    label={field.label}
                    variant="outlined"
                  />
                ))}
                <Button type="submit" color="primary" variant="contained">
                  Zapisz
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </div>
  );
}