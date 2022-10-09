import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiRequest } from '../../../api/api';
import { ListItem } from '../../../components/list-item/ListItem';
import { Search } from '../../../components/search/Search';

export const ContactList = () => {
  const [state, setState] = useState({
    loading: false,
    contacts: [],
    errorMessage: '',
  });

  const getContact = async () => {
    let response = await apiRequest({
      url: '/contacts',
    });
    setState({
      loading: true,
      contacts: response,
      errorMessage: '',
    });
  };

  useEffect(() => {
    try {
      getContact();
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(state);
  return (
    <>
      <section className='contact-search p-5'>
        <div className='container'>
          <div className='grid'>
            <div className='row'>
              <div className='col'>
                <p className='h3 fw-bold'>
                  Contact Manager
                  <Link to={'/contacts/add'} className='btn btn-primary ms-2'>
                    <i className='fa fa-plus-circle me-2' />
                    New
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Search />
      </section>
      <section className='contact-list'>
        <div className='container'>
          <div className='row'>
            {state?.contacts?.map((contact) => (
              <ListItem key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
