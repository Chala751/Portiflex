import { Toaster } from "react-hot-toast";


function App() {
 

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">Welcome to Portiflex</h1>
        <p className="mt-4 text-red-50">Your one-stop solution for all your portfolio needs.</p>
      </div>
    </>
  )
}

export default App
