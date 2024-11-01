import { Form, Formik, FormikHelpers, FormikProps } from 'formik'
import * as Yup from 'yup'
import axios from '../../helpers/axios'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../../types/user'
import Input from './input'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('invalid email format')
    .required('email is required'),
  password: Yup.string()
    .min(3, 'password must be 3 characters at minimum')
    .required('password is required')
})

export default function Login() {
  const navigate = useNavigate()
  const initialValue: IUser = { id: '', username:'', email: '', password: '' }

  const checkAccount = async (user: IUser, action:FormikHelpers<IUser>) => {
    try {
      const { data } = await axios.get(`/users?email=${user.email}&password=${user.password}`)
      if (data.length === 0) {
        action.setFieldError('email', 'Account was not found, check your email and password')
        throw 'Account was not found, check your email and password'
      }
      localStorage.setItem('userId', data[0].id)
      navigate('/home')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='content-center'>
      <div className='w-96 py-6 px-5 mx-auto'>
        <h1 className="text-3xl font-bold text-white">Login</h1>
        <Formik
          initialValues={initialValue}
          validationSchema={LoginSchema}
          onSubmit={(values, action) => {
            checkAccount(values, action)
          }}
        >
          {(props: FormikProps<IUser>) => {
            return (
              <Form className='flex flex-col gap-4 mt-6'>
                <Input type={'text'} name={'email'} placeholder={'Email'} {...props} />
                <Input type={'password'} name={'password'} placeholder={'Password'} {...props} />
                <button type='submit' className='py-4 rounded-3xl font-semibold border-2 bg-white text-black'>
                  Berikutnya
                </button>
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}