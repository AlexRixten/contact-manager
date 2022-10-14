import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../index";
import { createContact } from "../../../api/contacts";

export function AddContact() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const groups = queryClient.getQueryData(["groups"]);

  const { mutate } = useMutation((values) => createContact(values), {
    onSuccess: (value) => {
      queryClient.setQueryData(["contacts"], (old) => [...old, value]);
      navigate("/contacts/list", { replace: true });
    },
  });

  return (
    <section className="add-contact p-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h4 text-success fw-bold">Create Contact</p>
            <p className="fst-italic">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              totam incidunt reprehenderit quas ullam consectetur, obcaecati
              optio modi perspiciatis earum facere dolorem fugit. Veniam sed
              beatae commodi corporis, perspiciatis reprehenderit.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit(mutate)}>
              <div className="mb-2">
                <input
                  type="text"
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
                  type="text"
                  className="form-control"
                  placeholder="Photo Url"
                  {...register("photoUrlValue", {
                    required: true,
                  })}
                  aria-invalid={errors.photoUrlValue ? "true" : "false"}
                />
                {errors.photoUrlValue?.type === "required" && (
                  <p role="alert">Name is required</p>
                )}
              </div>
              <div className="mb-2">
                <input
                  type="number"
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
                <select className="form-control" {...register("groupId")}>
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
                  className="btn btn-success"
                  value="Create"
                />
                <Link to="/contacts/list" className="btn btn-dark ms-2">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
