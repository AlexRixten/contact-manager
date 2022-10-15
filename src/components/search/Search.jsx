import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../index";
import { searchContacts } from "../../api/contacts";

import styles from "./Search.module.css";

export const Search = () => {
  const [search, setSearch] = useState("");

  const { mutate } = useMutation((values) => searchContacts(values), {
    onSuccess: (values) => {
      return queryClient.setQueryData(["contacts"], () => [...values]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(search);
  };

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form className="row" onSubmit={handleSubmit}>
              <div className="col">
                <div className="mb-2">
                  <label className={styles.label}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Names"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                    />
                    {search && (
                      <button
                        className={styles.closeBtn}
                        onClick={() => {
                          setSearch("");
                        }}
                      >
                        x
                      </button>
                    )}
                  </label>
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
