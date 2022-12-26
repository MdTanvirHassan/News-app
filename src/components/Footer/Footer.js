import React from 'react'

export default function Footer() {
  return (
    <div>
        <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      {/* <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <span className="bi" width="30" height="24"></span>
      </a> */}
      <span className="mb-3 mb-md-0 text-muted">&copy; 2022 NewsTime, Inc. All rights reserved.</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-dark" href='/'><i class="bi bi-twitter"width="24" height="24"></i></a></li>
      <li className="ms-3"><a className="text-dark" href='/instagram'><span className="" width="24" height="24"><i className="bi bi-instagram"></i></span></a></li>
      <li className="ms-3"><a className="text-dark" href='/facebook'><span className="" width="24" height="24"><i className="bi bi-facebook"></i></span></a></li>
    </ul>
  </footer>
</div>
    </div>
  )
}
