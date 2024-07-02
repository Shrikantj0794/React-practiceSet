import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../src/shadcn/components/ui/card"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './shadcn/components/molecules/loginform'
import Register from './shadcn/components/molecules/registration'
import Home from '../src/main_pages/Home'

const App: React.FC = () => {

  return (
    <main className='flex flex-col h-screen justify-center items-center'>
      <Card className='w-1/3'>
        <CardHeader>
          <CardDescription />
        </CardHeader>
        <CardContent>
        <BrowserRouter>
      <Routes>
        <Route index Component={Home}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/register' Component={Register}></Route>
      </Routes>
      </BrowserRouter>
        </CardContent>
      </Card>
    </main>
  )
}

export default App
