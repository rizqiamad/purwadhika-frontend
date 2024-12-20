'use client'

import { Field, Form, Formik, FormikProps } from 'formik'
import * as Yup from 'yup'

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('name is required'),
  email: Yup.string()
    .email('invalid email format')
    .required('email is required'),
  password: Yup.string()
    .min(3, 'password must be 3 characters at minimum')
    .required('password is required')
})

interface FormValue {
  name: string
  email: string
  password: string
}

export default function Register() {
  const initialValue: FormValue = { name: '', email: '', password: '' }

  const handleAdd = async (user: FormValue) => {
    try {
      await fetch('http://localhost:8000/api/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'content-type': 'application/json' },
      })
      alert('user berhasil di tambahkan')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='min-h-[calc(100vh-4rem)] content-center'>
      <div className='w-96 py-6 rounded-2xl shadow-2xl px-5 mx-auto'>
        <h1 className="text-4xl font-bold animate-bounce">Register Form</h1>
        <Formik
          initialValues={initialValue}
          validationSchema={RegisterSchema}
          onSubmit={(values, action) => {
            console.log(values)
            action.resetForm()
            handleAdd(values)
          }}
        >
          {(props: FormikProps<FormValue>) => {
            const { handleChange, values, touched, errors } = props
            return (
              <Form className='flex flex-col gap-4 mt-4'>
                <div className='flex flex-col'>
                  <label htmlFor="name" className='pb-2 font-semibold'>Name :</label>
                  <Field
                    type='text'
                    name='name'
                    id='name'
                    onChange={handleChange}
                    value={values.name}
                    placeholder='Name'
                    className='outline-none px-2 py-1 rounded-md bg-slate-200 border border-slate-400'
                  />
                  {touched.name && errors.name ? (
                    <div className='text-red-500 text-xs'>{errors.name}</div>
                  ) : null}
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="email" className='pb-2 font-semibold'>Email :</label>
                  <Field
                    type='text'
                    name='email'
                    id='email'
                    onChange={handleChange}
                    value={values.email}
                    placeholder='Email'
                    className='outline-none px-2 py-1 rounded-md bg-slate-200 border border-slate-400'
                  />
                  {touched.email && errors.email ? (
                    <div className='text-red-500 text-xs'>{errors.email}</div>
                  ) : null}
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="password" className='pb-2 font-semibold'>Password :</label>
                  <Field
                    type='password'
                    name='password'
                    id='password'
                    onChange={handleChange}
                    value={values.password}
                    placeholder='Password'
                    className='outline-none px-2 py-1 rounded-md bg-slate-200 border border-slate-400'
                  />
                  {touched.password && errors.password ? (
                    <div className='text-red-500 text-xs'>{errors.password}</div>
                  ) : null}
                </div>
                <button type='submit' className='py-2 rounded-lg hover:bg-lime-500 transition ease-linear hover:text-white font-semibold border-2 border-lime-500'>
                  Register
                </button>
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}