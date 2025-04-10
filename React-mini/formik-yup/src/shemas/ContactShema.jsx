import * as Yup from 'yup'
export const contactformShema =Yup.object().shape({

    name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters')
    .required('Name is required'),

  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),

  phone: Yup.string()
    .matches(
      /^[0-9]{10}$/,
      'Phone number must be exactly 10 digits'
    )
    .required('Phone number is required'),

  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must not exceed 500 characters')
    .required('Message is required'),
});

export default contactformShema;