import RegisterForm from './RegisterForm'

const RegisterPage = () => {
  return (
    <>
      <main className="container px-20 w-full pt-100">
        <div className="sm:w-full md:w-450 mx-auto">
          <h1 className="text-center text-25 my-30">회원가입</h1>
          <RegisterForm />
        </div>
      </main>
    </>
  )
}

export default RegisterPage
