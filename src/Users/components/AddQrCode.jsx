import React, { createContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdAddBox } from 'react-icons/md';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormAdd } from './FormAdd';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import TabsDemo from '../../components/custom/tabs';
import QrCodeTemplate from './QrCodeTemplate';
import TabsDemoCustom from './TabsDemoCustom';
import { FaUserCircle } from "react-icons/fa";
import UpdateForm from './updateForm';
import { MdErrorOutline } from "react-icons/md";
import DeleteForm from './deleteForm';
import { UserCard } from './UserCard';

export const UserContext = createContext();

function AddQrCode() {
    const { state } = useLocation();

    const { names } = state == null ? "tes" : state.value;

    console.log("qr",names)

    const [user, setUser] = useState([{ nom: 'toto' },{ nom: 'titi' }]);
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [role,setRole] = useState("");
    const [password,setPassword] = useState(""); // État pour stocker le rôle sélectionné
    const [modalOpen, setModalOpen] = useState(false);
    const [tableNames, setTableNames] = useState([]);
    const [usersList, setUsersList] = useState([]);
       const handleRoleChange = (selectedRole) => {
        setRole(selectedRole);
    };

    const handleAddUser = () => {
        const newUser = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            role: role // Utilisation de l'état du rôle sélectionné
        };

        setUsersList([...usersList, newUser]);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPhone("");
        setRole("");
        console.log(usersList);
        setModalOpen(false);
    };

    return (
        <div className='flex gap-5'>
           <UserCard usersList={usersList}/>
            <Dialog>
                <DialogTrigger>
                    <Card className="w-[250px] h-[280px] border-dashed grid place-content-center">
                        <CardHeader className="text-center">
                            <CardTitle className="text-lg">Add managers or waiters for your restaurant</CardTitle>

                        </CardHeader>
                        <CardContent>
                            {tableNames.map((tableName, index) => (
                                <div key={index}>{tableName.nom}</div>
                            ))}
                            <UserContext.Provider value={user}>
                                <button
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#ffffff',
                                        width: '100%',
                                        height: '100%',
                                        border: 'none',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => {
                                        console.log('Icon clicked');
                                    }}
                                >
                                    <MdAddBox size={50} style={{ color: '#000' }} />
                                </button>
                            </UserContext.Provider>
                        </CardContent>
                    </Card>
                </DialogTrigger>
                <DialogContent className="max-w-[50rem]">
                  <DialogHeader>
                        <FormAdd/>
                  </DialogHeader>

                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddQrCode;