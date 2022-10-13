import React from "react";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../../../index";
import { useParams } from "react-router-dom";
import { Spinner } from "../../../components/spinner/Spinner";
import { ViewContactItem } from "../../../components/view-contact-item/ViewContactItem";
import { viewContact, getGroupItem } from "../../../api/contacts";

export const ViewContact = () => {
  const { contactId } = useParams();

  const { data: contact, isLoading } = useQuery(
    ["contact", contactId],
    () => viewContact(contactId),
    {
      enabled: !!contactId,
    }
  );

  const contactGroupId = contact?.groupId;

  const { isSuccess, data: groupItem } = useQuery(
    ["groupItem", contactGroupId],
    () => getGroupItem(contactGroupId),
    {
      enabled: !!contactGroupId,
    }
  );

  return (
    <>
      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-warning fw-bold">View Contact</p>
              <p className="fst-italic">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores totam incidunt reprehenderit quas ullam consectetur,
                obcaecati optio modi perspiciatis earum facere dolorem fugit.
                Veniam sed beatae commodi corporis, perspiciatis reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </section>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(contact).length > 0 &&
        isSuccess && (
          <ViewContactItem
            key={contact.id}
            contact={contact}
            group={groupItem}
          />
        )
      )}
    </>
  );
};
