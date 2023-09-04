import { useMutation } from '@apollo/client'
import { Grid } from '@mui/material'
import React from 'react'
import { PATIENT_QUERY } from '../../../graphql/Patient'
import { CREATE_PATIENT_VITALS, PATIENT_VITALS_QUERY } from '../../../graphql/PatientVitals'
import { PatientVitals } from '../../../interface/interfaces'
import Button from '../../Button'
import Controls from '../../Controls'
import { Form, useForm } from '../../useForm'

const PatientVitalsForm = () => {
  const [createProfile] = useMutation(CREATE_PATIENT_VITALS, {
    refetchQueries: [{ query:PATIENT_VITALS_QUERY }],
  })
  const initialFValues: PatientVitals = {
    temperature: '',
    bpDiastolic: '',
    bpSystolic:'',
    notes:'',
    patient:1
  };
  const validate = (fieldValues: PatientVitals = values): boolean => {
    let temp:PatientVitals = { ...errors };
    if ('bpDiastolic' in fieldValues) temp.bpDiastolic = fieldValues.bpDiastolic ? '' : 'This field is required.';
    if ('bpSystolic' in fieldValues)  temp.bpSystolic =  fieldValues.bpSystolic ? '' : 'This field is required.';
    if ('temperature' in fieldValues) temp.temperature = fieldValues.temperature ? '' : 'This field is required.';
    if ('notes' in fieldValues) temp.notes = fieldValues.notes ? '' : 'This field is required.';
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
               name="temperature"
               label="temperature"
               value={values.temperature }
               onChange={handleInputChange}
               error={errors.temperature}
           />
      <Controls.Input
               name="bpDiastolic"
               label="bpDiastolic"
              value={values.bpDiastolic }
               onChange={handleInputChange}
               error={errors.bpDiastolic}
           />
      <Controls.Input
               name="bpSystolic"
               label="bpSystolic"
               value={values.bpSystolic }
               onChange={handleInputChange}
               error={errors.bpSystolic}
           />
     </Grid>
     <Grid item xs={6}>
   
      <Controls.Input
               name="notes"
               label="notes"
               value={values.notes }
               onChange={handleInputChange}
               error={errors.notes}
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

export default PatientVitalsForm
