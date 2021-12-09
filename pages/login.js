import LoginForm from '../components/dashboard/LoginForm'
import Nav from '../components/homepage/Nav'
import axios from 'axios'
export default function Login() {
  return (
    <div className="w-screen overflow-hidden">
      <Nav />
      <div className="flex flex-col items-center h-screen justify-center ">
        <LoginForm />
      </div>
    </div>
  )
}

export async function getServerSideProps({ req }) {
  const cookie = req?.headers.cookie ?? null
  if (!cookie) {
    return {
      props: {},
    }
  }

  const config = {
    headers: {
      cookie,
    },
  }

  try {
    const res = await axios.get(
      //Check if user is already logged in
      `${process.env.SERVER_URL}/api/isLoggedIn`,
      config
    )
    if (res.data.userValidate) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false,
        },
      }
    } else {
      return {
        props: {},
      }
    }
  } catch (e) {
    return {
      props: {},
    }
  }
}
