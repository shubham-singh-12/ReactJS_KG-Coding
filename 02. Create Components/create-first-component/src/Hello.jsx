function Hello() {

  // let myName = "Shubham";
  let number = 456;
  let fullName = ()=> {
    return 'Shubham';
  }

  return <h3>
    Message Number {number}: My name is {fullName()}.
  </h3>
}

export default Hello;