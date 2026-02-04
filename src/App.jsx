function App() {
  const name = "John Doe"
  const heroNames = ["SpiderMan", "Hulk", "Thor", "Captain America"]
  const isLoggedIn = true;
  const styles = {
      color: "red",
      fontSize: "55px"
  }
  return (
    <>
      <h1 className="text-2xl">Hello React </h1>
      <p style={styles}>Hello {name} </p>
      <ul>
        {heroNames.map((name, i) => {
           return <li key={i}>Hi I am {name} </li>
        })}
      </ul>
      <p>You are {isLoggedIn ? "logged in." : "not logged in."} </p>
    </>
  )
}

export default App
