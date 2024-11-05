function TodoItem_1() {

  let todoName = 'Buy Milk';
  let todoDate = '4/10/2024';

  return <div class='container m-2'>
    <div class='row Kg-row'>

      {/* Todo Input Box */}
      <div class='col-6'>{todoName}</div>

      {/* Date Input Box */}
      <div class='col-4'>{todoDate}</div>

      {/* Button for submit */}
      <div class='col-2'>
        <button type='button' class='btn btn-danger kg-button'>Delete</button>
      </div>
    </div>
  </div>
}

export default TodoItem_1;