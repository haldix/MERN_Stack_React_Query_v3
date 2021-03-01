import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import GuestList from './pages/GuestList';
import CreateGuest from './pages/CreateGuest';
import UpdateGuest from './pages/UpdateGuest';
import Navbar from './components/Navbar';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={GuestList} />
          <Route exact path='/create' component={CreateGuest} />
          <Route exact path='/update/:id' component={UpdateGuest} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
