import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const ViewContact = () => {
  const { contactId } = useParams();
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
      <section className='view-contact mt-3'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-4'>
              <img src='https://cdn-icons-png.flaticon.com/512/219/219988.png' alt='default' className='contact-img' />
            </div>
            <div className='col-md-8'>
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
                <li className='list-group-item list-group-item-action'>
                  Company: <span className='fw-bold'>rajan@gmail.com</span>
                </li>
                <li className='list-group-item list-group-item-action'>
                  Title: <span className='fw-bold'>rajan@gmail.com</span>
                </li>
                <li className='list-group-item list-group-item-action'>
                  Group: <span className='fw-bold'>rajan@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <Link to={'/contacts/list'} className='btn btn-warning'>
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
