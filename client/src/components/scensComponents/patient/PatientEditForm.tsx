import React from 'react'
import { Grid } from '@mui/material'
import { Form, useForm } from '../../useForm'
import Button from '../../Button'
import Controls from '../../Controls'
import { PATIENT_QUERY, UPDATE_PATIENT_MUTATION } from '../../../graphql/Patient'
import { useMutation } from '@apollo/client'
import { patientInterface } from '../../../interface/interfaces'

const PatientEditForm = (props:patientInterface) => {
  const [updatePatient] = useMutation(UPDATE_PATIENT_MUTATION, {
    refetchQueries: [{ query: PATIENT_QUERY }],
  })
  const initialFValues: patientInterface = {
    id:props.id,
    firstName: props.firstName,
    lastName:  "samisams",
    dateOfBirth: props.dateOfBirth,
    email:  props.email,
    phoneNumber: props.phoneNumber,
    martialStatus:  props.martialStatus,
    address: props.address,
    country: props.country,
  };
  const validate = (fieldValues: patientInterface = values): boolean => {
    let temp:patientInterface = { ...errors };
    if ('firstName' in fieldValues) temp.firstName = fieldValues.firstName ? '' : 'This field is required.';
    if ('lastName' in fieldValues)  temp.lastName =  fieldValues.lastName ? '' : 'This field is required.';
    if ('dateOfBirth' in fieldValues) temp.dateOfBirth = fieldValues.dateOfBirth ? '' : 'This field is required.';
    if ('email' in fieldValues) temp.email = fieldValues.email ? '' : 'This field is required.';
    if ('phoneNumber' in fieldValues) temp.phoneNumber = fieldValues.phoneNumber ? '' : 'This field is required.';
    if ('martialStatus' in fieldValues) temp.martialStatus = fieldValues.martialStatus ? '' : 'This field is required.';
    if ('address' in fieldValues) temp.address = fieldValues.address ? '' : 'This field is required.';
    if ('country' in fieldValues) temp.country = fieldValues.country ? '' : 'This field is required.';
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
    console.log(values)
    updatePatient({
     variables: values,
     // variables: { ...values },
     //variables: { ...values},
    })
      resetForm();
    }
  };
  return (
     <Form onSubmit={handleSubmit}>
      <Grid container>
      <Grid item xs={12}>
      <Grid item xs={6}>
      <Controls.Input
                name="firstName"
                label="First Name"
                value={values.firstName }
                onChange={handleInputChange}
                error={errors.firstName}
            />
       <Controls.Input
                name="lastName"
                label="Last Name"
                value={values.lastName }
                onChange={handleInputChange}
                error={errors.lastName}
            />
       <Controls.Input
                name="dateOfBirth"
                label="Birth Date"
                value={values.dateOfBirth }
                onChange={handleInputChange}
                error={errors.dateOfBirth}
            />
       <Controls.Input
                name="martialStatus"
                label="Martial status"
               value={values.martialStatus }
                onChange={handleInputChange}
                error={errors.martialStatus}
            />
      </Grid>
      <Grid item xs={6}>
    
       <Controls.Input
                name="phoneNumber"
                label="Phone Number"
                value={values.phoneNumber }
                onChange={handleInputChange}
                error={errors.phoneNumber}
            />
       <Controls.Input
                name="email"
                label="Email"
                value={values.email}
                onChange={handleInputChange}
                error={errors.email}
            />
       <Controls.Input
                name="address"
                label="Address"
                value={values.address }
                onChange={handleInputChange}
                error={errors.address}
            />
       <Controls.Input
                name="country"
                label="Country"
                value={values.country }
                onChange={handleInputChange}
                error={errors.country}
            />
      </Grid>
      <Grid>
      <Button
        type="submit"
        text="Submit" />
         <Button
          text="Reset"
          onClick={resetForm}
          />
      </Grid>
     
       </Grid>
      </Grid>     
      </Form>
  )
}

export default PatientEditForm;