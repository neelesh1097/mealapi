import React from 'react'
import Title from '../components/Title'

const About = () => {
  return (
    <div className="about-container min-h-screen bg-gray-50 flex flex-col justify-center px-6 md:px-16">
      <div>
        {/* Page Title */}
        <div className="text-center text-2xl mb-4">
          <Title text1={'ABOUT'} text2={'US'} />
        </div>

        {/* Main Content */}
        <div className="my-10 flex flex-col md:flex-row justify-center gap-10 mb-28">
          {/* Left Column - Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
              alt="About Us"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow object-cover"
            />
          </div>

          {/* Right Column - Info */}
          <div className="flex flex-col justify-center items-start gap-6 w-full md:w-1/2 max-w-md mx-auto">
            <p className="font-semibold text-xl text-gray-600">Who We Are</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Forever Meals began with a simple mission: to make fresh, delicious,
              and healthy food accessible to everyone. Our chefs and nutrition
              experts carefully craft meals that balance taste and nutrition.
            </p>

            <p className="font-semibold text-xl text-gray-600 mt-4">Our Promise</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              We use only high-quality ingredients, cooked with care, and delivered
              with love. Every dish is designed to bring people together and create
              memorable dining experiences.
            </p>

            <button className="border border-gray-700 text-gray-700 px-5 py-2 rounded text-sm font-medium w-fit self-start hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Optional Extra Section */}
        <div className="w-full max-w-xl mx-auto mt-12 mb-20 text-center">
          <p className="text-gray-600 text-sm">
            At <span className="font-medium text-gray-800">Forever Meals</span>, we
            believe food is more than just fuel — it’s about joy, togetherness, and
            creating lasting memories.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

