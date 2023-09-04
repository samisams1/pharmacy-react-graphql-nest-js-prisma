
import React, { useState } from "react";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SideMenu from './SideMenu';
import RoutePage from './RoutePage';
import Header from './Header';
const App: React.FC = () => {
  const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" })
const authLink = setContext(async (req, { headers }) => {
	const token = localStorage.getItem("token")
  
	return {
		...headers,
		headers: {
			Authorization: token ? `Bearer ${token}` : null
		}
	}
})

const link = authLink.concat(httpLink as any)
const client = new ApolloClient({
	link: link as any,
	cache: new InMemoryCache()
})
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
      <div>
        <ApolloProvider client={client}>
        <Header/>
      <RoutePage/>
    </ApolloProvider>
      </div>
    
  );
};

export default App;