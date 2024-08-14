import React from 'react'

const App = () => {
  return (
    <div className='max-w-[1250px] mx-auto max-sm:px-7 flex items-center justify-center h-screen'>
      <div className='grid gap-8'>
        <h1 className='font-medium text-center text-blue-700 text-4xl max-sm:text-3xl'>Are you a Student or a Teacher?</h1>
        <div className='flex items-center justify-center gap-5'>
          <a href='https://asdouasgouysgfouyadc.vercel.app' className='transition-all px-5 py-2 rounded-lg bg-blue-700 text-white cursor-pointer hover:shadow-md hover:shadow-blue-600 active:bg-blue-900'>Student</a>
          <h1 className='font-bold text-xl text-blue-700'>|</h1>
          <a href='https://adiagf08w7guasbfasuyc.vercel.app' className='transition-all px-5 py-2 rounded-lg bg-blue-700 text-white cursor-pointer hover:shadow-md hover:shadow-blue-600 active:bg-blue-900'>Teacher</a>
        </div>
      </div>
    </div>
  )
}

export default App