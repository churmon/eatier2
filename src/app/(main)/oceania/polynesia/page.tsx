import OceaniaRegion from '@/components/oceania/OceaniaRegion';
import React from 'react'

export default function PolynesiaPage() {
    const myText={
        text1:'Polynesia ⃝ Refresh, rediscover', text2:'Unforgettable experiences.', text3:'Discover amazing.', text4:'Never miss these places.', text5:'A must in your wish list.', text6:'Outstanding chefs make better food.', text7:'Sponsored'
    };
    const countries =['Tahiti','Easter Island','Tokelau','Tonga'];
    const cities =['Papeete','Mo’orea','Nuku’alofa', 'Alofi'];
  return (
    <div>
        <OceaniaRegion text={myText} countries={countries} cities={cities}/>
    </div>
  )
}
