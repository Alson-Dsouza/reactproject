import React from "react";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{height:80}}>
        <div className="container-fluid" style={{justifyContent:"center"}}>
          <a className="navbar-brand" href="#" style={{ textAlign: 'center', width: '15%',color:'#7FFFD4',border: '1px ridge #7FFFD4' }}>
                ALSON-STORE
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
