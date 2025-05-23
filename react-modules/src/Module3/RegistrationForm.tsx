import { useRef } from "react"

function RegistrationForm() {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(nameRef.current?.value, emailRef.current?.value, passwordRef.current?.value)
  }

  return (
    <div className="module-container">
      <h1>module 3 | Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nameRef} />
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegistrationForm