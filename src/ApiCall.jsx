import React, { Fragment } from "react";
import { useState, useEffect } from "react";

const ApiCall = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3004/categories/")
        .then((response) => response.json())
        .then((result) => setCategories(result))
        .catch(err => console.error(err));

    }, [])

    const addCategory = () => {
        //const map = mapRef.current;
    
        console.log('clicked!..............');
    
    };

    console.log(categories);

    return (
        <div id="categories-menu">
          <ul>
            <li className="btn-add-category" onClick={() => addCategory()}>
              <button>Adicionar Categoria</button>
            </li>
            {categories.map((c, idx) => (
              <li key={idx}>
                <input type="checkbox" value={c.name} key={idx}></input> {c.name}
              </li>
            ))}
          </ul>
        </div>
    )
}

export default ApiCall;
