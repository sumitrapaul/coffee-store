import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const Users2 = () => {

    const { isPending, isError, error, data: users } = useQuery({
        queryKey:['users'],
        queryFn:async() =>{
            const res=await fetch('http://localhost:5000/user');
            return res.json()
        }
    })

if(isPending){
  return <span className="loading loading-bars loading-lg"></span>
}

if(isError){
  return <p>{error.message}</p>
}



//   const [users, setUsers]=useState([])

//   useEffect(()=>{
//     fetch('http://localhost:5000/user')
//     .then(res => res.json())
//     .then(data => {
//         setUsers(data)
//     })
//   },[])

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
            console.log('deleted successfully')
            // Swal.fire(
            //     'Deleted!',
            //     'Your user has been deleted.',
            //     'success'
            //   )
    
            //   const remaining = users.filter(cof => cof._id !== _id)
            //   setUsers(remaining)
           }
        })
        }
      })
      }

    return (
        <div>
            {/* <h2 className="text-2xl">User list:{loadedUsers.length}</h2> */}

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

export default Users2;