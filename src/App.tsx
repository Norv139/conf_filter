import React, { useState } from 'react';
import './App.css';
import Filter from './components/filter';
import { correctStruct } from './type/hardcode';
import { JSONTree } from 'react-json-tree';


declare global {
  namespace JSX {
    interface IntrinsicElements {
      item: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

function App() {

  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)

  return (
    <div className="App container-fluid ">
      <div className="row px-10 text-bg-info p-3 ">
        <div className="col-sm-5 text-bg-primary rounded-start p-3">
          <Filter data={correctStruct}  />
        </div>
        <div className="col-sm-7 text-bg-dark rounded-end p-3">

        <div className="row">

          <div className="accordion col-sm-6" id="accordionExample">

            <div className="accordion-item open">
              <h2 className="accordion-header">
                <button className={`accordion-button ${show?(""):("collapsed")}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" onClick={()=>{setShow(!show)}}>
                  Структура в начале
                </button>
              </h2>

              <div id="collapseTwo" className={`accordion-collapse collapse ${show?("show"):("")}`} data-bs-parent="#accordionExample">
                
                  <JSONTree data={correctStruct} />
                
              </div>
            </div>

          </div>


          <div className="accordion col-sm-6" id="accordionExample">

            <div className="accordion-item open">
              <h2 className="accordion-header">
                <button className={`accordion-button ${show1?(""):("collapsed")}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" onClick={()=>{setShow1(!show1)}}>
                  Из фильтра
                </button>
              </h2>

              <div id="collapseTwo" className={`accordion-collapse collapse ${show1?("show"):("")}`} data-bs-parent="#accordionExample">
                
                  <JSONTree data={correctStruct} />
                
              </div>
            </div>

          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;
