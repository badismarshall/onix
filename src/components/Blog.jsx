import React from 'react'
import BlogCard from './BlogCard'
import { blogs } from '../constants'

const Blog = () => {
  return (
    <section id='Blog' className='flex sm:flex-row flex-col justify-center items-start mt-[280px]'>
      <div className='flex flex-col gap-[32px]'>
            <h4 className='text-zinc-300 font-inter text-[60px] font-normal leading-[72px] text-center'>
                Your gateway to everything Onix.
            </h4>
            <p className='text-zinc-500 text-center font-karla text-[24px] font-normal leading-[36px]'>
                Stay current on the latest Onix project developments, news, and content, updated daily.
            </p>
      </div>
      <div className='flex flex-col justify-start items-start gap-[32px]'>
            {
                blogs.map((blog) => (
                    <BlogCard key={blog.id} {...blog}/>
                ))}
      </div>
    </section>
  )
}

export default Blog
