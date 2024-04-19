import React from 'react';

function Navbar() {
  return (
    <header className="mt-3 mb-auto">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-center"> {/* Changed justify-content-lg-start to justify-content-lg-center */}
        <h3 className="mb-0">Comparing LLMs</h3> 
      </div>
    </header>
  );
}

export default Navbar;
