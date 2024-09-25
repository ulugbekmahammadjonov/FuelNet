import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './components/config-navigation'
import './App.css'
import Header from './components/header';
import DataTable from './components/data-table';
import Footer from './components/footer';
import CustomCard from './components/card';
import Columns from './pages/Columns';
import Container from './components/UI/customContainer';
function App() {
  const routing = useRoutes(routes)

  return (
    <Container>
    <div style={{ display: "flex", flexDirection: "column",  }}>
      <Header />
      <Suspense fallback={<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>Loading...</div>}>
        {routing}
      </Suspense>
      <Footer />
      
    </div>
    </Container>
  )
}

export default App

