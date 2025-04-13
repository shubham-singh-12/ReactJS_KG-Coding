function TodoItem_1() {

  let todoName = 'Buy Milk';
  let todoDate = '4/10/2024';

  return <div className='container m-2'>
    <div className='row Kg-row'>

      {/* Todo Input Box */}
      <div className='col-6'>{todoName}</div>

      {/* Date Input Box */}
      <div className='col-4'>{todoDate}</div>

      {/* Button for submit */}
      <div className='col-2'>
        <button type='button' className='btn btn-danger kg-button'>Delete</button>
      </div>
    </div>
  </div>
}

export default TodoItem_1;