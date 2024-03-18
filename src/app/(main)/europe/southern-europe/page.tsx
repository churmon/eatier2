import EuropeRegion from '@/components/europe/EuropeRegion';
import React from 'react'

export default function SouthernEuropePage() {
    const myText={
        text1:'Southern Europe ‖ Indulge', text2:'Return for more.', text3:'From our kitchen for your enjoyment.', text4:'Specially made for you from these places.', text5:'Dine out.', text6:'Book a chef now. Buon appetito!', text7:'Suggested'
    };
    const countries =['Montenegro','Italy','Romania', 'Greece'];
    const cities =['Andorra','Turin','Rome', 'Athens'];
  return (
    <div>
        <EuropeRegion text={myText} countries={countries} cities={cities}/>
    </div>
  )
}
