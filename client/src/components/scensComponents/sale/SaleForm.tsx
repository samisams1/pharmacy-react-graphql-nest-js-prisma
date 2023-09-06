import React from 'react'
import { Grid } from '@mui/material'
import { Form, useForm } from '../../useForm'
import Button from '../../Button'
import Controls from '../../Controls'
import { useMutation } from '@apollo/client'
import { SaleInterface } from '../../../interface/interfaces'
import { CREATE_SALE, SALE_QUERY } from '../../../graphql/Sale'
//import { appointmentInterface } from '../../../interface/interfaces'
//import { APPOITMENT_QUERY, CREATE_APPOINTMENT } from '../../../graphql/Pharmacie'

export const SaleForm = () => {
  const [createProfile] = useMutation(CREATE_SALE, {
    refetchQueries: [{ query: SALE_QUERY }],
  })
  const initialFValues: SaleInterface = {
    id: '',
    name: ''
  };
  const validate = (fieldValues: SaleInterface = values): boolean => {
    let temp:SaleInterface = { ...errors };
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



