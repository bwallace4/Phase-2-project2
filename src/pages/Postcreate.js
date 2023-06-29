import React,{useState} from "react";
import "../styles/Blog.css";
import { Link } from "react-router-dom";



function PostCreate ({additem}) {
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [message, messageChange] = useState("");
  const blog = { name, email, message}

  function handleSubmit(e) {
    e.preventDefault();
   
  }
  
    fetch("http://localhost:3300/posts",{
      method: 'POST',
      headers:{"content-type":"application/json"},
      body:JSON.stringify(blog),
      }).then ((r) => r.json())
      .then((newblog) => additem(newblog))


    return (
     

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <input value={name} onChange={e=>nameChange(e.target.value)} className="form-control"></input>
         

          
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <input value={email} onChange={e=>emailChange(e.target.value)} className="form-control"></input>
         
          <label htmlFor="message">Message</label>
       <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
             value={message} onChange={e=>messageChange(e.target.value)} className="form-control">
          </textarea>
         
          <button type="submit"> Create New </button>
          <Link to="/" className="bt">back</Link>
          
          
        </form>
     
    
  );
  
    }
export default PostCreate;
