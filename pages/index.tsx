import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import {FaFacebookF, FaLinkedinIn,FaGoogle, FaRegEnvelope, } from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
      <Head>
        <title> SIMPLE LOGIN PAGE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
     <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
        <div className='w-3/5 p-5'> 
          <div className='text-left font-bold '> 
          <a href="#" className="flex items-center">
        <img src="https://picsum.photos/200" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap text-green-900"> BRAND NAME</span>
    </a>
          </div>
          <div className='py-5'>
            <h2 className='text-3xl font-bold text-green-700 mb-2'> Sign In to Account</h2>
            <h3 className='text-2xl font-semibold text-green-500 mb-2'>Help us to preserve the environment by joining our new plan</h3>
            <div className='border-2 w-10 border-green-700 inline-block'></div>

    <p className='text-gray-400 my-2'> Or use you your email account : </p>
    <div className="flex flex-col items-center">
      <div className='bg-gray-100 w-64 p-2 flex items-center mb-3 '><FaRegEnvelope className='text-gray-400 mr-3'/>
      <input type="email" name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1'  /></div>
      <div className='bg-gray-100 w-64 p-2 flex items-center mb-2 '><MdLockOutline className='text-gray-400 mr-3'/>
      <input type="Password" name='Password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1 '  /></div>
      <div className='flex w-64 mb-5 justify-between flex-col mb-2 '>
        <label className="flex items-center text-xs mb-2"><input type="checkbox" name="remember" className="mr-2"/> Remember me</label>
        <label className="flex items-center text-xs mb-2"><input type="checkbox" name="remember" className="mr-2"/> Subscribe to the newsletter</label>
        <a href="#" className='text-xs hover:bg-gray-100 flex'> Forgot Password</a>
      </div>
      <a href="#" className='border-2 border-green-700 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-700 hover:text-white mb-4'> Sign in</a>
      <h2 className='text-xl font-bold text-green-500 mb-2'> Or use one of these : </h2>
      <div className='flex justify-center my-2'>
              <a href="#" className='border-2 border-green-200 rounded-full p-3 mx-1 hover:bg-gray-100'>
                <FaFacebookF className='text-sm'/>
              </a>
              <a href="#" className='border-2 border-green-200 rounded-full p-3 mx-1 hover:bg-gray-100'>
                <FaLinkedinIn className='text-sm'/>
              </a>
              <a href="#" className='border-2 border-green-200 rounded-full p-3 mx-1 hover:bg-gray-100'>
                <FaGoogle className='text-sm'/>
              </a>

            </div>
    </div>
    
          </div>
        </div> {/* Sign In Section */}
        <div className='w-2/5 bg-green-700 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'> <h2 className='text-3xl font-bold mb-2'>Welcome Back, Friend !</h2>
        <div className='border-2 w-10 border-white inline-block mb-2'></div>
        <p className='mb-6'> You want another cooking session ? <br />
        We can't wait either to have you with <span className='font-bold'> us </span>   !</p>
        <a href="#" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-700'> Sign up</a>
        </div> 
        
        
      {/* Sign Up Section */}
      </div>
      </main>
    </div>
  )
}
<br />
export default Home


