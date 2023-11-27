import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../features/userDetailSlice';

const Update = () => {
  
  const {id} = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {users} = useSelector((state) => state.app);
  const [updateData, setupdateData] = useState();
  

  useEffect(() => {
    if (id) {
        const singleUser = users.filter((ele) => ele.id === id);
        setupdateData(singleUser[0])
    }
    // eslint-disable-next-line
  }, [])
  
  const newData = (e) => {
    setupdateData({...updateData, [e.target.name] : e.target.value})
  }

  console.log("updated data", updateData)

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(updateUser(updateData))
    navigate('/read')
  }
  
    return (
    <div>
      <h2 className="my-4 d-flex justify-content-center">Edit the data</h2>
      <form className="w-50 mx-auto my-5" onSubmit = {handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={updateData && updateData.name}
            onChange={newData}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={updateData && updateData.email}
            onChange={newData}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            value={updateData && updateData.age}
            onChange={newData}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            checked= {updateData && updateData.gender === "Male"}
            onChange={newData}
            required
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            checked= {updateData && updateData.gender === "Female"}
            onChange={newData}
          />
          <label className="form-check-label">Female</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Update