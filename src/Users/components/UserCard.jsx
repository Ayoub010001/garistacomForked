import React, { createContext, useState } from 'react';
import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiDotsVerticalRounded } from "react-icons/bi";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { FaUserCircle } from "react-icons/fa";
import UpdateForm from './updateForm';
import DeleteForm from './deleteForm';
export const UserCard = ({usersList }) => {
    const [updateFormState, setUpdateFormState] = useState(false);
    const [deleteFormState, setDeleteFormState] = useState(false);
    const [position, setPosition] = useState("bottom")

  return (
    <div>
       {usersList.map((user, index) => (
                <div key={index}>
                    <Card className="w-[250px] h-[280px] ">
                        <DropdownMenu className="flex justify-end ">
                            <DropdownMenuTrigger asChild className="flex justify-end ">
                                <Button className="flex justify-end " style={{backgroundColor:"white"}}><BiDotsVerticalRounded size={25} color='black'/></Button>

                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                    <DropdownMenuItem onSelect={() => setUpdateFormState(true)}>Update</DropdownMenuItem>
                                    <DropdownMenuItem onSelect={() => setDeleteFormState(true)}>Delete</DropdownMenuItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <CardHeader className="flex text-center justify-end">
                            <CardTitle>{user.firstname} {user.lastname}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="m-5 ml-10 flex mt-0 gap-10 ">
                                <FaUserCircle size={100} className="w-19 h-19 m-auto"/>
                                <p>{user.role}</p>
                            </div>
                            <div className="justify-center text-zinc-500">{user.email}</div>
                        </CardContent>
                        <CardFooter className="justify-center"></CardFooter>
                    </Card>
                    <UpdateForm updateFormState={updateFormState} setUpdateFormState={setUpdateFormState} />
                    <DeleteForm deleteFormState={deleteFormState} setDeleteFormState={setDeleteFormState} />
                </div>
            ))}
    </div>
  )
}