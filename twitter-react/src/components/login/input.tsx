import { Field, FormikProps } from "formik";
import { IUser } from "../../types/user";

interface InputProps extends FormikProps<IUser> {
  type: string
  name: keyof IUser
  placeholder: string
}

export default function Input({ type, name, placeholder, ...props }: InputProps) {
  const { handleChange, values, touched, errors } = props
  return (
    <div className='flex flex-col'>
      <Field
        type={type}
        name={name}
        onChange={handleChange}
        value={values[name]}
        placeholder={placeholder}
        className={`px-2 py-4 mb-1 focus:outline outline-2 rounded-md border bg-black text-white ${touched[name] && errors[name] ? 'outline-red-500 border-red-500' : 'border-slate-600 outline-[#1d9bf0]'}`}
      />
      {touched[name] && errors[name] ? (
        <div className='text-red-500 text-xs'>{errors[name]}</div>
      ) : null}
    </div>
  )
}