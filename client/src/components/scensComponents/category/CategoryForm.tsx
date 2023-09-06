import React from 'react'
import { Grid } from '@mui/material'
import { Form, useForm } from '../../useForm'
import Button from '../../Button'
import Controls from '../../Controls'
import { useMutation } from '@apollo/client'
import {  categoryInterface, } from '../../../interface/interfaces'
import { CATEGORY_QUERY, CREATE_CATEGORY } from '../../../graphql/Category'

export const CheckupForm = () => {
  const [createProfile] = useMutation(CREATE_CATEGORY, {
    refetchQueries: [{ query:CATEGORY_QUERY }],
  })
  const initialFValues: categoryInterface = {
    name: '',
  };
  const validate = (fieldValues: categoryInterface = values): boolean => {
    let temp:categoryInterface = { ...errors };
  
    if ('name' in fieldValues) temp.name = fieldValues.name ? '' : 'This field is required.';

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



