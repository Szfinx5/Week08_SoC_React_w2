const GetButton = ({ id, onClick, text }) => {
  return (
    <button id={id} onClick={onClick}>
      {text}
    </button>
  );
};

export default GetButton;
