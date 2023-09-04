import React from 'react'
import { useMutation } from '@apollo/client'
import { Grid } from '@mui/material';
import { USER_QUERY } from '../../../../graphql/Users';
import { CHANGE_PASSWORD } from '../../../../graphql/Profile';
import { Form, useForm } from '../../../useForm';
import Controls from '../../../Controls';
import Button from '../../../Button';
export interface changePass {
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}
const ChangeNewPassword = () => {
  const [createProfile] = useMutation(CHANGE_PASSWORD, {
    refetchQueries: [{ query:USER_QUERY }],
  })
  const initialFValues: changePass = {
    oldPassword: '',
    newPassword:'',
    confirmPassword:''
  };
  const validate = (fieldValues: changePass = values): boolean => {
    let temp:changePass = { ...errors };
    if ('oldPassword' in fieldValues) temp.oldPassword = fieldValues.oldPassword ? '' : 'This field is required.';
    if ('newPassword' in fieldValues)  temp.newPassword =  fieldValues.newPassword ? '' : 'This field is required.';
    if ('confirmPassword' in fieldValues) temp.confirmPassword = fieldValues.confirmPassword ? '' : 'This field is required.';
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
     <Grid container>
     <Grid item xs={12}>
     <Grid item xs={6}>
     <Controls.Input
               name="oldPassword"
               label="oldPassword"
               value={values.oldPassword }
               onChange={handleInputChange}
               error={errors.oldPassword}
           />
      <Controls.Input
               name="newPassword"
               label="newPassword"
              value={values.newPassword }
               onChange={handleInputChange}
               error={errors.newPassword}
           />
      <Controls.Input
               name="confirmPassword"
               label="confirmPassword"
               value={values.confirmPassword }
               onChange={handleInputChange}
               error={errors.confirmPassword}
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
     </Grid>     
     </Form>
 )
}

export default ChangeNewPassword;
