import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [error,setError] = useState("");

  const [loading,setLoading] = useState(false);

  const navigate = useNavigate();



  const handleLogin = async(e)=>{

    e.preventDefault();


    try{

      setLoading(true);
      setError("");



      const res = await axios.post(
        "/auth/login",
        {
          email,
          password,
        }
      );



      localStorage.setItem(
        "token",
        res.data.token
      );



      localStorage.setItem(
        "admin",
        JSON.stringify(res.data.admin)
      );



      navigate("/admin/dashboard");



    }
    catch(error){

      setError(
        error.response?.data?.message ||
        "Login failed"
      );

    }
    finally{

      setLoading(false);

    }

  };



  return (

    <div className="
      min-h-screen
      bg-slate-950
      flex
      items-center
      justify-center
    ">


      <form

        onSubmit={handleLogin}

        className="
          bg-slate-900
          p-8
          rounded-xl
          w-96
          border
          border-slate-800
        "

      >


        <h2 className="
          text-3xl
          text-white
          font-bold
          mb-6
        ">
          Admin Login
        </h2>



        {error && (

          <p className="
            text-red-400
            mb-4
          ">
            {error}
          </p>

        )}




        <input

          type="email"

          className="
            w-full
            mb-4
            p-3
            rounded
            bg-slate-800
            text-white
          "

          placeholder="Email"

          value={email}

          onChange={(e)=>
            setEmail(e.target.value)
          }

        />




        <input

          type="password"

          className="
            w-full
            mb-6
            p-3
            rounded
            bg-slate-800
            text-white
          "

          placeholder="Password"

          value={password}

          onChange={(e)=>
            setPassword(e.target.value)
          }

        />




        <button

          disabled={loading}

          className="
            w-full
            bg-cyan-500
            py-3
            rounded
            font-bold
            disabled:opacity-50
          "

        >

          {
            loading
            ?
            "Logging in..."
            :
            "Login"
          }


        </button>



      </form>


    </div>

  );

};


export default Login;