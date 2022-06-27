import React from 'react';
import '../styles/Blog.Styles.css';
import BlogPosts from '../components/BlogPosts.json';
import Sidebar from '../components/Sidebar';

const Blog = () => {
  return (
      <div className='blog-section'>
      <div className='blog-section-left'>
    {
        BlogPosts.map((value, key) => {
                    return(
                        <div className='blog-post-display' key={value.id}>
                            <h3 className='blog-title'>{value.heading}</h3>
                            <p className='blog-text'>{value.text}</p>
                            <span>{value.author}</span>
                            <span>{value.date}</span>
                        </div>   
                    )
        })
    }
    </div>
        <Sidebar />
        
    </div>
  )
}

export default Blog