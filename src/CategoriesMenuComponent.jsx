import React, { Fragment } from "react";
import $ from 'jquery';
import 'jquery-ui'; 

const CategoriesMenuComponent = () => {

  const mapConfig = {
    lat: 41.69541155762141,
    lng: -8.846955635438464,
    zoom: 17
  };

  var $btnClick = $("#btn-add-category");
  $('button').on('click', function(){

      console.log("Clickou ......!");

  });





  return (
    <Fragment>
      <div id="categories-menu">
        <ul>
        <li className="btn-add-category"><button>Adicionar Categoria</button></li>
        <li><input type="checkbox"></input> Escolas</li>
        <li><input type="checkbox"></input> Avenidas</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default CategoriesMenuComponent;
