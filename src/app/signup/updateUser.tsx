"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SignUpComponent } from "../signUpComponents/user";
import { Button } from "@/components/ui/button";

export default function UpdateUserPage() {
  return (
    <><div className="mt-10 ml-10">
      <div className="text-3xl font-bold">Admin-Dashboard</div>
      <div className="text-2xl">/Update-User</div>
    </div>
   
    <Card className="mx-auto max-w-sm mt-10 flex flex-center">
      <CardContent>
        <SignUpComponent />
    
      <Button type="submit" className="w-full mt-4">
        Update User
      </Button>

      </CardContent>
    </Card>
    </>
  )
}