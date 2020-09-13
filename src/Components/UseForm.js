import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const UseForm = (initialFieldValue) => {
    const [values, setValues] = useState(initialFieldValue);
    const [errors, setErrors] = useState({});

    
    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    }
};


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root ': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))


const Form = (props) => {
    const classes = useStyles();
    const {children, ...other} = props;
    return (
       <form className={classes.root} {...other}>
            {props.children}
       </form>
    );
};

export  {UseForm, Form};