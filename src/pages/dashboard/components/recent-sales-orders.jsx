<<<<<<< HEAD
=======
import { useEffect, useState } from "react";
>>>>>>> 93a5acf9 (Init)
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
<<<<<<< HEAD

export function RecentSalesOrders() {
  return (
    <ScrollArea className="h-[350px] w-full rounded-md  p-4">
      <div className="space-y-8">
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/c2/78/76/c2787689c506fb61999d8c9d88bccaab.jpg"
            className="border border-black rounded-full w-9 h-9"
          />

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
          </div>
          <div className="ml-auto font-medium">199.00 MAD</div>
        </div>
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/c2/78/76/c2787689c506fb61999d8c9d88bccaab.jpg"
            className="border border-black rounded-full w-9 h-9"
          />

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
          </div>
          <div className="ml-auto font-medium">199.00 MAD</div>
        </div>
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/c2/78/76/c2787689c506fb61999d8c9d88bccaab.jpg"
            className="border border-black rounded-full w-9 h-9"
          />

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
          </div>
          <div className="ml-auto font-medium">199.00 MAD</div>
        </div>
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/c2/78/76/c2787689c506fb61999d8c9d88bccaab.jpg"
            className="border border-black rounded-full w-9 h-9"
          />

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
          </div>
          <div className="ml-auto font-medium">199.00 MAD</div>
        </div>
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/c2/78/76/c2787689c506fb61999d8c9d88bccaab.jpg"
            className="border border-black rounded-full w-9 h-9"
          />

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
          </div>
          <div className="ml-auto font-medium">199.00 MAD</div>
        </div>
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/c2/78/76/c2787689c506fb61999d8c9d88bccaab.jpg"
            className="border border-black rounded-full w-9 h-9"
          />
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Jackson Lee</p>
            {/* <p className="text-sm text-muted-foreground">jackson.lee@email.com</p> */}
          </div>
          <div className="ml-auto font-medium">39.00 MAD</div>
        </div>
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/c2/78/76/c2787689c506fb61999d8c9d88bccaab.jpg"
            className="border border-black rounded-full w-9 h-9"
          />

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
            {/* <p className="text-sm text-muted-foreground">
              isabella.nguyen@email.com
            </p> */}
          </div>
          <div className="ml-auto font-medium">299.00 MAD</div>
        </div>
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/c2/78/76/c2787689c506fb61999d8c9d88bccaab.jpg"
            className="border border-black rounded-full w-9 h-9"
          />

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">William Kim</p>
            {/* <p className="text-sm text-muted-foreground">will@email.com</p> */}
          </div>
          <div className="ml-auto font-medium">99.00 MAD</div>
        </div>
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/c2/78/76/c2787689c506fb61999d8c9d88bccaab.jpg"
            className="border border-black rounded-full w-9 h-9"
          />

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Sofia Davis</p>
            {/* <p className="text-sm text-muted-foreground">sofia.davis@email.com</p> */}
          </div>
          <div className="ml-auto font-medium">39.00 MAD</div>
        </div>
=======
import { axiosInstance } from "../../../../axiosInstance";

export function RecentSalesOrders({orders}) {
 console.log("The Orders SLICE => ", orders.slice(0, 10));

  const fetchOrderDetails = async (orderId) => {
    try {
      const response = await axiosInstance.get(`/api/order/${orderId}`);
      return response.data; // Assuming this returns the full order details including items
    } catch (error) {
      console.error("Failed to fetch order details:", error);
      return null; // Return null or appropriate error handling
    }
  };

  const OrderItemsCell = ({ orderId }) => {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(false);
  
    console.log("The Id => ", orderId);
    useEffect(() => {
      setLoading(true);
      fetchOrderDetails(orderId).then(data => {
        setItems(data.dishes); // Assuming the API returns an object with a dishes array
      });
      setLoading(false);
    }, [orderId]);
  
    if (loading) return <span>Loading...</span>;
    if (!items) return <span>No items</span>;
  
    return <span>{items.map(item => item.name).join(', ')}</span>; // Displaying item names as a string
  };

  return (
    <ScrollArea className="h-[350px] w-full rounded-md  p-4">
      <div className="space-y-8">
        {
          orders.length > 0 && orders.map((item, index) => {
            return(
            <div key={index} className="flex items-center">
              <img
                // src={`${APIURL}`}
                className="border border-black rounded-full w-9 h-9 bg-gray-300"
              />

              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{OrderItemsCell({orderId: item.id})}</p>
              </div>
              <div className="ml-auto font-medium">{parseInt(item.total).toFixed(2)} MAD</div>
            </div>
            )
          })
        }

>>>>>>> 93a5acf9 (Init)
      </div>
    </ScrollArea>
  );
}
