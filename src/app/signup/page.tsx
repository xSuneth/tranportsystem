"use client";

import { Button } from "@/components/ui/button";
import { SignUpComponent } from "../signUpComponents/user";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "lucide-react";

export default function SignUpPage() {
  return (
    <><Card className="mx-auto max-w-sm mt-10 flex flex-center">
      <CardContent>
      
      <div className="mt-10">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
      </div><SignUpComponent />

      <div className="mt-4 text-center text-sm">
        Use 8 or more characters with a mix of letters, numbers & symbols
      </div>
    
      <Button type="submit" className="w-full mt-4">
        Create an account
      </Button>

      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="./login/page.tsx" className="underline">
          Sign
        </Link>
      </div>

      </CardContent>
    </Card>
    </>
  )
}
