import { useState } from 'react'
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { Button } from '../src/folders/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../src/folders/components/ui/card"
import { Input } from '../src/folders/components/ui/input'
import { Label } from '../src/folders/components/ui/label'

const App: React.FC = () => {
  const [passwordVisibility, setPasswordVisibility] = useState<"password" | "text">("password");

  const togglePasswordVisibility = () => {
    setPasswordVisibility(prevVisibility => prevVisibility === "password" ? "text" : "password");
  };

  return (
    <main className='flex flex-col h-screen justify-center items-center'>
      <Card className='w-1/3'>
        <CardHeader>
          <CardTitle>Login Form</CardTitle>
          <CardDescription />
        </CardHeader>
        <CardContent>
          <Label>Enter Email</Label>
          <Input type="email" />

          <Label>Password</Label>
          <div className='flex flex-row justify-center items-center relative w-full'>
            <Input type={passwordVisibility} className='pr-10'/>
            <Button size="icon" onClick={togglePasswordVisibility} className='absolute right-1 top-1/2 transform -translate-y-1/2'>
              {passwordVisibility === "text" ? <Eye /> : <EyeOff />}
            </Button> w-full
          </div>
        </CardContent>
        <CardFooter>
          <Button className='w-full'>Login</Button>
        </CardFooter>
      </Card>
    </main>
  )
}

export default App
