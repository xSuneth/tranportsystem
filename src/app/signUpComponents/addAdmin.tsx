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

export function AddAdmin() {
  return (
    <Card className="mx-auto max-w-sm mt-10">
      <CardHeader>
        <CardTitle className="text-2xl text-center font-bold">Update Admin</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
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

          <div className="grid gap-2">
            <Label htmlFor="admin-type">Admin Type</Label>
            <Input id="admin-type" className="hover:cursor-pointer" required />
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

          <Button type="submit" className="w-full hover:bg-red-500">
            Update Admin
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
