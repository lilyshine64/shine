import Example from "./examples";
import Intro from "./mine";
import Timer from "./Effect";
import Counter from "./usestate";


function App(){
  return(
    <>
    <h1 className="btn">use_state demostration </h1>
    <div>
      <Counter/>
    </div>
    

    <div className="dot">
      <Intro/>
    </div>
    <h1 className="lily">example of useEffect</h1>

<div className="btn">
  <Timer/>
</div>

<div>
  <Example/>
</div>
    

    <div className="footer">
      <footer>
      <p>&copy; <span id="year"></span> LILY_shine. this project is Reserved by uwase liliane.</p>
      </footer>

    </div>
    </>
  )
}

export default App