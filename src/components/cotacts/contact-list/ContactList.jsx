import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../../search/Search';

export const ContactList = () => {
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
            <div className='col-md-6'>
              <div className='card'>
                <div className='card-body'>
                  <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-md-4'>
                      <img src='https://cdn-icons-png.flaticon.com/512/219/219988.png' alt='default' className='contact-img' />
                    </div>
                    <div className='col-md-7'>
                      <ul className='list-group'>
                        <li className='list-group-item list-group-item-action'>
                          Name: <span className='fw-bold'>Rajan</span>
                        </li>
                        <li className='list-group-item list-group-item-action'>
                          Mobile: <span className='fw-bold'>827842948392</span>
                        </li>
                        <li className='list-group-item list-group-item-action'>
                          Email: <span className='fw-bold'>rajan@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                    <div className='col-md-1 d-flex flex-column align-items-center'>
                      <Link to={`/contacts/view/:contactId`} className='btn btn-warning my-1'>
                        <i className='fa fa-eye' />
                      </Link>
                      <Link to={`/contacts/edit/:contactId`} className='btn btn-primary my-1'>
                        <i className='fa fa-pen' />
                      </Link>
                      <button className='btn btn-danger my-1'>
                        <i className='fa fa-trash' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
