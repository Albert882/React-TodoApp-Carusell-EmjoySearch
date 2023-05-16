import React, { useState } from 'react'
import { emojies } from '../dataBase/emojiesDB'

export default function Emoji() {
  const [inpValue, setInputValue] = useState('')
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <section className='w-full py-10 px-40 flex flex-col'>
      <div className='w-full'>
        <input type="text" name="text" id="text" placeholder='Enter Emoji Name' value={inpValue} className='w-full h-12 text-lg font-medium px-6' onChange={handleChange} />
      </div>
      <div>
        {
          emojies?.filter(item => item?.title?.toLowerCase()?.includes(inpValue?.toLowerCase()) && item)?.map((item) => {
            return (
              <div key={item?.id} className='flex h-12 border-b gap-4 border-black mt-6'>
                <p className='text-xl'>{item?.emoji}</p>
                <p className='text-xl font-medium'>{item?.title}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
