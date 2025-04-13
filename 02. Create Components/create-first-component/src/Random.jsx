function Random() {

  let randomNumber = Math.round(Math.random() * 10);

  return <h1 style={{'backgroundColor': 'skyblue'}}>
    Random Number is: {randomNumber}.
  </h1>
}

export default Random;