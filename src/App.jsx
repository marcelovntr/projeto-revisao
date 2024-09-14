import { HomePage } from './pages/home'
import { Layout } from './template'
import { HistoryPage } from './pages/history'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { CycleProvider } from './context/cycle'

// import React from 'react' <-- pra usar o <React.Fragment>
// import NomeDoComponente from './pages/home'

function App() {
  return (
    <>
    <CycleProvider>
    <RouterProvider router={routes} />
      {/* <Layout title={'meu pau de óculos'}> */}
        {/* <HomePage /> */}
        {/* <HistoryPage /> */}
      {/* </Layout> */}
      </CycleProvider>
    </>
  )
}

export default App
// JSX

// export default App
