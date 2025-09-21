import React from 'react'
import Title from '../components/Title'

const Contact = () => {
  return (
    <div className="contact-container min-h-screen bg-gray-50 flex flex-col justify-center px-6 md:px-16">
    <div>
    <div className='text-center text-2xl mb-4'>
      <Title text1 ={'CONTACT'} text2={'US'}/>
    </div>
    <div className='my-10 flex flex-col md:flex-row justify-center gap-10 mb-28'>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80" alt="" className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow object-cover" />
      </div>
      <div className="flex flex-col justify-center items-start gap-6 w-full md:w-1/2 max-w-md mx-auto">
        <p className='font-semibold text-xl text-gray-600'>Our Store</p>
        <p className="text-gray-500 text-sm">54709 Willms Station, Suite 350, Washington, USA</p>
        <p className="text-gray-500 text-sm">Tel: (415) 555-0132</p>
        <p className="text-gray-500 text-sm">Email: admin@forever.com</p>
        <div className="mt-2">
          <b className="text-gray-700 text-base mb-3">Careers at Forever</b>
          <p className="text-gray-500 text-sm mb-3">Learn more about our teams and job openings.</p>
          <button className="border border-gray-700 text-gray-700 px-5 py-2 rounded text-sm font-medium w-fit self-start hover:bg-gray-100 transition">Explore Jobs</button>
        </div>
      </div>
    </div>
    <div className="w-full max-w-xl mx-auto mt-12 mb-20">
     
    </div>
      </div>
    </div>
  )
}

export default Contact

