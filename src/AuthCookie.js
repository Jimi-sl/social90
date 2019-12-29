import Cookies from 'universal-cookie';

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
 }

const cookies = new Cookies();

const fakeAuth = {
    isAuthenticated: cookies.get('login'),
    authenticate(cb) {
      cookies.set('login', makeid(8), { path: '/' });
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