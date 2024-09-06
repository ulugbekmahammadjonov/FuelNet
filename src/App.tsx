import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './components/config-navigation'
import './App.css'
import Header from './components/header';
import DataTable from './components/data-table';
import Footer from './components/footer';
import CustomCard from './components/card';
import Columns from './pages/Columns';
function App() {
  const routing = useRoutes(routes)

  return (
    <div>
      <Header />
      <Suspense fallback={<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>Loading...</div>}>
        {routing}
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
