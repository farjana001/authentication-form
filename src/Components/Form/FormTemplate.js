import React from 'react';
import { Grid } from '@material-ui/core';
import { UseForm, Form } from '../UseForm';
import { Controls } from '../Controls/Controls';
import * as EmployeeService from '../../Services/EmployeeService';




const initialFieldValue = {
    id: '',
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
    loginDate: new Date()
}

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' }
]

const FormTemplate = () => {

    const validate = () => {
        let temp = {}
        temp.fullName = values.fullName ? '' : 'This field is required.'
        temp.email = (/$^|.*@.*..*/).test(values.email)? '' : 'This email is not valid.'
        temp.mobile = values.mobile.length > 9 ? '' : 'Minim 10 numbers required.'
        temp.departmentId = values.departmentId.length !== 0 ? '' : 'Select an option.'
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x === "");
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = UseForm(initialFieldValue);

    const handleSubmit = e => {
        e.preventDefault();
       if(validate())
           window.alert('testing...')
       
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        label='Full Name'
                        name='fullName'
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName} />

                    <Controls.Input
                        variant='outlined'
                        label='Email'
                        name='email'
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email} />

                    <Controls.Input
                        variant='outlined'
                        label='Mobile'
                        name='mobile'
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile} />

                    <Controls.Input
                        variant='outlined'
                        label='City'
                        name='city'
                        value={values.city}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name='gender'
                        label='Gender'
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
                        name='departmentId'
                        label='Department'
                        value={values.department}
                        onChange={handleInputChange}
                        options={EmployeeService.getDepartmentCollection()} />
                    <Controls.DatePicker
                        name='isPermanent'
                        label='Login Date'
                        value={values.loginDate}
                    />
                    <Controls.Checkbox
                        name='isPermanent'
                        label='Accept'
                        onChange={handleInputChange}
                    />
                     <div>
                         <Controls.Buttons
                         type='submit'
                         text='Submit' />
                         <Controls.Buttons
                         type='submit'
                         text='Reset'
                         color='default' />
                     </div>
                </Grid>
            </Grid>
        </Form>
    );
};

export default FormTemplate;