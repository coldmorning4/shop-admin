import React from 'react'
import { Button, DialogActions, LinearProgress } from '@material-ui/core';
import { Field, Form, FormikProps } from 'formik';
import { TextField } from 'formik-material-ui';
import { makeStyles } from '@material-ui/core/styles';

import { IFormValues, InnerCategoryFormProps } from '../../../interfaces/category-form';


const InnerForm: React.FC<InnerCategoryFormProps & FormikProps<IFormValues>> = (
  { submitForm, isSubmitting, handleClose }) => {
  const useStyles = makeStyles({
    customBtn: {
      marginTop: "15px",
    },
  });

  const classes = useStyles();

  return (
    <Form>
      <Field
        fullWidth
        component={TextField}
        type="name"
        label="Name"
        name="name"
      />
      <Field
        fullWidth
        multiline
        rowsMax={6}
        component={TextField}
        type="description"
        label="Description"
        name="description"
      />
      {isSubmitting && <LinearProgress />}
      <DialogActions>
        <Button
          onClick={handleClose}
          color="primary"
          variant="contained"
          className={classes.customBtn}
        >
          Cancel
        </Button>
        <Button
          className={classes.customBtn}
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          onClick={submitForm}
        >
          Create
        </Button>
      </DialogActions>
    </Form>
  );
}

export default InnerForm;
