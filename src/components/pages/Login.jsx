import React from 'react'
import Card from '../atomic/card/Card'
import Button from '../atomic/button/Button'

const Login = () => {
  const formItems = [
    {
      key: 'email',
      label: 'Email',
      placeholder: 'test@gmail.com',
      type: 'email'
    },
    {
      key: 'password',
      label: 'Password',
      placeholder: 'Password',
      type: 'password'
    }
  ]
  return (
    <div className='text-center mt-20 flex flex-col gap-6 pb-4'>
      <Card>
        <form noValidate>
          <h2 className='text-center text-[1.8em] md:text-[2.5em] lg:text-[2.5em] xl:text-[2.5em] login-in-in font-[700] tracking-wide text-[red]'>
            Log in
          </h2>
          <section className='w-9/12 m-auto flex flex-column gap-4 text-lg'>
            {
              formItems.map(item => 
                <div className='flex flex-column gap items-start justify-start' key={item.key}>
                  <label className='text-base'  name={item?.key}>{item?.label}</label>
                  <input className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' type={item.type} placeholder={item.placeholder} onChange={() => {}} />
                </div>
              )
            }
            <Button label='Log in' className="" onClick={() => {}} />
          </section>
        </form>
      </Card>
    </div>
  )
}

export default Login