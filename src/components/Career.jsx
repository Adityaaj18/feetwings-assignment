import React from 'react'
import {
   AiOutlinePlus,
   AiOutlineCaretDown,
   AiOutlineUnorderedList,
   AiOutlineOrderedList
} from 'react-icons/ai'
import { FaBold, FaItalic, FaUnderline } from 'react-icons/fa'

const Career = () => {
   return (
      <div>
         <nav
            style={{ position: 'sticked', width: '100%', top: '0' }}
            className="navbar navbar-expand-lg navbar-light "
         >
            <div className="container-fluid">
               <img
                  src={require('../img/logo.png')}
                  alt=""
                  style={{ height: '40px' }}
               />

               <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
               >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                  <div className="">
                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           <a className="nav-link" aria-current="page" href="#">
                              Our Products
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#">
                              Insights
                           </a>
                        </li>
                        <li className="nav-item ">
                           <a className="nav-link" href="#">
                              Smart Yarn
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link">Contact</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </nav>
         <div style={{ marginTop: '120px' }} className="buisness-systems">
            <h2>Buisness Systems</h2>
            <div className="buisness-systems-card">
               <div className="card-container">
                  <h3>Buisness Systems Analyist - Financial Systems (Title)</h3>
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                     }}
                  >
                     <p style={{ fontSize: '18px', width: '80%' }}>
                        Systems team to help expand and maintain our Order to
                        Cash applications and its ecosystem. Your role will be
                        to help implement, administer, and optimize our business
                        systems and assistwith business process{' '}
                        <span style={{ fontWeight: 'bold' }}>
                           ( Short Description )
                        </span>
                     </p>
                     <ul style={{ paddingLeft: '0px' }}>
                        <li
                           style={{
                              listStyle: 'none',
                              fontSize: '18px',
                              color: '#4dff0f',
                              fontWeight: '500',
                              wordWrap: 'none'
                           }}
                        >
                           💲 Paid
                        </li>
                        <li
                           style={{
                              listStyle: 'none',
                              fontSize: '18px',
                              color: 'red',
                              fontWeight: '500',
                              wordWrap: 'none',
                              textAlign: 'center'
                           }}
                        >
                           ❤️Gratis
                        </li>
                     </ul>
                  </div>
                  <h4>Remote / Hybrid</h4>
               </div>
            </div>
         </div>
         <div className="career-dashboard">
            <h1 style={{ textAlign: 'center', marginBottom: '60px' }}>
               Career Dashboard
            </h1>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
               <input
                  className="form-input col-lg-7"
                  type="text"
                  placeholder="Title"
               />
               <input
                  className="form-input col-lg-4"
                  type="text"
                  placeholder="Title"
               />
            </div>
            <div
               style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '32px'
               }}
            >
               <input
                  className="form-input "
                  type="text"
                  placeholder="Location"
               />
               <div className="dropdown">
                  <div className="dropdown-select">
                     <span className="select">Job section</span>
                     <AiOutlineCaretDown />
                  </div>
                  <div className="dropdown-list">
                     <div className="dropdown-list-item">Buisness Systems</div>
                     <div className="dropdown-list-item">Design</div>
                     <div className="dropdown-list-item">Engineering</div>
                     <div className="dropdown-list-item">Finance</div>
                     <div className="dropdown-list-item">Human Resources</div>
                     <div className="dropdown-list-item">Legal</div>
                     <div className="dropdown-list-item">Marketing</div>
                     <div className="dropdown-list-item">Operations</div>
                     <div className="dropdown-list-item">Products</div>
                     <div className="dropdown-list-item">Sales</div>
                     <div className="dropdown-list-item">Support</div>
                  </div>
               </div>
               <div className="dropdown1">
                  <div className="dropdown-select1">
                     <span className="select">Workplace type</span>
                     <AiOutlineCaretDown />
                  </div>
                  <div className="dropdown-list1">
                     <div className="dropdown-list-item1">Full-time</div>
                     <div className="dropdown-list-item1">Part-time</div>
                     <div className="dropdown-list-item1">Contract</div>
                     <div className="dropdown-list-item1">Temporary</div>
                     <div className="dropdown-list-item1">Volunteer</div>
                     <div className="dropdown-list-item1">Internship</div>
                  </div>
               </div>
               <div className="dropdown">
                  <div className="dropdown-select">
                     <span className="select">Selected item</span>
                     <AiOutlineCaretDown />
                  </div>
                  <div className="dropdown-list">
                     <div
                        className="dropdown-list-item"
                        style={{ padding: '8px 20px' }}
                     >
                        <h4 style={{ fontSize: '18px' }}>On-Site</h4>
                        <p style={{ fontSize: '15px' }}>
                           Employees can come to work in person.
                        </p>
                     </div>
                     <div
                        className="dropdown-list-item"
                        style={{ padding: '8px 20px' }}
                     >
                        <h4 style={{ fontSize: '18px' }}>Hybrid</h4>
                        <p style={{ fontSize: '15px' }}>
                           Employees can work on-site and off-site.
                        </p>
                     </div>
                     <div
                        className="dropdown-list-item"
                        style={{ padding: '8px 20px' }}
                     >
                        <h4 style={{ fontSize: '18px' }}>On-Site</h4>
                        <p style={{ fontSize: '15px' }}>
                           Employees work off-site.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <input
               className="form-input col-lg-12"
               type="text"
               placeholder="Short Description (150 Words)"
               style={{
                  marginTop: '80px',
                  height: '60px',
                  fontSize: '22px'
               }}
            />
            <div className="job-description">
               <h3 style={{ paddingBottom: '20px' }}>Add a job description</h3>
               <h5>Description *</h5>
               <div className="icons-wrapper">
                  <FaBold className="icons" />
                  <FaItalic className="icons" />
                  <FaUnderline className="icons" />
                  <AiOutlineUnorderedList className="icons" />
                  <AiOutlineOrderedList className="icons" />
               </div>
               <textarea
                  style={{ width: '100%', borderRadius: '6px' }}
                  cols=""
                  rows="8"
               ></textarea>
               <h3 style={{ paddingTop: '30px' }}>Add Skills</h3>
               <h5 style={{ color: '#a5a5a5' }}>
                  Add skill keywords to make your job more visible to the right
                  candidate (Select up to 10)
               </h5>
               <button
                  type="button"
                  className="btn btn-outline-success"
                  style={{
                     borderRadius: '20px',
                     fontWeight: '500',
                     margin: '20px '
                  }}
               >
                  Add Skill{' '}
                  <AiOutlinePlus
                     style={{ fontSize: '18px', marginBottom: '3px' }}
                  />
               </button>
            </div>
         </div>
      </div>
   )
}

export default Career
