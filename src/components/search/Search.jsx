import { useState } from "react";
import { queryClient } from "../../index";

export const Search = () => {
  const [search, setSearch] = useState("");

  const contacts = queryClient.getQueryData(["contacts"]);

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
                    className="btn btn-outline-dark"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
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
