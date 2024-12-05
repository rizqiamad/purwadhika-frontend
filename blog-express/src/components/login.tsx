'use client'

import { Field, Form, Formik, FormikProps } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

const RegisterSchema = Yup.object().shape({
  data: Yup.string()
    .required('username or email is required'),
  password: Yup.string()
    .required('password is required'),
})

interface FormValue {
  data: string
  password: string
}

export default function Login() {
  const initialValue: FormValue = { data: '', password: '' }
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (user: FormValue) => {
    try {
      setIsLoading(true)
      const res = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include'
      })
      const data = await res.json();
      if (!res.ok) throw data
      router.push('/')
      toast.success(data.message)
    } catch (err: any) {
      console.log(err)
      toast.error(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='min-h-[calc(100vh-4rem)] content-center'>
      <div className='w-96 py-6 rounded-2xl shadow-2xl px-5 mx-auto'>
        <h1 className="text-4xl font-bold animate-bounce">Login</h1>
        <Formik
          initialValues={initialValue}
          validationSchema={RegisterSchema}
          onSubmit={(values, action) => {
            console.log(values)
            action.resetForm()
            handleLogin(values)
          }}
        >
          {(props: FormikProps<FormValue>) => {
            const { handleChange, values, touched, errors } = props
            return (
              <Form className='flex flex-col gap-4 mt-4'>
                <div className='flex flex-col'>
                  <label htmlFor="data" className='pb-2 font-semibold'>Username or Email :</label>
                  <Field
                    type='text'
                    name='data'
                    id='data'
                    onChange={handleChange}
                    value={values.data}
                    placeholder='Username or Email'
                    className='outline-none px-2 py-1 rounded-md bg-slate-200 border border-slate-400'
                  />
                  {touched.data && errors.data ? (
                    <div className='text-red-500 text-xs'>{errors.data}</div>
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
                <Link href={'/register'} className='text-sm text-blue-500'>Register</Link>
                <button disabled={isLoading} type='submit' className={`${isLoading ? 'disabled:opacity-[0.5] disabled:bg-lime-500 text-white' : 'hover:bg-lime-500 hover:text-white'} py-2 rounded-lg transition ease-linear font-semibold border-2 border-lime-500`}>
                  {isLoading ? 'Loading ...' : 'Login'}
                </button>
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}