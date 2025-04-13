function AddTodo() {

  return <div className='container m-2'>
    <div className='row'>

      {/* Todo Input Box */}
      <div className='col-6'>
        <input type="text" name="" id="" placeholder="Enter Todo Here" />
      </div>

      {/* Date Input Box */}
      <div className='col-4'>
        <input type="date" />
      </div>

      {/* Button for submit */}
      <div className='col-2'>
        <button type='button' className='btn btn-success kg-button'>Add</button>
      </div>
    </div>
  </div>
}

export default AddTodo;