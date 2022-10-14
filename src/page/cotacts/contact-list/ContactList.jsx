import { queryClient } from "../../../index";
import { Link } from "react-router-dom";
import { ContactItem } from "../../../components/contact-item/ContactItem";
import { Search } from "../../../components/search/Search";
import { Spinner } from "../../../components/spinner/Spinner";

export const ContactList = () => {
  // const { data: contacts, isLoading } = useQuery(["contacts"], fetchContacts);
  const contacts = queryClient.getQueryData(["contacts"]);

  if (!contacts?.length) {
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
