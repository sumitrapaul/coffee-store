import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {
    const loadedUsers=useLoaderData()

    const [users, setUsers] = useState(loadedUsers)

   //fetch way
  //  useEffect(()=>{
  //   fetch('/')
  //   .then(res => res.json())
  //   .then(data =>{
  //     console.log(data)
  //   })
  //  },[])


   //using axios
  //  useEffect(()=>{
  //   axios.get('/')
  //   .then(data =>{
  //     console.log(data.data)
  //   })
  //  },[])




    const handleDelete = (_id) =>{
        // console.log(_id) 
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        // console.log(_id)
    
        fetch(`http://localhost:5000/user/${_id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
           if(data.deletedCount > 0){
            Swal.fire(
                'Deleted!',
                'Your user has been deleted.',
                'success'
              )
    
              const remaining = users.filter(cof => cof._id !== _id)
              setUsers(remaining)
           }
        })
        }
      })
      }
    return (
        <div>
            <h2 className="text-2xl">User list:{loadedUsers.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>_id</th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last Logged</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        users.map(user =>  <tr key={user._id}>
            <th>{user._id}</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.lastLoggedAt}</td>
            <td>
                <button onClick={() => handleDelete(user._id)} className="btn btn-primary">X</button>
            </td>
          </tr>)
    }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;