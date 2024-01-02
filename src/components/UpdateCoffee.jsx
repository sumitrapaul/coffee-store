/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
   
    const coffee = useLoaderData()
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;


    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form=e.target
        const name=form.name.value
        const quantity=form.quantity.value
        const supplier=form.supplier.value
        const taste=form.taste.value
        const category=form.category.value
        const details=form.details.value
        const photo=form.photo.value
        const updatedCoffee={name, quantity, supplier, taste, category, details, photo}
    
        console.log(updatedCoffee)
        
    
        //send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
         
        method:"PUT",
        headers:{
            "content-type" : "application/json"
        },
        body:JSON.stringify(updatedCoffee)
    
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
    
            if(data.modifiedCount > 0){
                Swal.fire({
                    title:'Good job!',
                    text: 'Coffee updated successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                }
                  )
            }
        })
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className=" text-center text-4xl font-bold text-purple-700 pt-8 pb-8">Update Coffee : {name}</h2>
        <form onSubmit={handleUpdateCoffee}>
          <div className=" md:flex gap-5 justify-center">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Coffee Name"
                  defaultValue={name}
                  name="name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Available Quantity"
                  defaultValue={quantity}
                  name="quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className=" md:flex gap-5 justify-center">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Coffee Supplier"
                  defaultValue={supplier}
                  name="supplier"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Coffee Taste"
                  defaultValue={taste}
                  name="taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className=" md:flex gap-5 justify-center">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Coffee category"
                  defaultValue={category}
                  name="category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Coffee Details"
                  defaultValue={details}
                  name="details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Coffee Photo"
                  defaultValue={photo}
                  name="photo"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
           
          </div>
          <input type="submit" value="Update Coffee" className="btn btn-block bg-purple-500 text-white" />
        </form>
      </div>
    );
};

export default UpdateCoffee;