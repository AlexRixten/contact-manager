import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { apiRequest } from '../../../api/api';
import { Spinner } from '../../../components/spinner/Spinner';
import { ViewContactItem } from '../../../components/view-contact-item/ViewContactItem';

export const ViewContact = () => {
  const { contactId } = useParams();
  const [state, setState] = useState({
    loading: true,
    contact: [],
    errorMessage: '',
    group: {},
  });

  const getContact = async () => {
    try {
      let response = await apiRequest({
        url: `/contacts/${contactId}`,
      });
      let group = await apiRequest({
        url: `/groups/${response.groupId}`,
      });
      setState({
        ...state,
        loading: false,
        contact: response,
        group,
      });
    } catch (error) {
      setState({
        ...state,
        loading: false,
        errorMessage: error.message,
      });
    }
  };

  useEffect(() => {
    getContact();
  }, []);

  let { loading, contact, group, errorMessage } = state;

  return (
    <>
      <section className='view-contact-intro p-3'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p className='h4 text-warning fw-bold'>View Contact</p>
              <p className='fst-italic'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores totam incidunt reprehenderit quas ullam consectetur, obcaecati optio modi perspiciatis earum facere dolorem fugit. Veniam sed beatae commodi corporis, perspiciatis
                reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </section>
      {loading ? <Spinner /> : Object.keys(contact).length > 0 && Object.keys(group).length > 0 && <ViewContactItem key={contact.id} contact={contact} group={group} />}
    </>
  );
};
