import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";



const SignUp = () => {

const { createUser } =useContext(AuthContext)

const handleSignUp = e => {
    e.preventDefault()
   const form=e.target
   const email=form.email.value
   const password=form.password.value
   console.log(email,password)
   createUser(email, password)

   .then(res =>{
    console.log(res.user)
    
    const createdAt = res.user?.metadata?.creationTime
    
    const user ={ email, password, createdAt: createdAt }
    
    //using axios
    axios.post('http://localhost:5000/user',user)
    .then(data =>{
      // console.log(data.data)
      if(data.data.insertedId){
        console.log('Data added to the database!!')
      }
    })



    //using fetch
    // fetch('http://localhost:5000/user', {
    //     method:"POST",
    //     headers:{
    //         "content-type" :"application/json"
    //     },
    //     body:JSON.stringify(user)
    // })
    // .then(res => res.json())
    // .then(data =>{
    //     // console.log(data)
    //     if(data.insertedId){
    //         Swal.fire({
    //             title:'Good job!',
    //             text: 'User created successfully!',
    //             icon: 'success',
    //             confirmButtonText: 'Cool'
    //         }
    //           )
    //     }
    // })
   })
   .catch(error =>{
    console.error(error.message)
   })

}



    return (
        <div>
          <h2 className="text-3xl text-center">Please Sign Up</h2>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>  
        </div>
    );
};

export default SignUp;