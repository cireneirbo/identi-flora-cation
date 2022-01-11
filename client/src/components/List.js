import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import ConvertBase64 from './ConvertBase64';


function List() {

    return (
      <div>
          <h2>List</h2>

          <ConvertBase64 />
          <Outlet />

      </div>
    );

}

export default List;
