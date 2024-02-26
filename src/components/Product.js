import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <div className="card mb-3">
      <Link
        to={`/ItemDetails/${props.product._id}`}
        className="card-link"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.product.imgurl}
              className="img-fluid rounded-start"
              alt="Product"
              style={{ width: '150px', height: '130px' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.product.name}</h5>
              <p className="card-text"><b>MODEL: </b>{props.product.itemname}</p>
              <p className="card-text"><b>Price: </b>Rs.{props.product.price}</p>
              {/* <p className="card-text">Pricepassword1: Rs.{props.product._id}</p> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}


// import React from "react";
// import {Link} from "react-router-dom";
// // import {useState} from 'react';
// // import ItemDetails from './components/ItemDetails';




// export default function Product(props) {
//   return(

//     <div className="card mb-3">
//       <Link
//         to={{
//           pathname: "/ItemDetails",
//           state: {
//             itemname: props.product.itemname,
//             price: props.product.price,
//             itemdetails: props.product.itemdetails,
//           }
//         }}
//         className="card-link"
//         style={{ textDecoration: "none" }}
//       >
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img
//               src="https://media.istockphoto.com/id/171302954/photo/groceries.jpg?s=612x612&w=0&k=20&c=D3MmhT5DafwimcYyxCYXqXMxr1W25wZnyUf4PF1RYw8="
//               className="img-fluid rounded-start"
//               alt="Product"
//             />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <h5 className="card-title">{props.product.name}</h5>
//               <p className="card-text">Item name: {props.product.itemname}</p>
//               <p className="card-text">Price: Rs.{props.product.price}</p>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </div>

    
//   );
// }
