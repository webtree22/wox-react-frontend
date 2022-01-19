import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  toggleRightSidebar() {
    document.querySelector('.right-sidebar').classList.toggle('open');
  }
  render () {
    return (
      <nav className="navbar p-0 fixed-top d-flex flex-row">
        <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo-mini" to="/"><img src={require('../../assets/images/logo-mini.svg')} alt="logo" /></Link>
        </div>
        <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
          <button className="navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <span className="mdi mdi-menu"></span>
          </button>

          <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item d-none d-lg-block">
              <a className="nav-link" href="!#" onClick={event => event.preventDefault()}>
                {/* <i className="mdi mdi-view-grid"></i> */}
                WRAP
              </a>
            </li>
            <Dropdown alignRight as="li" className="nav-item border-left">
              <Dropdown.Toggle as="a" className="nav-link count-indicator cursor-pointer">
                {/* <i className="mdi mdi-bell"></i> */}
                {/* <span className="count bg-danger"></span>*/}
                wMemo
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu navbar-dropdown preview-list">
                <Dropdown.Divider />
                <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-calendar text-success"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1"><Trans>Buy On Sushi</Trans></p>
                    <p className="text-muted ellipsis mb-0">
                    <Trans>Short helpful description</Trans>
                    </p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <h6 className="p-3 mb-0"><Trans>Add Token to Wallet</Trans></h6>
                <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-settings text-danger"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject mb-1"><Trans>WOX</Trans></h6>
                    <p className="text-muted ellipsis mb-0">
                    <Trans>Wox current status</Trans>
                    </p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-link-variant text-warning"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject mb-1"><Trans>Memo</Trans></h6>
                    <p className="text-muted ellipsis mb-0">
                    <Trans>Wox Memo</Trans>!
                    </p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                {/* <p className="p-3 mb-0 text-center"><Trans>See all notifications</Trans></p> */}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown alignRight as="li" className="nav-item border-left">
              <Dropdown.Toggle as="a" className="nav-link cursor-pointer no-caret">
                <div className="navbar-profile">
                  <p className="mb-0 d-none d-sm-block navbar-profile-name"><Trans>Connect Wallet is Goint to be a long long text</Trans></p>
                  <i className="mdi mdi-menu-down d-none d-sm-block"></i>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="navbar-dropdown preview-list navbar-profile-dropdown-menu">

                <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}  className="preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-logout text-danger"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1"><Trans>Connect Wallet</Trans></p>
                  </div>
                </Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
            <span className="mdi mdi-format-line-spacing"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
