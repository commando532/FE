import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const warn = (values) => {
  const warning = {};
  if (values.service.length < 5) {
    warning.service = 'Service name is too short...';
  }
  if (values.description.length < 50) {
    warning.description = 'Description must be greater than 50 character...';
  }
  return warning;
};

const validate = (values) => {
  const errors = {};
  if (!values.service) {
    errors.service = 'Service name is required';
  } else if (values.service.length > 25) {
    errors.service = 'Must be max 25 character';
  }
  if (!values.description) {
    errors.description = 'Description service is required';
  } else if (values.description.length > 300) {
    errors.description = 'Description service must be less than 300 character';
  }
  return errors;
};

const ServiceForm = (props) => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="serviceLabel">Service Type:</label>
        <div>
          <Field
            name="service"
            component={renderField}
            type="text"
            placeholder="Service Name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="descriptionLabel">Description:</label>
        <div>
          <Field
            name="description"
            component={renderField}
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Cancel
        </button>
      </div>
    </form>
  );
};

ServiceForm.propsType

export default reduxForm({
  form: 'serviceform',
  validate,
  warn,
})(ServiceForm);
