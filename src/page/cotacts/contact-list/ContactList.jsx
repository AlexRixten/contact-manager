import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiRequest } from '../../../api/api';
import { ContactItem } from '../../../components/contact-item/ContactItem';
import { Search } from '../../../components/search/Search';
import { Spinner } from '../../../components/spinner/Spinner';

export const ContactList = () => {
  const [state, setState] = useState({
    loading: true,
    contacts: [],
    errorMessage: '',
  });

  const getContacts = async () => {
    try {
      // setState({ ...state, loading: true });
      let response = await apiRequest({
        url: '/contacts',
      });
      setState({
        ...state,
        loading: false,
        contacts: response,
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
    getContacts();
  }, []);

  let { loading, contacts, errorMessage } = state;
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
          <div className='row'>{loading ? <Spinner /> : contacts.length > 0 && contacts.map((contact) => <ContactItem key={contact.id} contact={contact} />)}</div>
        </div>
      </section>
    </>
  );
};
