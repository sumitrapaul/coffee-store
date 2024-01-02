import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";


const SignIn = () => {
    const {signInUser} = useContext(AuthContext)

    const handleSignIn = e => {
        e.preventDefault()
       const form=e.target
       const email=form.email.value
       const password=form.password.value
       console.log(email,password)
       signInUser(email, password)

       .then(res =>{
        console.log(res.user)
        const user ={ email, password, lastLoggedAt: res.user?.metadata?.lastSignInTime }
        
        //using axios
        axios.patch('http://localhost:5000/user',user)
        .then(data =>{
          console.log(data.data)
        })



        //using fetch
        // fetch('http://localhost:5000/user', {
        //     method:"PATCH",
        //     headers:{
        //         "content-type" :"application/json"
        //     },
        //     body:JSON.stringify(user)
        // })
        // .then(res => res.json())
        // .then(data =>{
        //     console.log(data)
        //     if(data.modifiedCount > 0){
        //         Swal.fire({
        //             title:'Good job!',
        //             text: 'User updated successfully!',
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
            <h2 className="text-3xl">Please Signin</h2>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignIn} className="card-body">
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

export default SignIn;