import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {faSort} from "@fortawesome/free-solid-svg-icons"

function ResultList(props) {
  return (

    <table className="table">
  <thead>
    <tr>
      <th scope="col">Picture</th>
      <th scope="col"><span onClick = {(e) => props.sortEmployeesByName(e)}>First<FontAwesomeIcon icon={faSort} /></span></th>
      <th scope="col">last</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
    </tr>
  </thead>
  <tbody>
  {props.results.map(result => 
    <tr>
      <th scope="row"><img src={result.picture.thumbnail} alt={result.name.first} /></th>
      <td>{result.name.first}</td>
      <td>{result.name.last}</td>
      <td>{result.email}</td>
      <td>{result.phone}</td>
    </tr>
  )}
  </tbody>
</table>
  );
}

export default ResultList;
