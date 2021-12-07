import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import AuthContext from '../../context/AuthContext'
export default function LoginForm() {
  const [formFields, setFormFields] = useState(null)
  const router = useRouter()
  const { login, error } = useContext(AuthContext)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = await login(formFields)
    if (user) router.push('/dashboard')
  }

  const handleChange = (value, id) => {
    const payload = { ...formFields }
    payload[id] = value
    setFormFields(payload)
  }
  return (
    <>
      <h2 className="font-mono font-bold text-xl md:text-2xl lg:text-4xl">
        Login with your admin credentials
      </h2>
      <form
        onSubmit={handleSubmit}
        action=""
        className="relative flex mt-8 flex-col gap-4"
      >
        <label htmlFor="email">
          Email:
          <input
            required
            onChange={(e) => handleChange(e.target.value, e.target.id)}
            className="w-full border-0 rounded-md shadow-sm bg-indigo-50"
            name="email"
            id="email"
            type="email"
          />
        </label>
        <label htmlFor="name">
          Password:
          <input
            onChange={(e) => handleChange(e.target.value, e.target.id)}
            className="w-full border-0 rounded-md shadow-sm bg-indigo-50"
            name="password"
            id="password"
            type="password"
          />
        </label>
        <button type="submit" className="btn-primary w-1/2 ml-auto mt-4">
          Login
        </button>
        {error && (
          <div className="absolute -bottom-20 p-2 transition bg-red-200 w-full text-center rounded-md text-red-800">
            {error}
          </div>
        )}
      </form>
    </>
  )
}
