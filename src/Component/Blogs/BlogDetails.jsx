import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Import Link from react-router-dom
import blogsData from "./BlogContent";

const BlogDetail = () => {
  const [Loader, setLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const loadScript = async (id, delay) => {
      try {
        const script = document.createElement("script");
        script.src = `//www.topcreativeformat.com/${id}/invoke.js`;
        script.async = true;

        window.atOptions = {
          key: id,
          format: "iframe",
          height: 60,
          width: 468,
          params: {},
        };

        const scriptLoaded = new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
        });

        const adContainer = document.querySelector(
          `.advertisement[data-key="${id}"]`
        );
        if (!adContainer) {
          throw new Error(`Advertisement container not found for ID ${id}.`);
        }

        adContainer.appendChild(script);

        await scriptLoaded;
        console.log(`Script for ID ${id} loaded successfully.`);
      } catch (error) {
        console.error(
          `An error occurred while loading the ad script for ID ${id}:`,
          error
        );
      }
    };

    const scriptIds = [
      "7d1a883cb69f48f17276f02d5965dd48",
      "7b7419ab06b5166d1896d5652ed008fc",
      "b13b307a20f623e8b970b987d657186f",
      "51f70286ee8007c59a5524115eb39b2b",
      "3526b65a30eb8d7a220e9bd24f29d078",
      "d511188106489e0a85d177d75dd6e1d4",
    ];
    scriptIds.forEach((id, index) => {
      const delay = index === 0 ? 0 : 3000 * index; // Adding delay for the second script
      setTimeout(() => {
        loadScript(id);
      }, delay);
    });

    return () => {
      const adContainers = document.querySelectorAll(".advertisement");
      adContainers.forEach((adContainer) => {
        adContainer.innerHTML = "";
        console.log(adContainer);
      });
    };
  }, []);

  const { id } = useParams();
  const parsedBlogId = parseInt(id, 10);

  const blog = blogsData.find((blog) => blog.id === parsedBlogId);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const recommendedBlogs = blogsData.slice(0, 6);

  const sharebtn = async () => {
    let weburl = window.location.href;
    try {
      await navigator.share({
        url: weburl,
      });
    } catch (error) {
      console.log("Sharing failed!", error);
    }
  };

  return (
    <div className="blog-detail-container">
      <div className="blog-detail">
        <div className="blog-img">
          <img src={blog.imageUrl} alt={`Blog ${blog.id}`} />
        </div>
        <div className="blog-head">
          <h1>{blog.title}</h1>
          <div
            className="advertisement"
            data-key="7d1a883cb69f48f17276f02d5965dd48"
          ></div>
        </div>
        <div className="content-detail">
          <div className="author">
            <h4>By {blog.author} </h4>
            <h5> . {blog.publish_date}</h5>
          </div>
          <button onClick={sharebtn} className="share">
            <i
              className="fa-solid fa-share-nodes fa-lg"
              style={{ color: "#DC6745" }}
            ></i>
            Share Now
          </button>
          {/* <div className="share">
            <h5>Share Now</h5>
            <Link to={"#"}>
              <i className="fa-solid fa-share-nodes fa-lg" style={{ color: "#DC6745" }}></i>
            </Link>
          </div> */}
        </div>
        {!Loader ? (
          <div
            className="blog_div_content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        ) : null}

        {/* <p>{blog.content}</p> */}
      </div>
      <div className="recommended">
        <h3 style={{ color: "#7E49CC" }}>Recommended For You</h3>
        {recommendedBlogs.map((recommendBlog) => (
          <div key={recommendBlog.id}>
            <Link
              to={`/blogs/${recommendBlog.id}/${encodeURIComponent(
                recommendBlog.title
              )}`}
              className="recommend"
            >
              <div className="blog-content">
                <h3>{recommendBlog.title}</h3>
                <p className="BlogInfo">
                  <span className="BlogDate">{blog.publish_date}</span>
                  <span className="BlogTag">{blog.category}</span>
                </p>
              </div>
            </Link>
          </div>
        ))}
        <div className="rBlogTopicsHolder">
          <h4>See more Topic Suggestions</h4>
          <div className="rBlogTags">
            <span className="rTag">History</span>
            <span className="rTag">Lifestyle</span>
            <span className="rTag">Heritage</span>
            <span className="rTag">Science</span>
            <span className="rTag">Social</span>
            <span className="rTag">Technology</span>
            <span className="rTag">Artificial Intellegence</span>
          </div>
        </div>
        <div
          className="advertisement"
          data-key="7b7419ab06b5166d1896d5652ed008fc"
        ></div>
        <div
          className="advertisement"
          data-key="b13b307a20f623e8b970b987d657186f"
        ></div>
        {/* <div
          className="advertisement"
          data-key="8e8e80e5f56d54eff7318937f597c046"
        ></div> */}
      </div>
    </div>
  );
};

export default BlogDetail;
