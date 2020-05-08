import React from "react";

function UserSearch(props) {
  return (
    <form>
      <div className="container form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an employee by country or first name"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
        <button onClick={props.refreshPage} className="btn btn-primary ml-1 mt-3">
          Reset
        </button>
      </div>
    </form>
  );
}

export default UserSearch;
