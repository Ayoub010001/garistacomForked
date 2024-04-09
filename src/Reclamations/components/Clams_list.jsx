import { ComponentProps } from "react"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
// import { Separator } from "@/registry/new-york/ui/separator"
// import { Mail } from "@/app/(app)/examples/mail/data"
import { useMail } from "../use-mail"



export function MailList({ items }) {
  const [mail, setMail] = useMail()

  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {items.map((item) => (
          <button
            key={item.id}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
              mail.selected === item.id && "bg-muted"
            )}
            onClick={() =>
              setMail({
                ...mail,
                selected: item.id,
              })
            }
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex justify-between"style={{justifyContent:"space-between"}}>
                <div className="flex items-center gap-2 ">


                  <Avatar>
      <AvatarImage src="https://th.bing.com/th/id/OIP.2hAVCZRMcBjsE8AGQfWCVQHaHa?rs=1&pid=ImgDetMain" alt="@shadcn" className="h-8 w-8"/>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <div className="font-semibold">{item.name}</div>
                  {!item.read && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )}

                </div>

                <div
                  className={cn(
                    "ml-auto text-xs",
                    mail.selected === item.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {/* {formatDistanceToNow(new Date(item.date), {
                    addSuffix: true,
                  })} */}
                  <div className="text-neutral-500">5 months ago</div>
                </div>
              </div>
              {/* <div className="text-xs font-medium">{item.subject}</div> */}
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {item.text.substring(0, 300)}
            </div>
            {/* {item.labels.length ? (
              <div className="flex items-center gap-2">
                {item.labels.map((label) => (
                  <Badge key={label} >
                    {label}
                  </Badge>
                ))}
              </div>
            ) : null} */}
          </button>
        ))}
      </div>
    </ScrollArea>
  )
}

// function getBadgeVariantFromLabel(
//   label
// ) {
//   if (["work"].includes(label.toLowerCase())) {
//     return "default"
//   }

//   if (["personal"].includes(label.toLowerCase())) {
//     return "outline"
//   }

//   return "secondary"
// }
