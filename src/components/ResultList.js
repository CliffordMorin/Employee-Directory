import React from "react";

function ResultList(props) {
  return (

    <table class="table">
  <thead>
    <tr>
      <th scope="col">Picture</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
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
