function CurrentTime() {

  let currentTime = new Date();

  return <p className="lead">
    This is the Current Time: {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}.
  </p>
}

export default CurrentTime;