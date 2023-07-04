import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Filter from './components/filter';
import JSONviewer from './components/JSONviewer';
import { correctStruct } from './type/hardcode';



// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.css'
function App() {

  return (
    <div className="App container-fluid ">
      <div className="row px-10 text-bg-info p-3 ">

        <div className="col-sm-5 text-bg-primary rounded-start p-3">

          <Filter data={correctStruct}  />

        </div>
        <div className="col-sm-7 text-bg-dark rounded-end p-3">

          <JSONviewer json={correctStruct} title='Начальная структура' />

        </div>
      </div>


    </div>
  );
}

export default App;
