const Notification = ({ message }) => {
  console.log("Notification message:", message);
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
