import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

import MessageModal from "./components/MessageModal";

const Dashboard = () => {

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(true);

  const [filter, setFilter] = useState("all");

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  const [selectedMessage, setSelectedMessage] = useState(null);

  const messagesPerPage = 5;

  const totalMessages = messages.length;

  const navigate = useNavigate();

  const fetchMessages = async () => {

    try {

      const res = await axios.get("/contact");

      setMessages(res.data.data);

    } catch(error){

      console.log(error);

    } finally {

      setLoading(false);

    }

  };



  useEffect(()=>{
    fetchMessages();
  },[]);

  const filteredMessages = messages.filter((item)=>{

    const matchesFilter =
        filter === "all" ||
        item.status === filter;


    const matchesSearch =
        item.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||

        item.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||

        item.subject
        .toLowerCase()
        .includes(search.toLowerCase());


    return matchesFilter && matchesSearch;

    });


 
  const totalPages = Math.ceil(
    filteredMessages.length / messagesPerPage
  );


  const currentMessages =
    filteredMessages.slice(
      (page-1)*messagesPerPage,
      page*messagesPerPage
    );



  const deleteMessage = async(id)=>{

    const confirmDelete =
    window.confirm(
      "Are you sure you want to delete this message?"
    );


    if(!confirmDelete) return;


    try{

      await axios.delete(
        `/contact/${id}`
      );


      setMessages((prev)=>
        prev.filter(
          item=>item._id!==id
        )
      );


    }catch(error){

      console.log(error);

    }

  };



  const markAsRead = async(id)=>{

    try{

      await axios.patch(
        `/contact/${id}/read`
      );


      setMessages((prev)=>

        prev.map((item)=>

          item._id===id
          ?
          {
            ...item,
            status:"read"
          }
          :
          item

        )

      );


    }catch(error){

      console.log(error);

    }

  };

  const changeFilter=(value)=>{

    setFilter(value);

    setPage(1);

  };


  const logout = ()=>{

    localStorage.removeItem("token");

    navigate("/admin/login");

  };




  return (

    <div className="
      min-h-screen
      bg-slate-950
      text-white
      p-8
    ">


      {/* Header */}

      <div className="
        flex
        justify-between
        items-center
        mb-10
      ">

        <h1 className="
          text-4xl
          font-bold
        ">
          Admin Dashboard
        </h1>


        <button
          onClick={logout}
          className="
            bg-red-500
            px-5
            py-2
            rounded-lg
            font-semibold
            hover:bg-red-600
          "
        >
          Logout
        </button>


      </div>



      {/* Stats Cards */}

      <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
        mb-10
      ">


        <div className="
          bg-slate-900
          p-6
          rounded-xl
          border
          border-slate-800
        ">

          <p className="text-slate-400">
            Total Messages
          </p>

          <h2 className="
            text-4xl
            font-bold
            mt-2
            text-cyan-400
          ">
            {totalMessages}
          </h2>

        </div>

        
        <div className="
        bg-slate-900
        p-6
        rounded-xl
        ">

            <p className="text-slate-400">
            New Messages
            </p>

            <h2 className="
            text-4xl
            font-bold
            text-yellow-400
            ">

            {
            messages.filter(
            m=>m.status==="new" || !m.status
            ).length
            }

            </h2>

        </div>

        
        <div className="
          bg-slate-900
          p-6
          rounded-xl
          border
          border-slate-800
        ">

          <p className="text-slate-400">
            Status
          </p>

          <h2 className="
            text-3xl
            font-bold
            mt-3
            text-green-400
          ">
            Active
          </h2>

        </div>


        <div className="flex gap-4 mb-8">

            <button
            onClick={()=>{
            setFilter("all");
            setPage(1);
            }}
            className={`px-5 py-2 rounded-lg font-semibold
            ${filter==="all"
            ? "bg-cyan-500 text-black"
            : "bg-slate-800"
            }`}
            >
            All
            </button>


            <button
            onClick={()=>{
            setFilter("new");
            setPage(1);
            }}
            className={`px-5 py-2 rounded-lg font-semibold
            ${filter==="new"
            ? "bg-yellow-500 text-black"
            : "bg-slate-800"
            }`}
            >
            New
            </button>


            <button
            onClick={()=>{
            setFilter("read");
            setPage(1);
            }}
            className={`px-5 py-2 rounded-lg font-semibold
            ${filter==="read"
            ? "bg-green-500 text-black"
            : "bg-slate-800"
            }`}
            >
            Read
            </button>

        </div>
        <div className="
          bg-slate-900
          p-6
          rounded-xl
          border
          border-slate-800
        ">

          <p className="text-slate-400">
            Admin
          </p>

          <h2 className="
            text-2xl
            font-bold
            mt-3
          ">
            Prabhat
          </h2>

        </div>


      </div>

        <div className="mb-8">

            <input
            type="text"
            placeholder="Search messages..."
            value={search}
            onChange={(e)=>{
            setSearch(e.target.value);
            setPage(1);
            }}
            className="
            w-full
            md:w-96
            bg-slate-900
            border
            border-slate-700
            rounded-lg
            px-4
            py-3
            text-white
            outline-none
            "
            />

        </div>


      {
        loading ? (

          <p>
            Loading messages...
          </p>


        ) : (

          
          <div className="overflow-x-auto">


            <table className="
              w-full
              border
              border-slate-700
            ">


              <thead>

                <tr className="
                  bg-slate-900
                ">

                  <th className="p-4 border">
                    Name
                  </th>


                  <th className="p-4 border">
                    Email
                  </th>


                  <th className="p-4 border">
                    Subject
                  </th>


                  <th className="p-4 border">
                    Message
                  </th>


                  <th className="p-4 border">
                    Date
                  </th>


                <th className="p-4 border">
                Status
                </th>

                  <th className="p-4 border">
                    Action
                  </th>


                </tr>

              </thead>



              <tbody>


              {
                currentMessages.length === 0 ? (

                  <tr>

                    <td
                      colSpan="6"
                      className="
                        text-center
                        p-10
                        text-slate-400
                      "
                    >
                      No messages found
                    </td>

                  </tr>


                ) : (


                currentMessages.map((item)=>(

                  <tr
                    key={item._id}
                    className="
                      hover:bg-slate-900
                    "
                  >

                    <td className="p-4 border">
                      {item.name}
                    </td>


                    <td className="p-4 border">
                      {item.email}
                    </td>


                    <td className="p-4 border">
                      {item.subject}
                    </td>


                    <td className="p-4 border">
                      {item.message}
                    </td>

                    <td className="p-4 border">

                      {
                        new Date(
                          item.createdAt
                        ).toLocaleDateString()
                      }

                    </td>

                    <td className="p-4 border">

                        <span
                            className={`
                            px-3
                            py-1
                            rounded-full
                            text-sm
                            ${
                                item.status === "new"
                                ? "bg-yellow-500 text-black"
                                : "bg-green-500 text-black"
                            }
                            `}
                        >

                            {item.status || "new"}

                        </span>

                    </td>



                    <td className="p-4 border">


                    {
                        item.status === "new" && (

                        <button
                            onClick={() => markAsRead(item._id)}
                            className="
                            bg-green-500
                            hover:bg-green-600
                            px-4
                            py-2
                            rounded-lg
                            mr-2
                            font-semibold
                            mb-2
                            "
                        >
                            Mark Read
                        </button>

                        )
                    }


                    <button
                        onClick={() => setSelectedMessage(item)}
                        className="
                            bg-cyan-500
                            hover:bg-cyan-600
                            text-black
                            px-4
                            py-2
                            rounded-lg
                            font-semibold
                            mr-2
                            mb-2
                        "
                        >
                        View
                    </button>
                    <button
                        onClick={() =>
                        deleteMessage(item._id)
                        }
                        className="
                        bg-red-500
                        hover:bg-red-600
                        px-4
                        py-2
                        rounded-lg
                        font-semibold
                        "
                    >
                        Delete
                        setPage(1);
                    </button>
                    
                    </td>


                  </tr>
                  
                ))

                )
              }


              </tbody>


            </table>

            <div className="
            flex
            justify-center
            items-center
            gap-5
            mt-8
            ">


                <button

                disabled={page===1}

                onClick={()=>setPage(page-1)}

                className="
                bg-slate-800
                px-5
                py-2
                rounded-lg
                disabled:opacity-50
                mb-2
                "
                >

                Previous

                </button>



                <p>
                Page {page} of {totalPages || 1}
                </p>



                <button

                disabled={page>=totalPages}

                onClick={()=>setPage(page+1)}

                className="
                bg-slate-800
                px-5
                py-2
                rounded-lg
                disabled:opacity-50
                mb-2
                "

                >

                Next

                </button>


            </div>
          </div>

        )

        
      }

      <MessageModal
        message={selectedMessage}
        closeModal={() =>
            setSelectedMessage(null)
        }
      />
    </div>

  );

};


export default Dashboard;