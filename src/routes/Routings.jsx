import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import BlogSingleView from "../components/BlogSingleView";
import BrowseCompanies from "../components/BrowseCompanies";
import BrowseFreelancers from "../components/BrowseFreelancers";
import BrowseJobs from "../components/BrowseJobs";
import BrowseProjects from "../components/BrowseProjects";
import Checkout from "../components/Checkout";
import CompanyBids from "../components/CompanyBids";
import CompanyBookmarks from "../components/CompanyBookmarks";
import CompanyDashboard from "../components/CompanyDashboard";
import CompanyJobs from "../components/CompanyJobs";
import CompanyMembers from "../components/CompanyMembers";
import CompanyMessages from "../components/CompanyMessages";
import CompanyNotifications from "../components/CompanyNotifications";
import CompanyPayments from "../components/CompanyPayments";
import CompanyProfile from "../components/CompanyProfile";
import CompanyReviews from "../components/CompanyReviews";
import CompanySetting from "../components/CompanySetting";
import ContactUs from "../components/ContactUs";
import ForgotPassword from "../components/ForgotPassword";
import HelpCenter from "../components/HelpCenter";
import JobSingleView from "../components/JobSingleView";
import MyFreelancerBids from "../components/MyFreelancerBids";
import MyFreelancerBookmarks from "../components/MyFreelancerBookmarks";
import MyFreelancerDashboard from "../components/MyFreelancerDashboard";
import MyFreelancerJobs from "../components/MyFreelancerJobs";
import MyFreelancerMessages from "../components/MyFreelancerMessages";
import MyFreelancerNotifications from "../components/MyFreelancerNotifications";
import MyFreelancerPayments from "../components/MyFreelancerPayments";
import MyFreelancerPortfolio from "../components/MyFreelancerPortfolio";
import MyFreelancerProfile from "../components/MyFreelancerProfile";
import MyFreelancerReviews from "../components/MyFreelancerReviews";
import MyFreelancerSetting from "../components/MyFreelancerSetting";
import OtherCompanyMembers from "../components/OtherCompanyMembers";
import OtherCompanyProfile from "../components/OtherCompanyProfile";
import OtherCompanyReviews from "../components/OtherCompanyReviews";
import OtherFreelancerPortfolio from "../components/OtherFreelancerPortfolio";
import OtherFreelancerProfile from "../components/OtherFreelancerProfile";
import OtherFreelancerReviews from "../components/OtherFreelancerReviews";
import OurBlog from "../components/OurBlog";
import PlanInvoice from "../components/PlanInvoice";
import PostAJob from "../components/PostAJob";
import PostAProject from "../components/PostAProject";
import PricingPlans from "../components/PricingPlans";
import PrivacyPolicy from "../components/PrivacyPolicy";
import ProjectSingleView from "../components/ProjectSingleView";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import SignupFreelancerProfile from "../components/SignupFreelancerProfile";
import SignupSelectProfile from "../components/SignupSelectProfile";
import SignupCompanyProfile from "../components/SingupCompanyProfile";
import Terms from "../components/Terms";
import ThankYou from "../components/ThankYou";
import TransactionInvoice from "../components/TransactionInvoice";

function Routings() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about-us" element={<About />} />
      <Route exact path="/blog-single-view" element={<BlogSingleView />} />
      <Route exact path="/browse-companies" element={<BrowseCompanies />} />
      <Route exact path="/browse-freelancers" element={<BrowseFreelancers />} />
      <Route exact path="/browse-jobs" element={<BrowseJobs />} />
      <Route exact path="/browse-projects" element={<BrowseProjects />} />
      <Route exact path="/checkout" element={<Checkout />} />
      <Route exact path="/company-bids" element={<CompanyBids />} />
      <Route exact path="/company-bookmarks" element={<CompanyBookmarks />} />
      <Route exact path="/company-dashboard" element={<CompanyDashboard />} />
      <Route exact path="/company-jobs" element={<CompanyJobs />} />
      <Route exact path="/company-members" element={<CompanyMembers />} />
      <Route exact path="/company-messages" element={<CompanyMessages />} />
      <Route exact path="/company-notifications" element={<CompanyNotifications />} />
      <Route exact path="/company-payments" element={<CompanyPayments />} />
      <Route exact path="/company-profile" element={<CompanyProfile />} />
      <Route exact path="/company-reviews" element={<CompanyReviews />} />
      <Route exact path="/company-setting" element={<CompanySetting />} />
      <Route exact path="/contact-us" element={<ContactUs />} />
      <Route exact path="/forgot-password" element={<ForgotPassword />} />
      <Route exact path="/help-center" element={<HelpCenter />} />
      <Route exact path="/job-single-view" element={<JobSingleView />} />
      <Route exact path="/my-freelancer-bids" element={<MyFreelancerBids />} />
      <Route exact path="/my-freelancer-bookmarks" element={<MyFreelancerBookmarks />} />
      <Route exact path="/my-freelancer-dashboard" element={<MyFreelancerDashboard />} />
      <Route exact path="/my-freelancer-jobs" element={<MyFreelancerJobs />} />
      <Route exact path="/my-freelancer-messages" element={<MyFreelancerMessages />} />
      <Route exact path="/my-freelancer-notifications" element={<MyFreelancerNotifications />} />
      <Route exact path="/my-freelancer-payments" element={<MyFreelancerPayments />} />
      <Route exact path="/my-freelancer-portfolio" element={<MyFreelancerPortfolio />} />
      <Route exact path="/my-freelancer-profile" element={<MyFreelancerProfile />} />
      <Route exact path="/my-freelancer-reviews" element={<MyFreelancerReviews />} />
      <Route exact path="/my-freelancer-setting" element={<MyFreelancerSetting />} />
      <Route exact path="/other-company-members" element={<OtherCompanyMembers />} />
      <Route exact path="/other-company-profile" element={<OtherCompanyProfile />} />
      <Route exact path="/other-company-reviews" element={<OtherCompanyReviews />} />
      <Route exact path="/other-freelancer-portfolio" element={<OtherFreelancerPortfolio />} />
      <Route exact path="/other-freelancer-profile" element={<OtherFreelancerProfile />} />
      <Route exact path="/other-freelancer-reviews" element={<OtherFreelancerReviews />} />
      <Route exact path="/our-blog" element={<OurBlog />} />
      <Route exact path="/plan-invoice" element={<PlanInvoice />} />
      <Route exact path="/post-a-job" element={<PostAJob />} />
      <Route exact path="/post-a-project" element={<PostAProject />} />
      <Route exact path="/pricing-plans" element={<PricingPlans />} />
      <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route exact path="/project-single-view" element={<ProjectSingleView />} />
      <Route exact path="/signin" element={<Signin />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/signup-freelancer-profile" element={<SignupFreelancerProfile />} />
      <Route exact path="/signup-select-profile" element={<SignupSelectProfile />} />
      <Route exact path="/signup-company-profile" element={<SignupCompanyProfile />} />
      <Route exact path="/terms" element={<Terms />} />
      <Route exact path="/thankyou" element={<ThankYou />} />
      <Route exact path="/transaction-invoice" element={<TransactionInvoice />} />
    </Routes>
  );
}

export default Routings;