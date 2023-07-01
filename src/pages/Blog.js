import React,{useEffect,useState} from "react";
import "../styles/Blog.css";
import { Link } from "react-router-dom";


function Blog() {
  const [posts, setPosts] = useState([]);
  const [Fullname, FullnameChange] = useState("");
  const [Email, emailChange] = useState("");
  const [Message, messageChange] = useState("");
  


  const displayPost = posts.map((post) =>{
    return(
      <>
      <p>{post.Fullname}</p>
      <p>{post.Email}</p>
      <p>{post.Message}</p>
      </>
    )
  })

  function handleSubmit (e)  {
    e.preventDefault();
    const blog = { Fullname, Email, Message};
   
  

    fetch("http://localhost:3300/posts",{
      method: 'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify( blog),
      }).then ((r) => r.json())
      .then((newblog) => setPosts([...posts,newblog]))
    }
 
  
  useEffect(() => {
    fetch("http://localhost:3300/posts")
      .then((r) => r.json())
      .then((data) => {
        // setting state in the useEffect callback
        console.log(data)
       setPosts(data);
      });
  },[]);

  return (
    <div className="blog">
     
      <div className="blog-t">

      <h1> Tell us how were doing!</h1>
{/*        
      /* <div>{posts.map((post) =>
      (<p>{post.Fullname}</p>))  }</div>
      <div>{posts.map((post) =>
      (<p>{post.Email}</p>))  }</div>
       <div>{posts.map((post) =>
      (<p>{post.Message}</p>))  }</div> */ }

      <div>{displayPost}</div>

  
       
      
        

        <form id="contact-form" onSubmit={handleSubmit} method="POST">
          <label htmlFor="name">Full Name</label>
         
      <input name="name" placeholder="Enter full name..." type="text" />
      <input value={Fullname} onChange={e=>FullnameChange(e.target.value)} className="form-control"></input>
          
          <label htmlFor="email">Email</label>
         
      <input name="email" placeholder="Enter email..." type="email" />
      <input value={Email} onChange={e=>emailChange(e.target.value)} className="form-control"></input>
         
          <label htmlFor="message">Message</label>
          
       <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
            value={Message} onChange={e=>messageChange(e.target.value)} className="form-control">
          </textarea>
         
          <button type="submit"> Create New </button>
          <Link to="/" className="bt">back</Link>
          
          
        </form>
      </div>
    </div>
     
    
  );
    }


export default Blog;
