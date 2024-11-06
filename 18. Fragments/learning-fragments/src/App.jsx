import React from 'react';

// APP CSS
import './App.css';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (

    // SYNTAX 1
    // <React.Fragment>
    //   <h1>Healthy Food</h1>

    //   <ul class="list-group">
    //     <li class="list-group-item">Dal</li>
    //     <li class="list-group-item">Green Vegetable</li>
    //     <li class="list-group-item">Roti</li>
    //     <li class="list-group-item">Salad</li>
    //     <li class="list-group-item">Milk</li>
    //   </ul>
    // </React.Fragment>



    // SYNTAX 2
    <>
      <h1>Healthy Food</h1>

      <ul class="list-group">
        <li class="list-group-item">Dal</li>
        <li class="list-group-item">Green Vegetable</li>
        <li class="list-group-item">Roti</li>
        <li class="list-group-item">Salad</li>
        <li class="list-group-item">Milk</li>
      </ul>
    </>
  );
};

export default App;