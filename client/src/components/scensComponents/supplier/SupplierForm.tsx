import { useMutation } from '@apollo/client'
import { Grid } from '@mui/material'
import React from 'react'
import { CREATE_SUPPLIER, SUPPLIER_QUERY } from '../../../graphql/Supplier'
import { supplierInterface } from '../../../interface/interfaces'
import Button from '../../Button'
import Controls from '../../Controls'
import { Form, useForm } from '../../useForm'

const SupplierForm = () => {
  const [createProfile] = useMutation(CREATE_SUPPLIER, {
    refetchQueries: [{ query:SUPPLIER_QUERY }],
  })
  const initialFValues: supplierInterface = {
    name: '',
  };
  const validate = (fieldValues: supplierInterface = values): boolean => {
    let temp:supplierInterface = { ...errors };
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

export default SupplierForm
