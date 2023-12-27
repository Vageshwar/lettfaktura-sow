import React from 'react'
import Button from '../atomic/button/Button'

const Terms = () => {
  return (
    <div className='text-center mt-20 flex flex-col gap-6'>
      <h1 className='text-white font-[700] text-2xl'>
        Terms
      </h1>
      <div className=''>
        <Button label='Close and Go Back' onClick={() => {}} btnClassNames={"px-10 text-white bg-[#089e1e] py-3 rounded-full text-lg font-[600]"}/>
      </div>
    </div>
  )
}

export default Terms