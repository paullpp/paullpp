import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';

export default function App(props: React.PropsWithChildren) {
  const { children } = props;
  return (
    <>
      <Navbar />
      <div className="divider" />
      <div>
        {children || <Outlet />}
      </div>
    </>
  );
}
