import EuropeRegion from '@/components/europe/EuropeRegion';
import React from 'react'

export default function WesternEuropePage() {
    const myText={
        text1:'Western Europe Ͱ Only good times', text2:'Excellent cuisine.', text3:'Bring your camera along.', text4:'Wind down and enjoy d’licious dishes.', text5:'Discover more, laugh more.', text6:'On a rainy day, call a chef. Explore below.', text7:'Promoted'
    };
    const countries =['Luxembourg','Belgium','Portugal', 'France'];
    const cities =['Paris','Madeira','Brussels', 'Monaco'];
  return (
    <div>
        <EuropeRegion text={myText} countries={countries} cities={cities}/>
    </div>
  )
}
