import OceaniaRegion from '@/components/oceania/OceaniaRegion';
import React from 'react'

export default function MicronesiaPage() {
    const myText={
        text1:'Micronesia ⁞ Unmissable', text2:'Be back for more.', text3:'Reenergize here with exotic food.', text4:'In your bucket list? Simply be here.', text5:'Discover best places.', text6:'Chefs are for keeps. Pamper yourself with one.', text7:'Promoted'
    };
    const countries =['Pohnpei','Kiribati','Marshall Islands','Kosrae'];
    const cities =['Kolonia','Ngerulmud','Majuro', 'Tofol'];
  return (
    <div>
        <OceaniaRegion text={myText} countries={countries} cities={cities}/>
    </div>
  )
}
