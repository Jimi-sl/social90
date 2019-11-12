import Cookies from 'universal-cookie';

const cookies = new Cookies();

const fakeAuth = {
    isAuthenticated: cookies.get('login'),
    authenticate(cb) {
      cookies.set('login', 'oset', { path: '/' });
      fakeAuth.isAuthenticated = cookies.get('login');
      ;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      cookies.remove('login');
      fakeAuth.isAuthenticated = cookies.get('login');
      setTimeout(cb, 100);
    }
  };
  export default fakeAuth;