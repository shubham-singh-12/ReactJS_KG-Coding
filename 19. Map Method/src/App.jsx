// App CSS
import './App.css';

// BootStrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  // Array for List Items
  let foodItems = ['Dal', 'Green Vegetables', 'Roti', 'Salad', 'Milk', 'Ghee'];

  return (
    <>
      {/* Heading */}
      <h1>Healthy Food</h1>

      {/* List Items */}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
};

export default App;