import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/nav-bar/NavBar';
import { AddContact } from './page/cotacts/add-contact/AddContact';
import { ViewContact } from './page/cotacts/view-contact/ViewContact';
import { EditContact } from './page/cotacts/edit-contact/EditContact';
import { ContactList } from './page/cotacts/contact-list/ContactList';
import './App.css';
import { NotFound } from './page/not-found/NotFound';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Navigate to={'/contacts/list'} />} />
        <Route path='/contacts/list' element={<ContactList />} />
        <Route path='/contacts/add' element={<AddContact />} />
        <Route path='/contacts/view/:contactId' element={<ViewContact />} />
        <Route path='/contacts/edit/:contactId' element={<EditContact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
