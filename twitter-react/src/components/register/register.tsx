import { Form, Formik, FormikProps } from 'formik'
import * as Yup from 'yup'
import axios from '../../helpers/axios'
import { useNavigate } from 'react-router-dom'
import { FormValue } from '../../types/user'
import Swal from 'sweetalert2'
import Input from './input'

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required('username is required'),
  email: Yup.string()
    .email('invalid email format')
    .required('email is required'),
  password: Yup.string()
    .min(3, 'password must be 3 characters at minimum')
    .required('password is required')
})

export default function Register() {
  const navigate = useNavigate()
  const initialValue: FormValue = { username: '', email: '', password: '' }

  const handleAdd = async (user: FormValue) => {
    try {
      const { data } = await axios.post('/users', user)
      localStorage.setItem('userId', data.id)
      navigate('/home')
      await Swal.fire({
        title: "Good job",
        text: `You already registered`,
        icon: "success"
      });
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='content-center'>
      <div className='w-96 py-6 px-5 mx-auto'>
        <h1 className="text-3xl font-bold text-white">Buat akun</h1>
        <Formik
          initialValues={initialValue}
          validationSchema={RegisterSchema}
          onSubmit={(values, action) => {
            action.resetForm()
            handleAdd(values)
          }}
        >
          {(props: FormikProps<FormValue>) => {
            return (
              <Form className='flex flex-col gap-4 mt-6'>
                <Input type={'text'} name={'username'} placeholder={'Username'} {...props} />
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