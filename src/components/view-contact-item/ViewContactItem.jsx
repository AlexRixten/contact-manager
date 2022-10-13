import { Link } from "react-router-dom";

export const ViewContactItem = ({ contact, group }) => {
  const { company, email, groupId, id, mobile, name, photo, title } = contact;

  return (
    <section className="view-contact mt-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src={photo} alt="default" className="contact-img" />
          </div>
          <div className="col-md-8">
            <ul className="list-group">
              <li className="list-group-item list-group-item-action">
                Name: <span className="fw-bold">{name}</span>
              </li>
              <li className="list-group-item list-group-item-action">
                Mobile: <span className="fw-bold">{mobile}</span>
              </li>
              <li className="list-group-item list-group-item-action">
                Email: <span className="fw-bold">{email}</span>
              </li>
              <li className="list-group-item list-group-item-action">
                Company: <span className="fw-bold">{company}</span>
              </li>
              <li className="list-group-item list-group-item-action">
                Title: <span className="fw-bold">{title}</span>
              </li>
              <li className="list-group-item list-group-item-action">
                Group: <span className="fw-bold">{group.name}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link to={"/contacts/list"} className="btn btn-warning">
              Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
