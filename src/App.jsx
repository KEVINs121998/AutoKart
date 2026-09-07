import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Router/Router'
import AuthProvider from './Context/AuthContext'
import { InventoryProvider } from './Context/InventoryContext'

function App() {

  return (
   <>
   <AuthProvider>
     <InventoryProvider>
      <RouterProvider router={router} />
    </InventoryProvider>
    </AuthProvider>
   </>
  )
}

export default App
