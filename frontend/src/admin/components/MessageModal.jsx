const MessageModal = ({ message, closeModal }) => {

  if (!message) return null;


  return (
    <div className="
      fixed
      inset-0
      bg-black/70
      flex
      items-center
      justify-center
      z-50
    ">

      <div className="
        bg-slate-900
        text-white
        p-8
        rounded-2xl
        w-full
        max-w-lg
        border
        border-slate-700
      ">


        <div className="
          flex
          justify-between
          items-center
          mb-6
        ">

          <h2 className="
            text-2xl
            font-bold
          ">
            Message Details
          </h2>


          <button
            onClick={closeModal}
            className="
              text-red-400
              text-xl
              font-bold
            "
          >
            ✕
          </button>

        </div>



        <div className="space-y-3">

          <p>
            <strong>Name:</strong> {message.name}
          </p>


          <p>
            <strong>Email:</strong> {message.email}
          </p>


          <p>
            <strong>Subject:</strong> {message.subject}
          </p>


          <p>
            <strong>Date:</strong>{" "}
            {new Date(
              message.createdAt
            ).toLocaleDateString()}
          </p>


          <div>

            <strong>
              Message:
            </strong>

            <p className="
              mt-2
              bg-slate-800
              p-4
              rounded-lg
            ">
              {message.message}
            </p>

          </div>


        </div>



        <button
          onClick={closeModal}
          className="
            mt-6
            w-full
            bg-cyan-500
            text-black
            py-3
            rounded-lg
            font-semibold
          "
        >
          Close
        </button>


      </div>

    </div>
  );
};


export default MessageModal;