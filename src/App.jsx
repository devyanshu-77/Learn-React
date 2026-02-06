function Greetings({name}) {
    return <h1>Hello I am {name} </h1>
}
function App() {
    const name = "John";
    const age = 24;
    // return (
    //     <div className="h-screen w-screen flex justify-center items-center bg-black text-white">
    //        <p>Hello world, I am {name}, and I am {age} years old </p> 
    //     </div>
    // ) 
    return <Greetings name="Divyanshu" />
}
// Component = Function that returns jsx 
export default App;
