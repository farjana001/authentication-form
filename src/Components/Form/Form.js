import React from 'react';
import FormTemplate from './FormTemplate';
import PageHeader from '../PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    pageContent: {
        margin: theme.spacing(4),
        padding: theme.spacing(3)
    }
}))

const Form = () => {
    const classes = useStyles();
    return (
        <>
            <PageHeader
                    title="Page title"
                    subtitle="Page description"
                    icon={<PeopleOutlineIcon fontSize="large" />} />
            <Paper className={classes.pageContent}> <FormTemplate /></Paper>
        </>
    );
};

export default Form;