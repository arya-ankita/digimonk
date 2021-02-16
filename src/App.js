import React from "react";
//import logo from './logo.svg';
import "./mmenu.min.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Home from "./compoment/Home";
import About from "./compoment/About";
import NewPortfolio from "./compoment/NewPortfolio";
import Blog from "./compoment/Blog";
import Blog_Details from "./compoment/Blog_Details";
import ContactUs from "./compoment/ContactUs";
import Paynow from "./compoment/Paynow";
import Gallery from "./compoment/Gallery";
import Android from "./compoment/Android";
import Career from "./compoment/Career";
import CareerDetails from "./compoment/CareerDetails";
import Webdevelopment from "./compoment/Webdevelopment";
import Iosdevelopment from "./compoment/Iosdevelopment";
import Digitalmarketing from "./compoment/Digitalmarketing";
import Seo from "./compoment/Seo";
import Socialmedia from "./compoment/Socialmedia";
import Contentmarket from "./compoment/Contentmarket";
import Paidadvertising from "./compoment/Paidadvertising";
import Emailmarket from "./compoment/Emailmarket";
import SeoServices from "./compoment/SeoServices";
import ReactNative from "./compoment/ReactNative";
import SmartTVApplication from "./compoment/SmartTVApplication";
import UXDesign from "./compoment/UXDesign";
import UIWireframe from "./compoment/UIWireframe";
import IdeationRequirement from "./compoment/IdeationRequirement";
import CloudWebStrategy from "./compoment/CloudWebStrategy";
import ProductLaunchStrategy from "./compoment/ProductLaunchStrategy";
import PerformanceTesting from "./compoment/PerformanceTesting";
import AutomationTesting from "./compoment/AutomationTesting";
import SecurityAudit from "./compoment/SecurityAudit";
import WebandAppTesting from "./compoment/WebandAppTesting";
import PaymentGatewayAPI from "./compoment/PaymentGatewayAPI";
import GoogleAPIs from "./compoment/GoogleAPIs";
import AuthenticationAPI from "./compoment/AuthenticationAPI";
import ShippingAPI from "./compoment/ShippingAPI";
import SocialNetworkingAPI from "./compoment/SocialNetworkingAPI";
import BusinessListingAPI from "./compoment/BusinessListingAPI";
import VoiceProcess from "./compoment/VoiceProcess";
import NonVoiceProcess from "./compoment/NonVoiceProcess";
import TechSupport from "./compoment/TechSupport";
import GoogleCloudServices from "./compoment/GoogleCloudServices";
import AWSCloud from "./compoment/AWSCloud";
import MicrosoftAzure from "./compoment/MicrosoftAzure";
import IBMClouds from "./compoment/IBMClouds";
import CustomApplicationServices from "./compoment/CustomApplicationServices";
import AndroidAppDevelopment from "./compoment/AndroidAppDevelopment";
import SwiftBasediOSDevelopment from "./compoment/SwiftBasediOSDevelopment";
import PHP from "./compoment/PHP";
import Python from "./compoment/Python";
import Java from "./compoment/Java";
import AngularJS from "./compoment/AngularJS";
import ReactJS from "./compoment/ReactJS";
import SpringBoot from "./compoment/SpringBoot";
import JSP from "./compoment/JSP";
import Bootstrap from "./compoment/Bootstrap";
import MEANStack from "./compoment/MEANStack";
import MERNStack from "./compoment/MERNStack";
import Wordpress from "./compoment/Wordpress";
import Drupal from "./compoment/Drupal";
import Joomla from "./compoment/Joomla";
import Magento from "./compoment/Magento";
import Shopify from "./compoment/Shopify";
import IBMWebsphereCommerce from "./compoment/IBMWebsphereCommerce";
import SalesforceCustomization from "./compoment/SalesforceCustomization";
import SalesforceIntegration from "./compoment/SalesforceIntegration";
import AdobeExperienceManager from "./compoment/AdobeExperienceManager";
import OffshoreDedicatedDeveloper from "./compoment/OffshoreDedicatedDeveloper";
import OnsiteResourcing from "./compoment/OnsiteResourcing";
import Review from "./compoment/Review";
import Team from "./compoment/Team";
import MainGallery from "./compoment/MainGallery";
import Common from "./compoment/Common";
// import Prototype from "./component/Prototype";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={NewPortfolio} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog-details" component={Blog_Details} />
          <Route exact path="/contactUs" component={ContactUs} />
          <Route exact path="/paynow" component={Paynow} />
          <Route exact path="/view-gallery" component={Gallery} />
          <Route exact path="/android-application" component={Android} />
          <Route exact path="/career" component={Career} />
          <Route exact path="/career-details" component={CareerDetails} />
          <Route exact path="/web-development" component={Webdevelopment} />
          <Route exact path="/ios-development" component={Iosdevelopment} />
          <Route exact path="/digital-marketing" component={Digitalmarketing} />
          <Route exact path="/seo" component={Seo} />
          <Route exact path="/social-media-marketing" component={Socialmedia} />
          <Route exact path="/content-marketing" component={Contentmarket} />
          <Route exact path="/paid-advertising" component={Paidadvertising} />
          <Route exact path="/email-marketing" component={Emailmarket} />
          <Route exact path="/seo-services" component={SeoServices} />
          <Route exact path="/react-Native" component={ReactNative} />
          <Route
            exact
            path="/smart-tv-application"
            component={SmartTVApplication}
          />
          <Route
            exact
            path="/ui/ux-design/web-and-mobile"
            component={UXDesign}
          />
          <Route exact path="/ui-wireframe" component={UIWireframe} />
          <Route
            exact
            path="/ideation-and-requirement"
            component={IdeationRequirement}
          />
          <Route
            exact
            path="/cloud-and-web-strategy"
            component={CloudWebStrategy}
          />
          <Route
            exact
            path="/product-launch-strategy"
            component={ProductLaunchStrategy}
          />
          <Route
            exact
            path="/performance-testing"
            component={PerformanceTesting}
          />
          <Route
            exact
            path="/automation-testing"
            component={AutomationTesting}
          />
          <Route exact path="/security-audit" component={SecurityAudit} />
          <Route
            exact
            path="/web-and-app-testing"
            component={WebandAppTesting}
          />
          <Route
            exact
            path="/payment-gateway-api"
            component={PaymentGatewayAPI}
          />
          <Route exact path="/google-APIs" component={GoogleAPIs} />
          <Route
            exact
            path="/authentication-API"
            component={AuthenticationAPI}
          />
          <Route exact path="/shipping-API" component={ShippingAPI} />
          <Route
            exact
            path="/social-networking-API"
            component={SocialNetworkingAPI}
          />
          <Route
            exact
            path="/business-listing-API"
            component={BusinessListingAPI}
          />
          <Route exact path="/bpo/voice-process" component={VoiceProcess} />
          <Route
            exact
            path="/bpo/non-voice-process"
            component={NonVoiceProcess}
          />
          <Route exact path="/bpo/tech-support" component={TechSupport} />
          <Route
            exact
            path="/google-cloud-services"
            component={GoogleCloudServices}
          />
          <Route exact path="/aws-cloud" component={AWSCloud} />
          <Route exact path="/microsoft-azure" component={MicrosoftAzure} />
          <Route exact path="/IBM-clouds" component={IBMClouds} />
          <Route
            exact
            path="/custom-application-services"
            component={CustomApplicationServices}
          />
          <Route
            exact
            path="/android-app-development"
            component={AndroidAppDevelopment}
          />
          <Route
            exact
            path="/swift-based-iOS-development"
            component={SwiftBasediOSDevelopment}
          />
          <Route
            exact
            path="/react-native-app-development"
            component={ReactNative}
          />
          <Route exact path="/php" component={PHP} />
          <Route exact path="/Python" component={Python} />
          <Route exact path="/java" component={Java} />
          <Route exact path="/angular-js" component={AngularJS} />
          <Route exact path="/react-js" component={ReactJS} />
          <Route exact path="/spring-boot" component={SpringBoot} />
          <Route exact path="/jsp" component={JSP} />
          <Route exact path="/bootstrap" component={Bootstrap} />
          <Route exact path="/mean-stack" component={MEANStack} />
          <Route exact path="/mern-stack" component={MERNStack} />
          <Route exact path="/wordpress" component={Wordpress} />
          <Route exact path="/drupal" component={Drupal} />
          <Route exact path="/joomla" component={Joomla} />
          <Route exact path="/magento" component={Magento} />
          <Route exact path="/shopify" component={Shopify} />
          <Route
            exact
            path="/IBM-websphere-commerce"
            component={IBMWebsphereCommerce}
          />
          <Route
            exact
            path="/salesforce-customization"
            component={SalesforceCustomization}
          />
          <Route
            exact
            path="/salesforce-integration"
            component={SalesforceIntegration}
          />
          <Route
            exact
            path="/adobe-experience-manager"
            component={AdobeExperienceManager}
          />

          <Route
            exact
            path="/offshore-dedicated-developer"
            component={OffshoreDedicatedDeveloper}
          />
          <Route exact path="/onsite-resourcing" component={OnsiteResourcing} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/meet-the-team" component={Team} />
          {/* <Route exact path="/Prototype" component={Prototype}/> */}
          <Route exact path="/gallery" component={MainGallery} />

          <Route path="/api-integration" exact component={Common} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
