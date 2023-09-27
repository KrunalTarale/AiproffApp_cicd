import { useNavigate, Link } from 'react-router-dom'

const TopLinks = () => {

  const auth = localStorage.getItem('user')
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    navigate('/singup')
}

  return (
    <div className="absolute top-2 right-4 space-x-4 text-sm">
      {
        auth ?
      <Link  onClick={logout} className="text-blue-600 hover:underline">
        Logout
      </Link>
      :
      <Link to="/signin" className="text-blue-600 hover:underline">
        Sign In
      </Link>
      }
      <span className="text-black">|</span>
      <a href="#subscribe" className="text-blue-600 hover:underline">
        Subscribe
      </a>
    </div>
  );
};

export default TopLinks;
