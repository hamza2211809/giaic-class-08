import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
export default function Header (){
    return(
        <header className=" flex justify-between items-center gap-x-5">
        <div className="">
            
            <h1 className="">Hamza</h1>
        </div>
       
        <ul className="hidden md:block   ">
            
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
            
            <Sheet>
  <SheetTrigger className="md:hidden"><Menu /></SheetTrigger>
  <SheetContent>
    
  <ul className="">
            
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
  </SheetContent>
</Sheet>

        
        </header>
    )
}