// import React,{useState} from "react";
// import "../styles/Blog.css";
// import { Link } from "react-router-dom";



// function PostCreate ({additem}) {
//   const [name, nameChange] = useState("");
//   const [email, emailChange] = useState("");
//   const [message, messageChange] = useState("");
//   const blog = { name, email, message}

//   function handleSubmit(e) {
//     e.preventDefault();
   
//   }
  
//     fetch("http://localhost:3300/posts",{
//       method: 'POST',
//       headers:{"content-type":"application/json"},
//       body:JSON.stringify(blog),
//       }).then ((r) => r.json())
//       .then((newblog) => additem(newblog))


//     return (
     

//         <form >
//           <label htmlFor="name">Full Name</label>
//           <input name="name" placeholder="Enter full name..." type="text" />
//           
         

          
//           <label htmlFor="email">Email</label>
//           <input name="email" placeholder="Enter email..." type="email" />
//           
         
//           <label htmlFor="message">Message</label>
//        <textarea
//             rows="6"
//             placeholder="Enter message..."
//             name="message"
//             required
//             
//           </textarea>
         
//           <button type="submit"> Create New </button>
//           <Link to="/" className="bt">back</Link>
          
          
//         </form>
     
    
//   );
  
//     }
// export default PostCreate;
