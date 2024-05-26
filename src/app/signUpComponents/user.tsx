import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import axios from "axios";

export function SignUpComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      userName,
      mobile,
      email,
      password,
      confirmPassword,
    };

    try {
      const response = await axios.post("/users", userData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="mx-auto max-w-sm mt-7 flex flex-center">
      <CardContent>

      <div className="grid gap-4 mt-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" className="hover:cursor-pointer" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" className="hover:cursor-pointer" required />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">User Name</Label>
              <Input id="user-name" className="hover:cursor-pointer" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Mobile Number</Label>
              <Input id="mobile" className="hover:cursor-pointer" required />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              className="hover:cursor-pointer"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">Password</Label>
              <Input id="password" type="password" className="hover:cursor-pointer" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Confirm Password</Label>
              <Input
                id="password"
                type="password"
                minLength={8}
                maxLength={20}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$"
                className="hover:cursor-pointer"
                required
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
