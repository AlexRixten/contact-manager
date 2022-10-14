import { queryClient } from "../../../index";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { viewContact, updateContact } from "../../../api/contacts";
import { Spinner } from "../../../components/spinner/Spinner";

export const EditContact = () => {
  const groups = queryClient.getQueryData(["groups"]);

  const navigate = useNavigate();
  const { contactId } = useParams();

  const { data: contact, isSuccess } = useQuery(
    ["contact", contactId],
    () => viewContact(contactId),
    {
      enabled: !!contactId,
    }
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { mutate } = useMutation((values) => updateContact(contactId, values), {
    onSuccess: () => {
      queryClient.invalidateQueries();
      queryClient.invalidateQueries(["contact", contactId]);
      navigate("/contacts/list", { replace: true });
    },
  });

  if (contact) {
    return (
      <section className="edit-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-primary fw-bold">Edit Contact</p>
              <p className="fst-italic">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores totam incidunt reprehenderit quas ullam consectetur,
                obcaecati optio modi perspiciatis earum facere dolorem fugit.
                Veniam sed beatae commodi corporis, perspiciatis reprehenderit.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            {isSuccess && (
              <>
                <div className="col-md-6">
                  <form onSubmit={handleSubmit(mutate)}>
                    <div className="mb-2">
                      <input
                        type="text"
                        defaultValue={contact.name}
                        className="form-control"
                        placeholder="Name"
                        {...register("nameValue", {
                          required: true,
                        })}
                        aria-invalid={errors.nameValue ? "true" : "false"}
                      />
                      {errors.nameValue?.type === "required" && (
                        <p role="alert">Name is required</p>
                      )}
                    </div>
                    <div className="mb-2">
                      <input
                        type="number"
                        defaultValue={contact.mobile}
                        className="form-control"
                        placeholder="Mobile"
                        {...register("mobileValue", {
                          required: true,
                        })}
                        aria-invalid={errors.mobileValue ? "true" : "false"}
                      />
                      {errors.mobileValue?.type === "required" && (
                        <p role="alert">Name is required</p>
                      )}
                    </div>
                    <div className="mb-2">
                      <input
                        type="email"
                        defaultValue={contact.email}
                        className="form-control"
                        placeholder="Email"
                        {...register("emailValue", {
                          required: true,
                        })}
                        aria-invalid={errors.emailValue ? "true" : "false"}
                      />
                      {errors.emailValue?.type === "required" && (
                        <p role="alert">Name is required</p>
                      )}
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        defaultValue={contact.company}
                        className="form-control"
                        placeholder="Company"
                        {...register("companyValue", {
                          required: true,
                        })}
                        aria-invalid={errors.companyValue ? "true" : "false"}
                      />
                      {errors.companyValue?.type === "required" && (
                        <p role="alert">Name is required</p>
                      )}
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        defaultValue={contact.title}
                        className="form-control"
                        placeholder="Title"
                        {...register("titleValue", {
                          required: true,
                        })}
                        aria-invalid={errors.titleValue ? "true" : "false"}
                      />
                      {errors.titleValue?.type === "required" && (
                        <p role="alert">Name is required</p>
                      )}
                    </div>
                    <div className="mb-2">
                      <select
                        className="form-control"
                        defaultValue={contact.groupId}
                        {...register("groupId")}
                      >
                        {/* <option value=''>Select a Group</option> */}
                        {groups?.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-primary"
                        value="Edit"
                      />
                      <Link to={"/contacts/list"} className="btn btn-dark ms-2">
                        Cancel
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <img
                    src={contact?.photo}
                    alt="default"
                    className="contact-img"
                    style={{ width: 250, height: 250 }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }
  return <Spinner />;
};
