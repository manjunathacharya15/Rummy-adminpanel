import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import Presentation from "./Presentation";
import Upgrade from "./Upgrade";
import DashboardOverview from "./dashboard/DashboardOverview";
import Transactions from "./Transactions";
import Settings from "./Settings";
import BootstrapTables from "./tables/BootstrapTables";
import Signin from "./examples/Signin";
import Signup from "./examples/Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";

// documentation pages
import DocsOverview from "./documentation/DocsOverview";
import DocsDownload from "./documentation/DocsDownload";
import DocsQuickStart from "./documentation/DocsQuickStart";
import DocsLicense from "./documentation/DocsLicense";
import DocsFolderStructure from "./documentation/DocsFolderStructure";
import DocsBuild from "./documentation/DocsBuild";
import DocsChangelog from "./documentation/DocsChangelog";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";


import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";
import Practicegame1 from "./components/practicegame1";
import Practicegame2 from "./components/practicegame2";
import Practicegame3 from "./components/practicegame3";
import Practicegame4 from "./components/practicegame4";
import Tournamenttrans from "./components/tournamenttrans";
import Playerdetails from "./components/playerdetails";
import Tournamentdetails from "./components/tournamentdetails";
import Companybal from "./components/companybal";
import Addtournament from "./components/addtournament";
import Playertransactions from "./components/playertransaction";
import Gametransactions from "./components/gametransactions";
import Gameresults from "./components/gameresult";
import bonusentry from "./components/bonusentry";
import Addcoupon from "./components/addcoupon";
import Addbanner from "./components/addbanner";
import Addfund from "./components/addfund";
import Commissionreport from "./components/commissionreport";
import Addpromoations from "./components/addpromoations";
import Baseurl from "./components/baseurl";
import Browsehistory from "./components/browsehistory";
import Bannerlist from "./components/bannerlist";
import Bankdetails from "./components/bankdetails";
import Commission from "./components/commission";
import Commissionwithdraw from "./components/commissionwithdraw";
import Promotionlist from "./components/promotionlist";
import Fundtransferreport from "./components/fundtransferreport";
import Withdrawrequest from "./components/withdrawrequest";
import Funddetails from "./components/funddetails";
import Verifykyc from "./components/verifykyc";
import Loginhistory from "./components/loginhistory";
import Contactus from "./components/Contactus";
import Webslider from "./components/webslider";
import Mobileslider from "./components/mobileslider";
import Logoupload from "./components/logoupload";
import Freezedreport from "./components/freezedreport";
import Createticket from "./components/createticket";
import Ticketlist from "./components/ticketlist";
import Refferalcommission from "./components/refferalcommission";
import Refferalemaillist from "./components/refferalemaillist";
import Newnotification from "./components/newnotification";
import Notificationlist from "./components/notificationlist";
import Newemail from "./components/newemail";
import Emaillist from "./components/emaillist";
import Newsms from "./components/newsms";
import Smslist from "./components/smslist";
import Emailcongig from "./components/emailconfig";
import Smsconfig from "./components/smsconfig";
import Socailconfig from "./components/socailconfig";
import Paymentgateway from "./components/paymentgateway";
import Reportcard from "./components/reportcard";
import Paymentdetails from "./components/paymentdetails";
const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
          <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithLoader exact path={Routes.Presentation.path} component={Presentation} />
    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
    <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />

    {/* pages */}
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.Upgrade.path} component={Upgrade} />
    <RouteWithSidebar exact path={Routes.Transactions.path} component={Transactions} />
    <RouteWithSidebar exact path={Routes.Settings.path} component={Settings} />
    <RouteWithSidebar exact path={Routes.BootstrapTables.path} component={BootstrapTables} />

    {/* components */}
    <RouteWithSidebar exact path={Routes.Accordions.path} component={Accordion} />
    <RouteWithSidebar exact path={Routes.Alerts.path} component={Alerts} />
    <RouteWithSidebar exact path={Routes.Badges.path} component={Badges} />
    <RouteWithSidebar exact path={Routes.Breadcrumbs.path} component={Breadcrumbs} />
    <RouteWithSidebar exact path={Routes.Buttons.path} component={Buttons} />
    <RouteWithSidebar exact path={Routes.Forms.path} component={Forms} />
    <RouteWithSidebar exact path={Routes.Modals.path} component={Modals} />
    <RouteWithSidebar exact path={Routes.Navs.path} component={Navs} />
    <RouteWithSidebar exact path={Routes.Navbars.path} component={Navbars} />
    <RouteWithSidebar exact path={Routes.Pagination.path} component={Pagination} />
    <RouteWithSidebar exact path={Routes.Practicegame1.path} component={Practicegame1} />
    <RouteWithSidebar exact path={Routes.Practicegame2.path} component={Practicegame2} />
    <RouteWithSidebar exact path={Routes.Practicegame3.path} component={Practicegame3} />
    <RouteWithSidebar exact path={Routes.Practicegame4.path} component={Practicegame4} />
    <RouteWithSidebar exact path={Routes.Tournamenttrans.path} component={Tournamenttrans} />
    <RouteWithSidebar exact path={Routes.Playerdetails.path} component={Playerdetails} />
    <RouteWithSidebar exact path={Routes.Tournamentdetails.path} component={Tournamentdetails} />
    <RouteWithSidebar exact path={Routes.Companybal.path} component={Companybal} />
    <RouteWithSidebar exact path={Routes.Addtournament.path} component={Addtournament} />
    <RouteWithSidebar exact path={Routes.Playertransactions.path} component={Playertransactions} />
    <RouteWithSidebar exact path={Routes.Gametransactions.path} component={Gametransactions} />
    <RouteWithSidebar exact path={Routes.bonusentry.path} component={bonusentry} />
    <RouteWithSidebar exact path={Routes.Gameresults.path} component={Gameresults} />
    <RouteWithSidebar exact path={Routes.Addcoupon.path} component={Addcoupon} />
    <RouteWithSidebar exact path={Routes.Addbanner.path} component={Addbanner} />
    <RouteWithSidebar exact path={Routes.Addfund.path} component={Addfund} />
    <RouteWithSidebar exact path={Routes.Commissionreport.path} component={Commissionreport} />
    <RouteWithSidebar exact path={Routes.Addpromoations.path} component={Addpromoations} />
    <RouteWithSidebar exact path={Routes.Browsehistory.path} component={Browsehistory} />
    <RouteWithSidebar exact path={Routes.Baseurl.path} component={Baseurl} />
    <RouteWithSidebar exact path={Routes.Bannerlist.path} component={Bannerlist} />
    <RouteWithSidebar exact path={Routes.Bankdetails.path} component={Bankdetails} />
    <RouteWithSidebar exact path={Routes.Commission.path} component={Commission} />
    <RouteWithSidebar exact path={Routes.Commissionwithdraw.path} component={Commissionwithdraw} />
    <RouteWithSidebar exact path={Routes.Promotionlist.path} component={Promotionlist} />
    <RouteWithSidebar exact path={Routes.Fundtransferreport.path} component={Fundtransferreport} />
    <RouteWithSidebar exact path={Routes.withdrawrequest.path} component={Withdrawrequest} />
    <RouteWithSidebar exact path={Routes.Funddetails.path} component={Funddetails} />
    <RouteWithSidebar exact path={Routes.Verifykyc.path} component={Verifykyc} />
    <RouteWithSidebar exact path={Routes.Loginhistory.path} component={Loginhistory} />
    <RouteWithSidebar exact path={Routes.Contactus.path} component={Contactus} />
    <RouteWithSidebar exact path={Routes.Webslider.path} component={Webslider} />
    <RouteWithSidebar exact path={Routes.Mobileslider.path} component={Mobileslider} />
    <RouteWithSidebar exact path={Routes.Logoupload.path} component={Logoupload} />
    <RouteWithSidebar exact path={Routes.Freezedreport.path} component={Freezedreport} />
    <RouteWithSidebar exact path={Routes.Createticket.path} component={Createticket} />
    <RouteWithSidebar exact path={Routes.Ticketlist.path} component={Ticketlist} />
    <RouteWithSidebar exact path={Routes.Refferalcommission.path} component={Refferalcommission} />
    <RouteWithSidebar exact path={Routes.Refferalemaillist.path} component={Refferalemaillist} />
    <RouteWithSidebar exact path={Routes.Newnotification.path} component={Newnotification} />
    <RouteWithSidebar exact path={Routes.Notificationlist.path} component={Notificationlist} />
    <RouteWithSidebar exact path={Routes.Newemail.path} component={Newemail} />
    <RouteWithSidebar exact path={Routes.Emaillist.path} component={Emaillist} />
    <RouteWithSidebar exact path={Routes.Newsms.path} component={Newsms} />
    <RouteWithSidebar exact path={Routes.Smslist.path} component={Smslist} />
    <RouteWithSidebar exact path={Routes.Emailcongig.path} component={Emailcongig} />
    <RouteWithSidebar exact path={Routes.Smsconfig.path} component={Smsconfig} />
    <RouteWithSidebar exact path={Routes.Socailconfig.path} component={Socailconfig} />
    <RouteWithSidebar exact path={Routes.Paymentgateway.path} component={Paymentgateway} />
    <RouteWithSidebar exact path={Routes.Reportcard.path} component={Reportcard} />
    <RouteWithSidebar exact path={Routes.Paymentdetails.path} component={Paymentdetails} />
    
    <RouteWithSidebar exact path={Routes.Popovers.path} component={Popovers} />
    <RouteWithSidebar exact path={Routes.Progress.path} component={Progress} />
    <RouteWithSidebar exact path={Routes.Tables.path} component={Tables} />
    <RouteWithSidebar exact path={Routes.Tabs.path} component={Tabs} />
    <RouteWithSidebar exact path={Routes.Tooltips.path} component={Tooltips} />
    <RouteWithSidebar exact path={Routes.Toasts.path} component={Toasts} />

    {/* documentation */}
    <RouteWithSidebar exact path={Routes.DocsOverview.path} component={DocsOverview} />
    <RouteWithSidebar exact path={Routes.DocsDownload.path} component={DocsDownload} />
    <RouteWithSidebar exact path={Routes.DocsQuickStart.path} component={DocsQuickStart} />
    <RouteWithSidebar exact path={Routes.DocsLicense.path} component={DocsLicense} />
    <RouteWithSidebar exact path={Routes.DocsFolderStructure.path} component={DocsFolderStructure} />
    <RouteWithSidebar exact path={Routes.DocsBuild.path} component={DocsBuild} />
    <RouteWithSidebar exact path={Routes.DocsChangelog.path} component={DocsChangelog} />

    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
