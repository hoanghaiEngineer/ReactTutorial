import logo from './logo.svg';
import './App.css';

class Car{
  constructor(name){
    this.brand = name;
  }

  present = () =>{
    return 'I have a '+ this.brand;
  }
}

class CarModel extends Car{
  constructor(name, mod){
    super(name);
    this.model = mod;
  }
  show = () => {
    return this.present() + ', it is a '+ this.model;
  }
}

function App() {
  let carmodel = new CarModel('Ford', '1940 Model');

  return (
    <div>
      <h1>
        {carmodel.show()}
      </h1>
    </div>
    
  );
}

export default App;
