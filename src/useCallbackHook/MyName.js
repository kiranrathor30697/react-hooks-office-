import { memo } from "react";

const MyName = ({ name,addName }) => {
  console.log("child render");
  return (
    <>
      <h2>Add My Name</h2>
      
      {/* <button >Add Name</button> */}
    </>
  );
};

export default memo(MyName);