import { useId } from 'react'

function UseId() {
  const id = useId();

  return (
    <form>
      <div>
         <h2>useId Hook</h2>
        <label htmlFor={`email-${id}`}>Email</label>
        <input id={`email-${id}`} type="text" placeholder='Your email' />
        {console.log(id)}
      </div>
      <div>
        <label htmlFor={`password-${id}`}>Password</label>
        <input id={`password-${id}`} type="password" placeholder='Your password' />
      </div>
    </form>
  );
}

export default UseId;














































// import { useId } from "react";
// import ".././App.css";
// export default function UseId() {
//    const FullName = useId();
//    const email = useId();
//    const term = useId();
// return (
// <form className="offset-4 w-25 border p-4">
//    <div >
//       <label htmlFor={FullName}>Full Name</label>
//       <input type="text" id={FullName} name="Full Name" />  {" "}
//    </div>
//    <div>
//      <label htmlFor={email}>Enter Email</label>
//      <input type="email" id={email} name="email" />
//    </div>
//    <div>
//      <input type="checkbox" id={term} name="term" />
//      <label htmlFor={term}>Agree with term</label>
//    </div>
//    <input type="submit" value="Submit" />
// </form>
// );
// }