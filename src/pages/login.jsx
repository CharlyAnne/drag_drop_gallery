import { useState } from 'react';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
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
      alert(error.error_description || error.message || 'Error signing In');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-8">
      {loading ? (
        <Loader />
      ) : (
        <section className="flex bg flex-col items-center justify-center p-4">
          <h2 className="p-5 title text-4xl italic text-pink-600">Log In</h2>
          <p className="text-white-600">Please enter your credentials</p>
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
              className="w-full rounded-2xl p-2 outline-none focus:outline-pink-500"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
