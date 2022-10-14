import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { ContactItem } from "../../../components/contact-item/ContactItem";
import { Search } from "../../../components/search/Search";
import { fetchContacts } from "../../../api/contacts";
import { Spinner } from "../../../components/spinner/Spinner";

export const ContactList = () => {
  // const contacts = queryClient.getQueryData(["contacts"]);
  const { isLoading, data: contacts } = useQuery(["contacts"], fetchContacts);
  // const groups = queryClient.getQueryData(['groups']);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="contact-search p-5">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">
                  Contact Manager
                  <Link to={"/contacts/add"} className="btn btn-primary ms-2">
                    <i className="fa fa-plus-circle me-2" />
                    New
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Search />
      </section>
      <section className="contact-list">
        <div className="container">
          <div className="row">
            {contacts?.map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
