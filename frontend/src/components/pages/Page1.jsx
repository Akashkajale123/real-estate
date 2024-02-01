import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div>
      <h1>Page1</h1>
      <table>
        <thead>
          <tr>
            <th>sr no</th>
            <th>name</th>
            <th>surname</th>
            <th><address></address></th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>niket</td>
                <td>warade</td>
                <td>talani</td>
            </tr>
        </tbody>
      </table>

     <Link to='/page2'> <button>navigate to page2</button></Link>
    </div>
  );
};

export default Page1;
