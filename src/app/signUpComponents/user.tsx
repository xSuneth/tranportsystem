import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignUpComponent() {
  return (
    <Card className="mx-auto max-w-sm mt-10">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>


        <div className="grid gap-4">

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" required />
            </div>
          </div>


          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">User Name</Label>
              <Input id="user-name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Mobile Number</Label>
              <Input id="mobile" required />
            </div>
          </div>


          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>


          {/* <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div> */}


          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Confirm Password</Label>
              <Input id="password" type="password" 
              minLength={8} maxLength={20}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$" required />
            </div>
          </div>

          <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
          </div>

          <Button type="submit" className="w-full">
            Create an account
          </Button>


        </div>


        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="./login/page" className="underline">
            Sign in
          </Link>
        </div>


      </CardContent>
    </Card>
  )
}
