import React from 'react'
import { Grid } from '@mui/material'
import { Form, useForm } from '../../useForm';
import Controls from '../../Controls';
import { userInterface } from '../../../interface/interfaces';
import { useMutation } from '@apollo/client';
import Button from '../../Button';
import { CREATE_USER, USER_QUERY } from '../../../graphql/Users';

interface Props {
	roleId: number
}

export const UserForm = ({roleId}:Props) => {
  const [createProfile] = useMutation(CREATE_USER, {
    refetchQueries: [{ query: USER_QUERY }],
  })
  const initialFValues: userInterface = {
    firstName: '',
    lastName:'',
    email: '',
    username:'',
    role:"  CUSTOMER",
  };
  const validate = (fieldValues: userInterface = values): boolean => {
    let temp:userInterface = { ...errors };
    if ('firstName' in fieldValues) temp.firstName = fieldValues.firstName ? '' : 'This field is required.';
    if ('lastName' in fieldValues)  temp.lastName =  fieldValues.lastName ? '' : 'This field is required.';
    if ('email' in fieldValues) temp.email = fieldValues.email ? '' : 'This field is required.';
    
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
                name="firstName"
                label="FirstName"
                value={values.firstName }
                onChange={handleInputChange}
                error={errors.firstName}
            />
       <Controls.Input
                name="lastName"
                label="LastName"
               value={values.lastName }
                onChange={handleInputChange}
                error={errors.lastName}
            />
       <Controls.Input
                name="email"
                label="Email"
                value={values.email }
                onChange={handleInputChange}
                error={errors.email}
            />
            </Grid>
            <Grid item xs={6}>
     <Controls.Input
                name="phoneNumber"
                label="PhoneNumber"
                value={values.phoneNumber }
                onChange={handleInputChange}
                error={errors.phoneNumber}
            />
       <Controls.Input
                name="password"
                label="Password"
                value={values.password }
                onChange={handleInputChange}
                error={errors.password}
            />
        <Controls.Input
                name="confirmpassword"
                label="Confirm Password"
                value={values.password }
                onChange={handleInputChange}
                error={errors.password}
            />
      <Grid>
      <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            //onClick={resetForm}
                             />
                    </div>
      </Grid>
     
       </Grid>
      </Grid>     
      </Form>
  )
}



