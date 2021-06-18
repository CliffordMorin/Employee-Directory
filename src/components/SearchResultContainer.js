import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    resets: [],
    sortedUsers: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchEmployee();
  }

  searchEmployee = () => {
    API.search()
      .then((res) => {
        this.setState({ results: res.data.results, resets: res.data.results });
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value.toLowerCase();
    this.setState({
      [name]: value,
      results: this.state.resets.filter(employee => employee.name.first.toLowerCase().includes(value)),
    });
    console.log(value);
    // if (this.state.search === "") {
    //   this.setState({
    //     results: this.state.resets
    //   })
    // }
  };

  sortEmployeesByName = (event) => {
    
    event.preventDefault();
    console.log("Hi");
    const sortedUsers2 = this.state.results.sort((a, b) => {
      return a.name.first.toLowerCase().localeCompare(b.name.first.toLowerCase())
    })
    console.log(sortedUsers2);
    this.setState({
      sortedUsers: sortedUsers2
    })
  };

  // When the form is submitted, search the Employee API for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    let filterEmployees = this.state.results.filter((employee) =>
      employee.name.first.includes(this.state.search)
    );
    this.setState({
      results: filterEmployees,
    });
    // if (this.state.search === "") {
    //   this.setState({
    //     results: this.state.resets
    //   })
    // }
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList 
          results={this.state.results} 
          sortEmployeesByName={this.sortEmployeesByName}
        />
      </div>
    );
  }
}

export default SearchResultContainer;
