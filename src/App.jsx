import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="form">
        <h2>Registration Form</h2>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
