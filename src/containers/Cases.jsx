import React, { useEffect, useState } from 'react';
import {Outlet, Link, useLocation} from "react-router-dom";

const Cases = () => {
  
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <Outlet />
    </main>
  );
}

export default Cases;