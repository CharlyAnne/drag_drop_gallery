import LoginBtn from './Btn';
import '../index.css';

function Header() {
  return (
    <header className="mb-2 flex flex-wrap items-center justify-between p-4">
      <h2 className="logo">DragNDrop Gallery</h2>

      <LoginBtn to="/login">Log In</LoginBtn>
    </header>
  );
}

export default Header;
