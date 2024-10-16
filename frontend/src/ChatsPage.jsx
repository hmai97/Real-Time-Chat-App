import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  // Function to handle sign out
  const handleSignOut = () => {
    // Clear any authentication data (you might have a method for this)
    props.onSignOut(); // Call the parent function if needed
    // Optionally, redirect or navigate to the login page
  };

  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
      <PrettyChatWindow
        projectId={"f710cb73-f643-462d-808f-7e1a64fa57b5"}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
      {/* Sign Out Button */}
      <button 
        onClick={handleSignOut} 
        style={{ 
          position: "absolute", 
          top: "10px", 
          left: "10px", 
          padding: "5px", 
          backgroundColor: "#bbb", 
          color: "black", 
          border: "none", 
          borderRadius: "90%",
          height:"40px",
          width:"40px" 
        }}>
        Sign out
      </button>
    </div>
  );
};

export default ChatsPage;
