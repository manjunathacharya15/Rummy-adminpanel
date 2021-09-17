
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faTimes,faUserTie,faMoneyCheckAlt,faHandHoldingUsd,faFileAlt,faFileContract, } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button,  Navbar,NavDropdown } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
// import ThemesbergLogo from "../assets/img/themesberg.svg";
// import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import ProfilePicture from "../assets/img/team/profile-picture-3.jpg";

export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  // const CollapsableNavItem = (props) => {
  //   const { eventKey, title, icon, children = null } = props;
  //   const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

  //   return (
  //     <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
  //       <Accordion.Item eventKey={eventKey}>
  //         <Accordion.Button as={Nav.Link} className="d-flex justify-content-between align-items-center">
  //           <span>
  //             <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span>
  //             <span className="sidebar-text">{title}</span>
  //           </span>
  //         </Accordion.Button>
  //         <Accordion.Body className="multi-level">
  //           <Nav className="flex-column">
  //             {children}
  //           </Nav>
  //         </Accordion.Body>
  //       </Accordion.Item>
  //     </Accordion>
  //   );
  // };

  const NavItem = (props) => {
    const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
        <Navbar.Brand className="me-lg-5" as={Link} to={Routes.DashboardOverview.path}>
          <Image src={"http://www.onlinewebfonts.com/icon"} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image src={ProfilePicture} className="card-img-top rounded-circle border-white" />
                </div>
                <div className="d-block">
                  <h6>Hi, Admin</h6>
                  <Button as={Link} variant="secondary" size="xs" to={Routes.Presentation.path} className="text-dark">
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
               <NavItem title="Pokker Admin Panel" link={Routes.DashboardOverview.path} image={"https://cdn.britannica.com/09/148309-050-AFB7AF13/gin-hand-Pokker.jpg"  } />
              <NavItem title="User Details" link={Routes.Alerts.path} icon={faUserTie} />
              <NavDropdown menuVariant="dark" eventKey="examples/"   title={<span><FontAwesomeIcon icon={faFileContract}/> Real Money Tables</span>} icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
              
                <NavItem title="Point Pokker " link={Routes.Buttons.path}  />
                <NavItem title="pool Pokker  "link={Routes.Forms.path}  />
                <NavItem title="Deal Pokker " link={Routes.Modals.path}  />
                
                <NavItem title="Papplu Pokker "  link={Routes.Navbars.path} />
                
                
              </NavDropdown>
              <NavDropdown menuVariant="dark" eventKey="examples/"   title={<span><FontAwesomeIcon icon={faFileContract}/> Practice Game Tables</span>} icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
                
                <NavItem title="Point Pokker " link={Routes.Tables.path}  />
                <NavItem title="pool Pokker  "  link={Routes.Tabs.path} />
                <NavItem title="Deal Pokker "  link={Routes.Toasts.path} />
                <NavItem title="Papplu Pokker "  link={Routes.Tooltips.path} />
                
                
              </NavDropdown>
              <NavDropdown menuVariant="dark" eventKey="examples/"   title={<span><FontAwesomeIcon icon={faFileContract}/> Tournaments</span>} icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
                <NavItem title="Create New Tournaments " link={Routes.Addtournament.path} />
                <NavItem title="Tournaments Details "  link={Routes.Tournamentdetails.path} />
                <NavItem title="Tournaments Transactions  " link={Routes.Tournamenttrans.path}  />
                
                
                
              </NavDropdown>
              <NavDropdown menuVariant="dark" eventKey="examples/"   title={<span><FontAwesomeIcon icon={faFileContract}/> Table Entry</span>} icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
                <NavItem title="Pool Pokker Table Entry " link={Routes.Navs.path} />
                <NavItem title="Point Pokker Table Entry "  link={Routes.Pagination.path} />
                <NavItem title=" Deal Pokker Table Entry " link={Routes.Popovers.path}  />
                <NavItem title=" Papplu Pokker Table Entry " link={Routes.Progress.path}  />
                
                
                
              </NavDropdown>
              {/* <NavItem title="Table Entry" link={Routes.Navs.path} icon={faUserTie} /> */}
              <NavItem title="Bonus Entry" link={Routes.bonusentry.path} icon={faUserTie} />
              <NavItem title="Player Details" link={Routes.Playerdetails.path} icon={faUserTie} />
              <NavItem title="Game Transaction Details" link={Routes.Gametransactions.path} icon={faUserTie} />
              <NavItem title="Player Transaction Details" link={Routes.Playertransactions.path} icon={faUserTie} />
              <NavItem title="Company Balance " link={Routes.Companybal.path} icon={faUserTie} />
              <NavItem title="Fund Transfer Report" link={Routes.Fundtransferreport.path} icon={faUserTie} />
              <NavItem title="Withdrawal Request" link={Routes.withdrawrequest.path} icon={faUserTie} />
              <NavItem title="Add fund to player account" link={Routes.Addfund.path} icon={faUserTie} />
              <NavItem title="Fund Details" link={Routes.Funddetails.path} icon={faUserTie} />
              <NavItem title="Bank Details" link={Routes.Bankdetails.path} icon={faUserTie} />
              {/* <NavItem title="Payment Details" link={Routes.Alerts.path} icon={faUserTie} /> */}
              <NavItem title="Verify Kyc" link={Routes.Verifykyc.path} icon={faUserTie} />
              {/* <NavDropdown menuVariant="dark" eventKey="examples/"   title={<span><FontAwesomeIcon icon={faFileContract}/> Configuration</span>} icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
                <NavItem title="Commission "  />
                <NavItem title="Email Configuration "  />
                <NavItem title="Sms Configuration  "  />
                <NavItem title="Payment Gateway Setting "  />
                <NavItem title="Social Configuration "  />
                <NavItem title="Base URL  "  />
                <NavItem title="IP Configuration "  />
                <NavItem title="IP Configuration Papplu "  />
                
                
              </NavDropdown> */}
              {/* <NavDropdown menuVariant="dark" eventKey="examples/"   title={<span><FontAwesomeIcon icon={faFileContract}/> Emails to Players</span>} icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
                <NavItem title="Send new Emails "  />
                <NavItem title="Sent Emails List "  />
                <NavItem title="Email Template  "  />
                
                
                
              </NavDropdown> */}
              {/* <NavDropdown menuVariant="dark" eventKey="examples/"   title={<span><FontAwesomeIcon icon={faFileContract}/> Send SMS</span>} icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
                <NavItem title="Send New Sms "  />
                <NavItem title="Sent SMS Details "  />
                <NavItem title="SMS template  "  />
                
                
                
              </NavDropdown>
              <NavDropdown menuVariant="dark" eventKey="examples/"   title={<span><FontAwesomeIcon icon={faFileContract}/> Notification To players</span>} icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
                <NavItem title="Send New Notification "  />
                <NavItem title="Sent Notification List "  />
            
                
                
                
              </NavDropdown> */}
              <NavDropdown menuVariant="dark" eventKey="examples/"   title={<span><FontAwesomeIcon icon={faFileContract}/> Promotions</span>} icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
                <NavItem title="Add Promotions " link={Routes.Addpromoations.path}  />
                <NavItem title="Promotions List " link={Routes.Promotionlist.path}  />
             
                
                
                
              </NavDropdown>
              <NavDropdown menuVariant="dark" eventKey="examples/"   title={<span><FontAwesomeIcon icon={faFileContract}/> Referral Program</span>} icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
                <NavItem title="Set Refferral Commission " link={Routes.Commission.path}  />
                <NavItem title="Commission Report  " link={Routes.Commissionreport.path} />
                <NavItem title="Commission Withdraw Request  " link={Routes.Commissionwithdraw.path}  />
                {/* <NavItem title="Sent Refer Email List "  /> */}
                <NavItem title="Add Banner"  link={Routes.Addbanner.path} />
                <NavItem title="Banner List  "  link={Routes.Bannerlist.path} />
                
                
              </NavDropdown>
              <NavItem title="Login History" link={Routes.Loginhistory.path} icon={faUserTie} />
              <NavItem title="Browser History" link={Routes.Browsehistory.path} icon={faUserTie} />
              <NavItem title="Contact Us Enquiry" link={Routes.Contactus.path} icon={faUserTie} />
              <NavItem title="Web Slider" link={Routes.Webslider.path} icon={faUserTie} />
              <NavItem title="Mobile Slider" link={Routes.Mobileslider.path} icon={faUserTie} />
              <NavItem title="Logo Upload" link={Routes.Logoupload.path} icon={faUserTie} />
              {/* <NavDropdown menuVariant="dark" eventKey="examples/"   title={<span><FontAwesomeIcon icon={faFileContract}/> Help & Support</span>} icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
                <NavItem title="Create Tickets "  />
                <NavItem title="Coupons List "  />
             
                
                
                
              </NavDropdown> */}
              <NavItem title="Freezed Points" link={Routes.Freezedreport.path} icon={faUserTie} />
              {/* <NavItem title="Report Card" link={Routes.Alerts.path} icon={faUserTie} /> */}

              
              {/* <NavItem title="Payments" link={Routes.Alerts.path} icon={faMoneyCheckAlt} /> 
              <NavItem title="Tournament" icon={faHandHoldingUsd} link={Routes.Accordions.path} />  */}
              {/* 
               <NavItem title="Settings" icon={faCog} link={Routes.Settings.path} />

              <CollapsableNavItem eventKey="tables/" title="Tables" icon={faTable}>
                <NavItem title="Bootstrap Table" link={Routes.BootstrapTables.path} />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="examples/" title="Page Examples" icon={faFileAlt}>
                <NavItem title="Sign In" link={Routes.Signin.path} />
                <NavItem title="Sign Up" link={Routes.Signup.path} />
                <NavItem title="Forgot password" link={Routes.ForgotPassword.path} />
                <NavItem title="Reset password" link={Routes.ResetPassword.path} />
                <NavItem title="Lock" link={Routes.Lock.path} />
                <NavItem title="404 Not Found" link={Routes.NotFound.path} />
                <NavItem title="500 Server Error" link={Routes.ServerError.path} />
              </CollapsableNavItem>

              <NavItem external title="Plugins" link="https://demo.themesberg.com/volt-pro-react/#/plugins/charts" target="_blank" badgeText="Pro" icon={faChartPie} />

              <Dropdown.Divider className="my-3 border-indigo" />

              <CollapsableNavItem eventKey="documentation/" title="Getting Started" icon={faBook}>
                <NavItem title="Overview" link={Routes.DocsOverview.path} />
                <NavItem title="Download" link={Routes.DocsDownload.path} />
                <NavItem title="Quick Start" link={Routes.DocsQuickStart.path} />
                <NavItem title="License" link={Routes.DocsLicense.path} />
                <NavItem title="Folder Structure" link={Routes.DocsFolderStructure.path} />
                <NavItem title="Build Tools" link={Routes.DocsBuild.path} />
                <NavItem title="Changelog" link={Routes.DocsChangelog.path} />
              </CollapsableNavItem>
              <CollapsableNavItem eventKey="components/" title="Components" icon={faBoxOpen}>
                <NavItem title="Accordion" link={Routes.Accordions.path} />
                <NavItem title="Alerts" link={Routes.Alerts.path} />
                <NavItem title="Badges" link={Routes.Badges.path} />
                <NavItem external title="Widgets" link="https://demo.themesberg.com/volt-pro-react/#/components/widgets" target="_blank" badgeText="Pro" />
                <NavItem title="Breadcrumbs" link={Routes.Breadcrumbs.path} />
                <NavItem title="Buttons" link={Routes.Buttons.path} />
                <NavItem title="Forms" link={Routes.Forms.path} />
                <NavItem title="Modals" link={Routes.Modals.path} />
                <NavItem title="Navbars" link={Routes.Navbars.path} />
                <NavItem title="Navs" link={Routes.Navs.path} />
                <NavItem title="Pagination" link={Routes.Pagination.path} />
                <NavItem title="Popovers" link={Routes.Popovers.path} />
                <NavItem title="Progress" link={Routes.Progress.path} />
                <NavItem title="Tables" link={Routes.Tables.path} />
                <NavItem title="Tabs" link={Routes.Tabs.path} />
                <NavItem title="Toasts" link={Routes.Toasts.path} />
                <NavItem title="Tooltips" link={Routes.Tooltips.path} />
              </CollapsableNavItem>
              <NavItem external title="Themesberg" link="https://themesberg.com" target="_blank" image={ThemesbergLogo} /> */}

            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
