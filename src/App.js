import logo from './logo.svg';
import './App.css';
import AllRoutes from './routes';
import Layout from './components/layout';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
   <>
    <Layout>
        <AllRoutes />
      </Layout>
      
      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
   </>
  );
}

export default App;
