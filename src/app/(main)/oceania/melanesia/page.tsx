import OceaniaRegion from '@/components/oceania/OceaniaRegion';
import React from 'react'

export default function MelanesiaPage() {
    const myText={
        text1:'Melanesia ⁞ Rediscover yourself', text2:'For the soul.', text3:'Scenic destinations with best food servings.', text4:'Essential places.', text5:'Experience and blend in.', text6:'Excellent for your convenience. Call a chef.', text7:'Promoted for you.'
    };
    const countries =['New Caledonia','Fiji','Solomon Islands','New Guinea'];
    const cities =['Noumea','Honiara','Lae', 'Thursday Island'];
  return (
    <div>
        <OceaniaRegion text={myText} countries={countries} cities={cities}/>
    </div>
  )
}
