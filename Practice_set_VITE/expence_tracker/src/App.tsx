import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../src/shadcn/components/ui/card"
import LoginForm from './shadcn/components/molecules/loginform';

const App: React.FC = () => {

  return (
    <main className='flex flex-col h-screen justify-center items-center'>
      <Card className='w-1/3'>
        <CardHeader>
          <CardTitle>Hello User</CardTitle>
          <CardDescription />
        </CardHeader>
        <CardContent>
          <LoginForm></LoginForm>
        </CardContent>
      </Card>
    </main>
  )
}

export default App
