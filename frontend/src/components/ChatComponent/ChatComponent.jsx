import React, { useEffect } from 'react';
import "./ChatComponent.css"

const ChatComponent = () => {

  // To get all the users from the db
      useEffect(() => {
        getAllUsers();
      }, []);

      const [allusers, setAllusers] = React.useState([]);
      const getAllUsers = async() => {
        const res = await fetch('http://localhost:1338/get-whatsapp-data');
        const data = await res.json();
        setAllusers(data);
        console.log(allusers);
      } 

  // To get the messages from the db

      const [getuserdata, setuserdata] = React.useState("");
      const getTableData = async (params) => {
        const res = await fetch(
          "http://localhost:1338/get-whatsappuserbyid/" + params.params
        );
        const data = await res.json();
        setuserdata(data[0]);
        console.log(getuserdata);
      };


      // To send the messages to the db and user

      const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleClick();
          setMessage("");
          // console.log(getuserdata.phonenumber);
        }
      };

      const [message, setMessage] = React.useState("");

      const handleChange = (event) => {
        setMessage(event.target.value);
      };
    
      const handleClick = async () => {
        console.log(message);
    
        const res = await fetch("http://localhost:1338/send-whatsapp-message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            phoneid: getuserdata.phoneid,
            phonenumber: getuserdata.phonenumber,
            message: message,
          }),
        });
        const data = await res.json();
      };

  return (
    // This is an example component
    <div className="container mx-auto shadow-lg rounded-lg">
      {/* Header */}
      <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
        <div className="font-semibold text-2xl">AiProff.ai</div>
        <div className="w-1/2">
        </div>
        <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
          RA
        </div>
      </div>
      {/* end header */}
      {/* Chatting */}
      <div className="flex flex-row justify-between bg-white">
        {/* chat list */}
        <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto user_list">
          {/* search compt */}
          <div className="border-b-2 py-4 px-2">
            <input
              type="text"
              placeholder="search chatting"
              className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
            />
          </div>
          {/* end search compt */}
          {/* user list */}

          {allusers.map((user,index) => {
            return (
              <div key={index} className="flex flex-row py-4 px-2 justify-center items-center border-b-2 cursor-pointer" onClick={() => getTableData({params: user.phonenumber})}>
                <div className="w-1/4">
                  <img
                    src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                    className="object-cover h-12 w-12 rounded-full"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <div className="text-lg font-semibold">{user.name}</div>
                  <span className="text-gray-500">Pick me at 9:00 AM</span>
                </div>
              </div>
            );
          })}

          {/* end user list */}
          
          {/* More user list items */}
        </div>
        {/* end chat list */}
        {/* message */}
        <div className="px-5 flex flex-col justify-between">
          <div className="flex flex-col mt-5 chat_box">


{getuserdata.messages?.map((user, index) => (
  <div key={index} className={`flex justify-${user.action === "send" ? "end" : "start"} mb-4`}>
    {user.action === "send" ? (
      <>
        <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
          {user.body}
        </div>
        <img
          src={user.avatarUrl || "https://source.unsplash.com/vpOeXr5wmR4/600x600"}
          className="object-cover h-8 w-8 rounded-full"
          alt=""
        />
      </>
    ) : (
      <>
        <img
          src={user.avatarUrl || "https://source.unsplash.com/vpOeXr5wmR4/600x600"}
          className="object-cover h-8 w-8 rounded-full"
          alt=""
        />
        <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
          {user.body}
        </div>
      </>
    )}
  </div>
))}


      {/* Normal demo messages */}
        {/* 
            <div className="flex justify-end mb-4">
              <div
                className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
              >
                Welcome to the group everyone!
              </div>
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-8 w-8 rounded-full"
                alt=""
              />
            </div>

            <div className="flex justify-start mb-4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              className="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <div
              className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              at praesentium, aut ullam delectus odio error sit rem. Architecto
              nulla doloribus laborum illo rem enim dolor odio saepe,
              consequatur quas?
            </div>
          </div> */}

            {/* More messages */}
          </div>
          {/* Input area */}
          <div className="py-5">
            <input
              className="w-full bg-gray-300 py-5 px-3 rounded-xl"
              type="text"
              placeholder="type your message here..."
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              value={message}
            />
          </div>
        </div>
        {/* end message */}
        {/* Additional info */}
        <div className="w-2/5 border-l-2 px-5">
          <div className="flex flex-col">
            <div className="font-semibold text-xl py-4">{getuserdata.name}</div>
            <img
              src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
              className="object-cover rounded-xl h-64"
              alt=""
            />
            <div className="font-semibold mt-5">Phone No: {getuserdata.phonenumber}</div>
            {/* <div className="font-semibold mb-4"></div> */}
            <div className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              perspiciatis!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
