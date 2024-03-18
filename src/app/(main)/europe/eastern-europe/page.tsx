import EuropeRegion from '@/components/europe/EuropeRegion';
import React from 'react'

export default function EasternEuropePage() {
    const myText={
        text1:'Eastern Europe > Be captivated', text2:'Purely made for your joy.', text3:'Be our guest.', text4:'Come once, come again to these places.', text5:'Visit these places. Don’t forget to laugh more.', text6:'Wanna try more Baltic dishes? Book a chef of your choice.', text7:'Promoted'
    };
    const countries =['Hungary','Moldova','Poland', 'Bulgaria'];
    const cities =['Bucharest','Warsaw','Vilnius', 'Minsk'];
  return (
    <div>
        <EuropeRegion text={myText} countries={countries} cities={cities}/>
    </div>
  )
}
