import React, { Fragment, Component } from "react";
import $ from 'jquery';
import { render } from "react-dom";

class CategoriesMenuComponentCopy extends Component {

  componentDidMount() {
    const mapConfig = {
      lat: 41.69541155762141,
      lng: -8.846955635438464,
      zoom: 17
    };

    /*const $btnClick = $(".btn-add-category");
    $btnClick.on('click', (e) => {

        console.log("Clickou ......!", e.target);

    });*/



    $("#categories-menu").on('click', 'input:checkbox', (e) => {

        const $checkbox = $(e.target);
        console.log("%s Checked: %s", $checkbox.is(":checked") ? 'Is' : 'Not', $checkbox.val());

    });
  }
  
  
  render() {
    
    const addCategory = () => {
      //const map = mapRef.current;
  
      console.log('clicked!..............');
  
    };
    
    return (
      <Fragment>
        <div id="categories-menu">
          <ul>
          <li className="btn-add-category" onClick={()=>addCategory()}><button>Adicionar Categoria</button></li>
          <li><input type="checkbox" value="Escolas"></input> Escolas</li>
          <li><input type="checkbox" value="Avenidas"></input> Avenidas</li>
          </ul>
        </div>
        </Fragment>
      );
    };
  }

export default CategoriesMenuComponentCopy;
