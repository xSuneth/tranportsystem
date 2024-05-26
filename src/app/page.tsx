import Image from "next/image";
import LoginForm from "./login/page";
import SignUpPage from "./signup/page";
import { Admin } from "./signUpComponents/admin";
import AddUserPage from "./signup/addUser";
import UpdateUserPage from "./signup/updateUser";

export default function Home() {
  return (
    <div className="bg-'background-image'">
      {/* <LoginForm/>
      <Admin/>
      <AddUserPage/>*/}
      <UpdateUserPage/>
    </div>
  )
    
}
