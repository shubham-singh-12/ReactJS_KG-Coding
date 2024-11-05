function AddTodo() {

  return <div class='container m-2'>
    <div class='row'>

      {/* Todo Input Box */}
      <div class='col-6'>
        <input type="text" name="" id="" placeholder="Enter Todo Here" />
      </div>

      {/* Date Input Box */}
      <div class='col-4'>
        <input type="date" />
      </div>

      {/* Button for submit */}
      <div class='col-2'>
        <button type='button' class='btn btn-success kg-button'>Add</button>
      </div>
    </div>
  </div>
}

export default AddTodo;