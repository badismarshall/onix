import React from 'react'
import BlogCard from './BlogCard'
import { blogs } from '../constants'

const Blog = () => {
  return (
    <section id='Blog' className='flex ss:flex-row flex-col justify-center ss:items-start items-center sm:mt-[280px] mt-[80px] gap-[64px]'>
      <div className='flex flex-col gap-[32px]'>
            <h4 className='text-zinc-300 font-inter 
            text-[40px] font-normal sm:leading-[72px] leading-[48px] text-start max-w-[534px] tracking-tighter'>
                Your gateway to everything Onix.
            </h4>
            <p className='text-zinc-500 text-start font-karla text-[24px] font-normal leading-[36px] max-w-[534px]'>
                Stay current on the latest Onix project developments, news, and content, updated daily.
            </p>
      </div>
      <div className='flex flex-col justify-center items-center gap-[32px]'>
            {
                blogs.map((blog) => (
                    <BlogCard key={blog.id} {...blog}/>
                ))}
      </div>
    </section>
  )
}

export default Blog
