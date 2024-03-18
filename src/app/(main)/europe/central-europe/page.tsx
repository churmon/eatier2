import EuropeRegion from '@/components/europe/EuropeRegion';
import React from 'react'

export default function CentralEuropePage() {
    const myText={
        text1:'Central Europe Ͱ For everyone', text2:'Rich experiences.', text3:'Elegant places, fine restaurants.', text4:'Freshly made for everyone, including you.', text5:'Scrumptious, all the time.', text6:'Chefs on dial, whenever. Do not hesitate, book one now.', text7:'Promoted'
    };
    const countries =['Slovenia','Germany','Slovakia', 'Austria'];
    const cities =['Berlin','Budapest','Krakow', 'Belgrade'];
  return (
    <div>
        <EuropeRegion text={myText} countries={countries} cities={cities}/>
    </div>
  )
}
