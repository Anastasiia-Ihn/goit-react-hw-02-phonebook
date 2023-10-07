import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const builderSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('This field is required'),
  number: Yup.string().min(10, 'Too Short!').required('This field is required'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onAdd }) => {
  const onSubmit = (values, form) => {
    form.resetForm();
    onAdd(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={builderSchema}
    >
      <Form>
        <label>
          Name
          <Field id={nanoid()} name="name" />
          <ErrorMessage name="name" />
        </label>

        <label>
          Number
          <Field type="number" id={nanoid()} name="number" />
          <ErrorMessage name="number" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
