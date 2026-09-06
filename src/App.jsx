import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Router/Router'
import { InventoryProvider } from './Context/InventoryContext'

function App() {

  return (
   <>
     <InventoryProvider>
      <RouterProvider router={router} />
    </InventoryProvider>
   </>
  )
}

export default App
