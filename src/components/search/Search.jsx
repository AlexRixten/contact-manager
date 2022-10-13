import React from "react";

export const Search = () => {
  return (
    <div className="contact-search">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form className="row">
              <div className="col">
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Names"
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-2">
                  <input
                    type="submit"
                    className="btn btn-outline-dark"
                    value="Search"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
