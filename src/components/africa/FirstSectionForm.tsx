"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  craving: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  country: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  price: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

type colorType = {
  color?:any
}

export function FirstSectionForm({color}:colorType) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      craving: "",
      country: "",
      price: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row space-x-3 z-10 rounded-tl-xl sm:ml-3 mt-5 pb-5 ">
        <FormField
          control={form.control}
          name="craving"
          render={({ field }) => (
            <FormItem className="flex items-end text-gray-500 w-full">
              <FormLabel className="w-28">Craving for</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} className="bg-gray-100 border-b-gray-500 border-b-2 border-t-0 border-x-0 rounded-none  focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex items-end text-gray-500 w-full">
              <FormLabel className={`${color}`}>Country</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} className="bg-gray-100 border-b-gray-500 border-b-2 border-t-0 border-x-0 rounded-none  focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="flex items-end text-gray-500 w-full">
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} className="bg-gray-100 border-b-gray-500 border-b-2 border-t-0 border-x-0 rounded-none  focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant='ghost' className="bg-gray-100 text-gray-500 self-end">Search</Button>
      </form>
    </Form>
  )
}
