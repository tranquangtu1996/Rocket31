import logo from './logo.svg';
import './App.css';
import EmployeeList from './EmployeeList';
import Mouse from './api/Mouse';

function App() {
  return (
    <div className="App">
      <EmployeeList/>
    </div>
  );
  // return <EmployeeList/>

  // return (
  //   <Mouse
  //      render={(coordinate) => (
  //       <div>
  //         The mouse position {coordinate.x} : {coordinate.y}
  //       </div>
  //      )}
  //      />
  // );

  // return (
  //   <Mouse>
  //     {(coordinate) => (
  //       <div>
  //         The mouse position {coordinate.x} : {coordinate.y}
  //       </div>
  //      )}
  //   </Mouse>
  // );
}

export default App;
