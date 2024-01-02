/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

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

    fetch(`http://localhost:5000/coffee/${_id}`,{
        method:"DELETE"
    })
    .then(res => res.json())
    .then(data => {
        // console.log(data)
       if(data.deletedCount > 0){
        Swal.fire(
            'Deleted!',
            'Your coffee has been deleted.',
            'success'
          )

          const remaining = coffees.filter(cof => cof._id !== _id)
          setCoffees(remaining)
       }
    })
    }
  })
  }
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className=" h-[300px]" src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full pr-4">
       <div className="pl-8 mt-20">
       <h2 className="card-title">Name:{name}</h2>
        <p>{quantity}</p>
        <p>{supplier}</p>
        <p>{taste}</p>
       </div>
        <div className="card-actions justify-end mt-20">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn">View</button>
            <Link to={`updateCoffee/${_id}`}>
            <button className="btn">Edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn bg-red-600">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeCard;
