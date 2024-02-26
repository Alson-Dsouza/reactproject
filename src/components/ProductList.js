import React from 'react';
import Product from './Product';

export default function ProductList(props) {
  return (
    // props.productList.map((product,i)=>{
    //     return <Product product={product} key={i}/>
    // })
    <div className="row">
      {props.productList.map((product, index) => {
        // Check if the index is even to start a new row
        if (index % 2 === 0) {
          return (
            <div className="col-md-6" key={index}>
              {/* Render the current product */}
              <Product product={product} />
              {/* Render the next product if available */}
              {index + 1 < props.productList.length && (
                <Product product={props.productList[index + 1]} />
              )}
            </div>
          );
      }
        return null; // If the index is odd, render nothing (already rendered in previous iteration)
      })}
    </div>
  )
}
