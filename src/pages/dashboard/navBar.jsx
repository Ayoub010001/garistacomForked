import { useState, useEffect } from "react";
import Pusher from 'pusher-js';
import { formatDistanceToNow } from 'date-fns';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../../components/ui/dialog";
import { IoMdCopy } from "react-icons/io";
import { FaLink } from "react-icons/fa6";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { MdRestaurantMenu } from "react-icons/md";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem
} from "../../components/ui/dropdown-menu";
import TeamSwitcher from "../../pages/dashboard/components/team-switcher";
import UserNav from "../../pages/dashboard/components/user-nav";
import { QRCode } from "react-qrcode-logo";
import Spinner from "react-spinner-material";
import { getRestaurant } from "../../../actions/Restaurant/Restaurant";
import { getUserById } from "../../../actions/User/CreateUser";
import { axiosInstance } from "../../../axiosInstance";
import { useToast } from "@/components/ui/use-toast";
import Logo from "../../../public/Logos/garista.svg";
const customToastStyle = `
bg-[#28509E] text-white
`;
export default function NavBar() {
  const defaultPageURL = "https://votre-domaine.com/page";
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeURL, setQRCodeURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [userDat, setUserDat] = useState([]);
  const idUser = sessionStorage.getItem('dataItem');
  const [restoInfo, setRestoInfo] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [notificationsViewed, setNotificationsViewed] = useState(false);

  const { toast } = useToast();

  const fetchNotifications = async (id) => {
    try {
      const response = await axiosInstance.get(`/api/getNotifications/${id}`);
      setNotifications(response.data);
      setNotificationsViewed(false); // Reset notificationsViewed when fetching new notifications
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const restore = await sessionStorage.getItem('RestoInfo');
        if (restore) {
          let DataResto = JSON.parse(restore);
          DataResto.map((item) => {
            setRestoInfo(item);
            fetchNotifications(item.id);
          });
          setQRCodeURL(`https://admin.garista.com/theme/${DataResto[0].slug}`);
        }
      } catch (err) {
        console.log("The Error => ", err);
      }
    };
    getUserData();
  }, []);

  useEffect(() => {
    const pusher = new Pusher('84cd32aea0c4b858f18e', {
      cluster: 'eu',
      encrypted: true,
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('form-submited', function (data) {
      try {
        const newNotification = data.post;
        if (parseInt(newNotification.resto_id) === restoInfo.id) {
          toast({
            title: newNotification.title,
            className: customToastStyle,
          });
          setNotifications(prevNotifications => [newNotification, ...prevNotifications]);
          setNotificationsViewed(false); // Show red flag for new notification
        }
      } catch (error) {
        console.error('Error updating notifications:', error);
      }
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [restoInfo.id]);

  const baseUrl = `https://admin.garista.com/theme/${restoInfo.slug}?table_id=2`;
  const updateNotificationsReadStatus = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({
        ...notification,
        viewed: true,
      }))
    );
  };
  if (loading) {
    return (
      <div className='justify-center items-center flex h-screen'>
        <Spinner size={100} spinnerColor={"#28509E"} spinnerWidth={1} visible={true} style={{ borderColor: "#28509E", borderWidth: 2 }} />
      </div>
    );
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(baseUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <div className="border-b fixed top-0 left-0 w-full z-20 bg-white">
      <div className="flex h-16 items-center px-4">
        <div className="ml-auto flex items-center space-x-8" dir="rtl">
          <UserNav />
          <div className="w-1"></div>
          <Dialog>
            <DialogTrigger className="flex justify-center">
              <FaLink size={25} />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ marginRight: "0.5rem" }}>Your Menu</span>{" "}
                  <MdRestaurantMenu size={20} />
                </DialogTitle>
                <DialogDescription>
                  <div className="m-5 flex mt-10 gap-10 ">
                    <QRCode
                      id="qrcode-id-unique-nav"
                      value={baseUrl}
                      logoImage={Logo}
                      removeQrCodeBehindLogo={true}
                      logoPaddingStyle="circle"
                      qrStyle='squares'
                      logoWidth={40}
                      eyeRadius={5}
                      eyeColor="#28509E"
                      className="!w-[250px] !h-[2050px]"
                    />
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-center items-center ">
                <div className="relative z-0 flex">
                  <div className="flex items-center justify-center gap-2">
                    <div className="block w-full pl-2 rounded-r-none border-gray-600 shadow-sm focus:z-10 focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-600">
                      {qrCodeURL}
                    </div>
                    <div>
                      <button onClick={copyToClipboard} for="example8" className="flex items-center space-x-4 rounded-md rounded-l-none border border-gray-300 px-2.5 text-gray-700 hover:bg-gray-100">
                        <span>{copied ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <DropdownMenu
          onOpenChange={(isOpen) => {
            if (isOpen) {
              setNotificationsViewed(true);
              updateNotificationsReadStatus();
            }
          }}
          >
  <DropdownMenuTrigger asChild>
    <Button className="relative" size="icon" variant="ghost">
      <BellIcon className="h-6 w-6" />
      {!notificationsViewed && notifications.length > 0 &&
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500" />
      }
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuPortal>
    <DropdownMenuContent className="w-80 p-4">
      <DropdownMenuLabel className="mb-2 text-lg font-medium">Notifications</DropdownMenuLabel>
      <div className="space-y-4">
      {notifications.length === 0 ? (
  <p className="ml-5 text-sm text-gray-500 dark:text-gray-400">No notifications</p>
) : (
  notifications.slice(0, 3).map((notification, index) => {
    const { title, created_at, status } = notification;
    const timeAgo = formatDistanceToNow(new Date(created_at), { addSuffix: true });
    let iconComponent;

    switch (status) {
      case 'Claim':
        iconComponent = <BellIcon className="h-5 w-5 text-white" />;
        break;
      case 'Order':
        iconComponent = <ClipboardIcon className="h-5 w-5 text-white" />;
        break;
      case 'Waiter':
        iconComponent = <PhoneIcon className="h-5 w-5 text-white" />;
        break;
      default:
        iconComponent = <BellIcon className="h-5 w-5 text-white" />;
    }

    return (
      <div key={index} className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500 dark:bg-blue-500">
          {iconComponent}
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">{title}</p>
          <p className="text-sm text-muted-foreground">{timeAgo}</p>
        </div>
      </div>
    );
  })
)}
        </div>
    </DropdownMenuContent>
  </DropdownMenuPortal>
</DropdownMenu>
        </div>
        </div>
    </div>
  );
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}
function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}