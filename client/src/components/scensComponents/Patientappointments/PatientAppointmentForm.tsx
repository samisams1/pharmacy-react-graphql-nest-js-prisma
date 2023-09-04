import React from 'react'
import { Grid } from '@mui/material'
import { Form, useForm } from '../../useForm'
import Button from '../../Button'
import Controls from '../../Controls'
import { useMutation } from '@apollo/client'
import { appointmentInterface } from '../../../interface/interfaces'
import { APPOITMENT_QUERY, CREATE_APPOINTMENT } from '../../../graphql/Appointment'

export const PatientAppointmentForm = () => {
  const [createProfile] = useMutation(CREATE_APPOINTMENT, {
    refetchQueries: [{ query: APPOITMENT_QUERY }],
  })
  const initialFValues: appointmentInterface = {
    symptoms: '',
    diagosis:'',
    checkUpDate: '',
    nextvist:'',
    doctor:1,
    patient:1
  };
  const validate = (fieldValues: appointmentInterface = values): boolean => {
    let temp:appointmentInterface = { ...errors };
    if ('symptoms' in fieldValues) temp.symptoms = fieldValues.symptoms ? '' : 'This field is required.';
    if ('diagosis' in fieldValues)  temp.diagosis =  fieldValues.diagosis ? '' : 'This field is required.';
    if ('checkUpDate' in fieldValues) temp.checkUpDate = fieldValues.checkUpDate ? '' : 'This field is required.';
    if ('nextvist' in fieldValues) temp.nextvist = fieldValues.nextvist ? '' : 'This field is required.';
    if ('doctor' in fieldValues) temp.id = fieldValues.doctor ? '' : 'This field is required.';
    if ('patient' in fieldValues) temp.id = fieldValues.patient ? '' : 'This field is required.';

    setErrors({
      ...temp
    });
    //  setMessage('');
    return fieldValues === values ? Object.values(temp).every(x => x === '') : false;
};

  const { values, errors, setErrors, handleInputChange, resetForm }:any = useForm(initialFValues, true, validate);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
    //  saveService(values);
    createProfile({
      variables: values,
    })
      console.log(values);
      resetForm();
    }
  };
  return (
     <Form onSubmit={handleSubmit}>
      <Grid item xs={12}>
      <Grid item xs={6}>
      <Controls.Input
                name="symptoms"
                label="Symptoms"
                value={values.symptoms }
                onChange={handleInputChange}
                error={errors.symptoms}
            />
       <Controls.Input
                name="diagosis"
                label="Diagosis"
               value={values.diagosis }
                onChange={handleInputChange}
                error={errors.diagosis}
            />
       <Controls.Input
                name="checkUpDate"
                label="Checkup Date"
                value={values.checkUpDate }
                onChange={handleInputChange}
                error={errors.checkUpDate}
            />
      </Grid>
      <Grid item xs={6}>
    
       <Controls.Input
                name="nextvist"
                label="Next Vist"
                value={values.nextvist }
                onChange={handleInputChange}
                error={errors.nextvist}
            />
      
      </Grid>
      <Grid>
      <Button
        type="submit"
        text="Submit" />
         <Button
          text="Reset"
         // onClick={resetForm}
          />
      </Grid>
     
       </Grid>
      </Form>
  )
}



