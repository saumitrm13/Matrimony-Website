import React from 'react';
import { useRoutes } from 'react-router-dom';



import Profile from './Components/profilePage/profile';
import Login from './Components/loginPage/login';
//import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Slide from './Components/welcomePageFolder/Slide';
import WelcomePage from './Components/welcomePageFolder/WelcomePage_Main';
import SuggestionPage from './Components/suggestionsPage/SuggestionPage_Main'
import ChatPage from './Components/ChatPageFolder/ChatPage_Main';
import Register from './Components/registration/MainForm'
import LogoutPage from './Components/logoutPage/logoutPage';
import AboutUs from './Components/AboutUs';
import LearnMore from './Components/LearnMorePage';
import PolicyPage from './Components/Policy';
import InterestLists from './Components/InterestsListFolder/InterestsList';
const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <WelcomePage/> },
    { path: "register", element: <Register /> },
    { path: "profile", element: <Profile /> },
    { path: "filtration", element: <SuggestionPage /> },
    { path: "login", element: <Login /> },
    { path: "aboutus", element: <AboutUs /> },
    { path: "contactus", element: <ContactUs/>},
    { path: "learnMore", element: <LearnMore/>},
    { path: "slide", element: <Slide /> },
    { path: "chat", element: <ChatPage /> },
    { path: "logout",element:<LogoutPage/>},
    { path: "privacyPolicy", element: <PolicyPage/>},
    { path : "interestsList/:userId", element:<InterestLists/>}
  ]);

  return (
    <>
      {routes}
    </>
  );
}
  ;

function App() {
  return <AppRoutes />;
}

export default App;