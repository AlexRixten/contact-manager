import { apiRequest } from "./api";

export const fetchContacts = async () => {
  const response = await apiRequest({
    url: "/contacts",
  });
  return response;
};

export const searchContacts = async (value) => {
  let searchParams = "";
  if (value) {
    searchParams = `?name_like=${value}`;
  }
  const response = await apiRequest({
    url: `/contacts${searchParams}`,
  });
  return response;
};

export const fetchGroups = async () => {
  const response = await apiRequest({
    url: "/groups",
  });
  return response;
};

export const getGroupItem = async (id) => {
  const response = await apiRequest({
    url: `/groups/${id}`,
  });
  return response;
};

export const createContact = async (params) => {
  const response = await apiRequest({
    type: "POST",
    url: "/contacts",
    postData: {
      company: params.companyValue,
      email: params.emailValue,
      groupId: params.groupId,
      mobile: params.mobileValue,
      name: params.nameValue,
      photo: params.photoUrlValue,
      title: params.titleValue,
    },
  });
  return response;
};

export const viewContact = async (id) => {
  const response = await apiRequest({
    url: `/contacts/${id}`,
  });
  return response;
};

export const updateContact = async (id, params) => {
  const response = await apiRequest({
    type: "PATCH",
    url: `/contacts/${id}`,
    postData: {
      company: params.companyValue,
      email: params.emailValue,
      groupId: params.groupId,
      mobile: params.mobileValue,
      name: params.nameValue,
      title: params.titleValue,
    },
  });
  return response;
};

export const deleteContact = async (id) => {
  const response = await apiRequest({
    type: "DELETE",
    url: `/contacts/${id}`,
  });
  return response;
};
