// import React, { createContext, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Textarea } from "@/components/ui/textarea"
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import {
//     DialogDescription,
//     DialogTitle,
//     DialogClose,
// } from "@/components/ui/dialog";
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select";
// import { useEffect } from 'react';
// import { getRoles } from '../../actions/Role/getRoles';
// import Uploader from './uploader';

// export const UserContext = createContext();

// const FormSchema = z.object({
//     email: z
//       .string({
//         required_error: "Please select an email to display.",
//       })
//       .email(),
//   })

// function AddDiche({ categries}) {
//     const { state } = useLocation();
//     const { handleSubmit } = useForm();
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//   })

//   function onSubmit(data) {
//    console.log("The data is: " + JSON.stringify(data));
//   }
 
//     const { names } = state == null ? "tes" : state.value;

//     console.log("qr",names)

//     const [user, setUser] = useState([{ nom: 'toto' },{ nom: 'titi' }]);
//     const [firstname,setFirstname] = useState("");
//     const [lastname,setLastname] = useState("");
//     const [email,setEmail] = useState("");
//     const [phone,setPhone] = useState("");
//     const [role,setRole] = useState("");
//     const [rolesData, setRolesData] = useState([]);
//     const [password,setPassword] = useState(""); // État pour stocker le rôle sélectionné
//     const [modalOpen, setModalOpen] = useState(false);
//     const [position, setPosition] = useState("bottom")
//     const [tableNames, setTableNames] = useState([]);
//     const [usersList, setUsersList] = useState([]);
//     const [updateFormState, setUpdateFormState] = useState(false);
//     const [deleteFormState, setDeleteFormState] = useState(false);
//     const handleRoleChange = (selectedRole) => {
//         console.log("The RoleSelected => ",selectedRole);
//         setRole(selectedRole);
//     };

//     const handleAddUser = () => {
//         const newUser = {
//             firstname: firstname,
//             lastname: lastname,
//             email: email,
//             phone: phone,
//             role: role // Utilisation de l'état du rôle sélectionné
//         };

//         setUsersList([...usersList, newUser]);
//         setFirstname("");
//         setLastname("");
//         setEmail("");
//         setPhone("");
//         setRole("");
//         console.log(usersList);
//         setModalOpen(false);
//     };

//     useEffect(() => {
//         const getRolesData = async() => {
//         const rolesres = await getRoles();
//         console.log("The rolles => ",rolesres);
//         setRolesData(rolesres)
//         }
    
//         getRolesData();
//     }, [])


//     console.log("ro => ", role);
//     return (
//      <>
//         <DialogTitle>Add a new User</DialogTitle>
//         <DialogDescription >Create a new user Lorem ipsum dolor sit amet consectetur </DialogDescription>
//         <div className="grid grid-cols-2 items-center gap-[50px] mt-3">
//             <div>
//             <Uploader />
//             </div>
//             <div className="flex flex-col gap-3 items-center justify-center w-full">
//                 {/* <div className="grid gap-3"> */}
//                     <Input type="text" placeholder="Title" className="w-full max-w-full p-2 border border-gray-300 rounded-md" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
//                     <Input type="text" placeholder="Normale Price" className="w-full max-w-full p-2 border border-gray-300 rounded-md" value={lastname} onChange={(e) => setLastname(e.target.value)} />
//                 {/* </div> */}
//                 <Textarea className="w-full max-w-full !block h-[200px] border-gray-300 "  placeholder="description" />
//                 {/* <div className="flex gap-3"> */}
//                     <Select onValueChange={(e) => handleRoleChange(e)}>
//                         <SelectTrigger className="w-full">
//                             <SelectValue placeholder="Select Categorie" />
//                         </SelectTrigger>
//                         <SelectContent>
//                             {
//                                 categries.map((obj, i) => (
//                                     <SelectItem key={i} value={obj.id}>{obj.name}</SelectItem>
//                                 ))
//                             }
//                         </SelectContent>
//                     </Select>
//                 {/* </div> */}
//             </div> 
//         </div>
//                 <DialogClose>
//                     <Button variant="outline" className="justify-center items-center bg-black !text-[#fff] hover:bg-black mt-5" onClick={handleAddUser}>Add User</Button>
//                 </DialogClose>
//      </>

//     );
// }

// export default AddDiche;
import React, { createContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    DialogDescription,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useEffect } from 'react';
import { getRoles } from '../../actions/Role/getRoles';
import Uploader from './uploader';

export const UserContext = createContext();

const FormSchema = z.object({
  firstname: z.string().nonempty(),
  lastname: z.string().nonempty(),
  email: z.string({
    required_error: "Please enter a valid email.",
  }).email(),
  phone: z.string().nonempty(),
  role: z.string().nonempty(),
});

function AddDiche({ categries }) {
  const { state } = useLocation();
  const { handleSubmit } = useForm();
  const { register, formState: { errors } } = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data) {
    console.log("The data is: " + JSON.stringify(data));
    handleAddUser()
  }

  const { names } = state == null ? "tes" : state.value;

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [rolesData, setRolesData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [position, setPosition] = useState("bottom")
  const [tableNames, setTableNames] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [updateFormState, setUpdateFormState] = useState(false);
  const [deleteFormState, setDeleteFormState] = useState(false);

  const handleRoleChange = (selectedRole) => {
    console.log("The RoleSelected => ", selectedRole);
    setRole(selectedRole);
  };

  const handleAddUser = () => {
    const newUser = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      role: role
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

  useEffect(() => {
    const getRolesData = async () => {
      const rolesres = await getRoles();
      console.log("The rolles => ", rolesres);
      setRolesData(rolesres)
    }

    getRolesData();
  }, [])

  console.log('the user => ', firstname , lastname);
  return (
    <>
      <DialogTitle>Add a new User</DialogTitle>
      <DialogDescription>Create a new user Lorem ipsum dolor sit amet consectetur </DialogDescription>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 items-center gap-[50px] mt-3">
          <div>
            <Uploader />
          </div>
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <Input type="text" placeholder="Title" value={firstname} className="w-full max-w-full p-2 border border-gray-300 rounded-md" onChange={(e) => setFirstname(e.target.value)} {...register("firstname")} />
            {errors.firstname && <p>{errors.firstname.message}</p>}
            <Input type="text" placeholder="normal Price" value={lastname}  className="w-full max-w-full p-2 border border-gray-300 rounded-md" onChange={(e) => setLastname(e.target.value)} {...register("lastname")} />
            {errors.lastname && <p>{errors.lastname.message}</p>}
            <Textarea className="w-full max-w-full !block h-[200px] border-gray-300 "  placeholder="Description" />
            <Select onValueChange={(e) => {handleRoleChange(e), console.log("the selected => ",)}}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Categorie" />
              </SelectTrigger>
              <SelectContent>
                {
                  categries.map((obj, i) => (
                    <SelectItem key={i} value={obj.name}>{obj.name}</SelectItem>
                  ))
                }
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* <DialogClose> */}
          <Button type="submit" variant="outline" className="justify-center items-center bg-black !text-[#fff] hover:bg-black mt-5">Add User</Button>
        {/* </DialogClose> */}
      </form>
    </>
  );
}

export default AddDiche;
