import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState(res))
      .catch(err => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    // const response = await fetch('http://172.20.10.10/get-data', {
    //   method: "POST",
    //   body: "abobaa",
    //   headers: {
    //     'Content-Type': "text/plain"
    //   }
    // });
   

    const response = await fetch('/express_backend')
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    // while(true) {this.setState( {})
    return (
      <body className='ContainerBackground'>
        <div className="App-header">
          <h1 className="GreetingTextStyle">Добро пожаловать</h1>
        </div>
        <center><h2 className='CurrentActivity'>Текущее состояние</h2></center>
        <center><div class="w3-container w3-red" className="ContainerMainInfo">
          <p className="InfoTextStyle">Ветер: {this.state.wind == "1" ? "Сильный" : "Слабый"}</p>
          <p className="InfoTextStyle">На улице: {this.state.sun == "1" ? "Светло" : "Темно"}</p>
          <p className="InfoTextStyle">Солнечная панель: {this.state.panel == "1" ? "Разложена" : "Сложена"}</p>
          <p className="InfoTextStyle">Батарея: {this.state.battery == "1" ? "Заряжается" : "Не заряжается"}</p>
          <p className="InfoTextStyle">Свет: {this.state.bulb == "1" ? "Горит" : "Не горит"} </p>
        </div>
        </center>
      </body>
    );
  }
}

export default App;