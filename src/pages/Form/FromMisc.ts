import { object, string } from 'yup'

export const initialValues = {
  accountInfo: {
    login: '',
    email: '',
    password: '',
  },
  personalInfo: {
    name: '',
    surname: '',
    country: '',
    city: '',
  },
  contactInfo: {
    phone: '',
    website: '',
  },
}

export const formValuesValidator = object({
  login: string().required(),
  email: string().email().required(),
  password: string().required(),
})
