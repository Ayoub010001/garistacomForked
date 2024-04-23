import * as React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "../../../components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./../../../components/ui/avatar";
import { Button } from "./../../../components/ui/button";
import { useLogin } from "../../../../actions/Authentification/LoginProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getUserById } from "../../../../actions/User/CreateUser";

function UserNav() {
  const navigate = useNavigate();
  const [userDat, setUserDat] = useState([])
  const { getUser, logout } = useLogin();
  const idUser = sessionStorage.getItem('dataItem');
  useEffect(() => {
    const getUserData = async () => {
      const userItem = await getUserById(idUser);
      console.log("The User Item => ", userItem.users);
      // if(userItem)
      // {
        userItem.map(obj =>  {
          console.log("The Items => ", obj);
          setUserDat(obj)
        })
      // }
    };
  
    getUserData();
  }, []);

  const handleLogout = () => {
    sessionStorage.setItem('isLoggedIn', "not loggin");
    logout(navigate)
  }


  // const { isLoggedIn, login, logout } = useLogin();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full ">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/public/avatar.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userDat.first_name + ' ' + userDat.last_name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {userDat.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="cursor-pointer">
          <DropdownMenuItem className="cursor-pointer" onClick={() => navigate('/Profile')}>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>

        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleLogout()} className="cursor-pointer">
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserNav;
