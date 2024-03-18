import EuropeRegion from '@/components/europe/EuropeRegion';
import React from 'react'

export default function NorthernEuropePage() {
    const myText={
        text1:'Northern Europe Ξ Breathtaking experiences', text2:'Dare, delve and dine.', text3:'Wander out of your comfort.', text4:'Dine in these spectacular destinations.', text5:'Catch up on good old times with friends here.', text6:'Scandinavian, British and Baltic chefs are ready for you. Be in touch, now.', text7:'Wind down here.'
    };
    const countries =['Iceland','Lithuania','Finland', 'United Kingdom'];
    const cities =['Oslo','Scotland','Tallinn', 'Greenland'];
  return (
    <div>
        <EuropeRegion text={myText} countries={countries} cities={cities}/>
    </div>
  )
}
