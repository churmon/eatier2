import AsiaRegion from '@/components/asia/AsiaRegion'
import React from 'react'

export default function page() {
    const myText={
        text1:'Southern Asia ‖ Distinct, every time', text2:'A million reasons to come dine with us.', text3:'Just satisfying foodie moments.', text4:'Unparalleled tasty journeys.', text5:'Satisfying foodie experiences.', text6:'South Asia’s best chefs. Book one, now.', text7:'People also searched for'
    };
    const countries =['Maldives','Nepal','Bhutan', 'India'];
    const cities =['Dhaka','New Delhi','Lahore', 'Kathmandu'];
  return (
    <div>
      <AsiaRegion text={myText} countries={countries} cities={cities}/>
    </div>
  )
}
