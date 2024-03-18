import OceaniaRegion from '@/components/oceania/OceaniaRegion';
import React from 'react'

export default function AustraliaPage() {
    const myText={
        text1:'Australia and New Zealand ⁞ Shared sweet moments', text2:'Out and about.', text3:'Renew the foodie in you.', text4:'Experience.', text5:'Blend in as an Aussie.', text6:'Try an Aussie or Kiwi chef.', text7:'You may also like.'
    };
    const countries =['New Zealand','Australia'];
    const cities =['Canberra','Sydney','Apia', 'Auckland'];
  return (
    <div>
        <OceaniaRegion text={myText} countries={countries} cities={cities} twoCountries />
    </div>
  )
}
