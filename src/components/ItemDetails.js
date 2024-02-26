
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetails() {
  const { _id } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    // Fetch item details from API using productId
    fetch(`http://localhost:5000/items/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setItemDetails(data); // Update state with fetched item details
      })
      .catch((error) => {
        console.error("Error fetching item details:", error);
      });
  }, [_id]);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          {itemDetails &&(<img
            src={itemDetails.imgurl}
            className="img-fluid rounded"
            alt="Product"
            style={{width:'500px',height:'400px'}}
          />
          )}
        </div>
        <div className="col-md-6">
          {itemDetails ? (
            <div>
              <h2>{itemDetails.itemname}</h2>
              <p><b>Price: </b>Rs.{itemDetails.price}</p>
              {/* Render other item details here */}
              <p><b>SPECS: </b>{itemDetails.itemdetailas}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;



// import React from "react";
// // import { useLocation } from "react-router-dom";

// function ItemDetails(props) {
//   const { itemname, price, itemdetails } = props.location.state;
//   return (
//     <div className="container">
//       <div className="row mt-5">
//         <div className="col-md-6">
//           <img
//             src="https://media.istockphoto.com/id/171302954/photo/groceries.jpg?s=612x612&w=0&k=20&c=D3MmhT5DafwimcYyxCYXqXMxr1W25wZnyUf4PF1RYw8="
//             className="img-fluid rounded"
//             alt="Product"
//           />
//         </div>
//         <div className="col-md-6">
//           {/* <h2>{props.product.name}</h2> 
//           <p>Item Name: {product.itemname}</p>
//           <p>Price: Rs.{product.price}</p>   */}
          
//           {/* <p>{itemname}{price}{itemdetails}</p> */}
//           <h1>hi bro</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ItemDetails;

