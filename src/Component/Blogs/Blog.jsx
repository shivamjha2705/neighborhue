import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import blogsData from "./BlogContent"


import "./blog.css"


const BlogsPerPage = 3;
const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBlog = currentPage * BlogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - BlogsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

  const recommendedBlogs = blogsData.slice(0, 6);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(blogsData.length / BlogsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="blog-container" id="blog-top">
      <h1>Your Blogs</h1>
      <div className="parent-blog">
        <div className="blogs">
          {currentBlogs.map((blog) => (
            <div className="blog-cards" key={blog.id}>
              <Link to={`/blogs/${blog.id}/${encodeURIComponent(blog.title)}`} className="blog">
                <div className="blog-image">
                  <img src={blog.imageUrl} alt={`Blog ${blog.id}`} />
                </div>
                <div className="blog-content">
                  <h3>{blog.title}</h3>
                  <p>{blog.title_content}...</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="recommended">
          <h3 style={{ color: "#7E49CC" }}>Recommended For You</h3>
          {recommendedBlogs.map((blog) => (
            <div className="">
              <Link to={`/blogs/${blog.id}/${encodeURIComponent(blog.title)}`} key={blog.id} className="recommend">
                <div className="blog-content">
                  <h3>{blog.title}</h3>
                  <p class="BlogInfo"><span class="BlogDate">{blog.publish_date}</span><span class="BlogTag">{blog.category}</span></p>
                </div>
              </Link>
            </div>
          ))}

          <div class="rBlogTopicsHolder">
            <h4>See more Topic Suggestions</h4>
            <div class="rBlogTags">
              <span className="rTag">History</span>
              <span className="rTag">Lifestyle</span>
              <span className="rTag">Heritage</span>
              <span className="rTag">Science</span>
              <span className="rTag">Social</span>
              <span className="rTag">Technology</span>
              <span className="rTag">Artificial Intellegence</span>
            </div>
          </div>

        </div>
      </div>
      <div className="pagination">
        <button onClick={() => prevPage()} className={currentPage === 1 ? 'disabled' : ''}>
          Prev
        </button>
        {Array.from({ length: Math.min(totalPages, 4) }, (_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>
            {i + 1}
          </button>
        ))}
        <button onClick={() => nextPage()} className={currentPage === totalPages ? 'disabled' : ''}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Blog