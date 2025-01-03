import { useNavigate } from 'react-router'
import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className='bg-zinc-950 container flex justify-center items-center'>
        <Card className='bg-purple text-white w-96'>
          <CardHeader>
            <CardTitle className='text-3xl font-light'>Bem vindo(a) <span className='text-purple-600 font-normal'>Piranha!</span></CardTitle>
          </CardHeader>
          <CardContent>
            <form className='flex flex-col gap-2 justify-center items-center'>
              <Input type='email' placeholder='Email' className='text-white w-80 h-12' />
              <Input type='password' placeholder='Senha' className='text-white w-80 h-12' />
              <Button variant="secondary" className='mt-5 min-w-24 text-base bg-purple-600 text-white' onClick={(e) => {
                e.preventDefault()
                navigate('/dashboard')
              }}>Login</Button>
            </form>
          </CardContent>
        </Card>

      </div>
    </>
  )
}

export default App
