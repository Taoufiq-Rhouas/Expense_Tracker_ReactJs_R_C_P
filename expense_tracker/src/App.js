import Balance from "./components/Balance";

function App() {
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-body" >
              <Balance balance="8000" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
