import React from 'react';
import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';

const Checkbox = (props) => {
    const {name, value, label, onChange} = props;
    
    return (
        <FormControl>
            <FormControlLabel
                control={<MuiCheckbox
                    name={name}
                    color='primary'
                    checked={value}
                    onChange={onChange}
                     />}
                 label={label}
            ></FormControlLabel>
        </FormControl>
    );
};

export default Checkbox;