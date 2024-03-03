import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export function ChefProfile({image}:any) {
    return (
      <Avatar className="h-24 w-24 object-cover">
        <AvatarImage src={image} alt="@shadcn" />
        <AvatarFallback>Chef</AvatarFallback>
      </Avatar>
    )
  }
  