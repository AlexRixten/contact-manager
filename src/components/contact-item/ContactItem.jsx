import React from 'react';
import { Link } from 'react-router-dom';

export const ContactItem = ({ contact }) => {
  const { company, email, groupId, id, mobile, name, photo, title } = contact;
  return (
    <>
      <div className='col-md-6'>
        <div className='card my-2'>
          <div className='card-body'>
            <div className='row d-flex align-items-center justify-content-around'>
              <div className='col-md-4'>
                <img src={photo} alt='default' className='contact-img' />
              </div>
              <div className='col-md-7'>
                <ul className='list-group'>
                  <li className='list-group-item list-group-item-action'>
                    Name: <span className='fw-bold'>{name}</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Mobile: <span className='fw-bold'>{mobile}</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Email: <span className='fw-bold'>{email}</span>
                  </li>
                </ul>
              </div>
              <div className='col-md-1 d-flex flex-column align-items-center'>
                <Link to={`/contacts/view/${id}`} className='btn btn-warning my-1'>
                  <i className='fa fa-eye' />
                </Link>
                <Link to={`/contacts/edit/${id}`} className='btn btn-primary my-1'>
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
    </>
  );
};
