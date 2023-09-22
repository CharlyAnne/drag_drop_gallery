import { useState } from 'react';
import Loader from '../components/Loader';
import { Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
// import { BiLoader } from 'react-icons/bi';
import { supabase } from '../client';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loginsuccess, setLoginSuccess] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setLoginSuccess('Sign in successful! Hold on a sec');
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      if (!error) {
        navigate('/user');
        setEmail('');
        setPassword('');
      }
      return data;
    } catch (error) {
      console.log(error);
      let errorMessage =
        'Incorrect credentials! Please check your inputs and try again.';

      setError(errorMessage);
    } finally {
      setLoading(false);
      setLoginSuccess('');
    }
  };

  return (
    <section className="p-8">
      {loading ? (
        <Loader />
      ) : (
        <section className="flex bg flex-col items-center justify-center p-4">
          <h2 className="p-5 title text-4xl italic text-pink-600">Log In</h2>
          <p className="text-white">Please enter your credentials</p>
          {error && (
            <Alert className="rounded-lg small text-white" status="error">
              <AlertIcon />
              <AlertDescription className="error">{error}</AlertDescription>
            </Alert>
          )}
          {loginsuccess && (
            <Alert className="rounded-lg small text-white" status="success">
              <AlertIcon />
              {loginsuccess}
            </Alert>
          )}
          <form
            onSubmit={handleLogin}
            className="flex w-96 flex-col items-start justify-center gap-2 rounded-2xl border-4 border-pink-500 p-4"
            action=""
          >
            <label
              className="p-1 text-lg text-pink-600 font-medium"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className={`${
                error ? 'border-red-600' : ''
              } bg-transparent px-2 outline-none py-2 rounded-lg border w-full rounded-2xl p-2 outline-none focus:outline-pink-500`}
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError;
              }}
              required
            />
            <p className="text-sm white">Email: user@example.com</p>
            <label
              className="p-1 text-pink-600 text-lg font-medium"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="focus:outline-solid w-full rounded-2xl p-2 outline-none focus:outline-pink-500"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="text-sm white">Password: 1Password</p>
            <div className="center">
              <button className="w-20 rounded-full bg-pink-600 p-1 text-lg font-medium">
                Login
              </button>
            </div>
          </form>
        </section>
      )}
    </section>
  );
};

export default Login;
