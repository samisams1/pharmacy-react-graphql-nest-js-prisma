import React from 'react'
import { Grid } from '@mui/material'
import { Form, useForm } from '../../useForm'
import Button from '../../Button'
import Controls from '../../Controls'
import { useMutation } from '@apollo/client'
import { appointmentInterface, checkUpInterface } from '../../../interface/interfaces'
import { CHECKUP_QUERY, CREATE_CHECK_UP } from '../../../graphql/Checkup'

export const CheckupForm = () => {
  const [createProfile] = useMutation(CREATE_CHECK_UP, {
    refetchQueries: [{ query: CHECKUP_QUERY }],
  })
  const initialFValues: checkUpInterface = {
    symptoms: '',
    diagosis:'',
    checkUpDate: '',
    nextvist:'',
    doctor: 1,
    patient: 1
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
        <Grid container>
      <Grid item xs={6}>
      <Controls.Input
                name="patient"
                label="Patient Name"
                value={values.patient }
                onChange={handleInputChange}
                error={errors.patient}
            />
       <Controls.Input
                name="doctor"
                label="Doctor Name"
               value={values.doctor }
                onChange={handleInputChange}
                error={errors.doctor}
            />
       <Controls.Input
                name="symptoms"
                label="Symptoms"
                value={values.symptoms }
                onChange={handleInputChange}
                error={errors.symptoms}
            />
      </Grid>
      <Grid item xs={6}>
    
       <Controls.Input
                name="diagosis"
                label="Diagosis"
                value={values.diagosis }
                onChange={handleInputChange}
                error={errors.diagosis}
            />
        <Controls.Input
                name="checkUpDate"
                label="Chcek Up Date"
                value={values.checkUpDate }
                onChange={handleInputChange}
                error={errors.checkUpDate}
            />
      <Controls.Input
                name="nextvist"
                label="nextvist"
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



