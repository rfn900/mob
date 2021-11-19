import LoginForm from "../components/dashboard/LoginForm";
import axios from "axios";
export default function Login() {
  return (
    <div className="flex flex-col items-center h-screen justify-center ">
      <LoginForm />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const cookie = req?.headers.cookie;

  const config = {
    headers: {
      cookie: typeof cookie !== "undefined" ? cookie : "",
    },
  };
  try {
    const { data } = await axios.get(
      `${process.env.SERVER_URL}/api/isLoggedIn`,
      config
    );
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
}
