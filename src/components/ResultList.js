import React from "react";

function ResultList(props) {
  return (

    <table className="table">
  <thead>
    <tr>
      <th scope="col">Picture</th>
      <th scope="col"><span onClick = {() => props.sortBy("first")}>First</span></th>
      <th scope="col"><span onClick = {() => props.sortBy("last")}>last</span></th>
      <th scope="col"><span onClick = {() => props.sortBy("email")}>Email</span></th>
      <th scope="col"><span onClick = {() => props.sortBy("phone")}>Phone Number</span></th>
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
