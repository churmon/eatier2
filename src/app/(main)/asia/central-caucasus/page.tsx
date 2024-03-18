import AsiaRegion from "@/components/asia/AsiaRegion";

export default function CentralAndCaucasusAsiaPage() {
    const myText={
        text1:'Central Asia and the Caucasus ⁞ Enrich your experiences', text2:'Untapped.', text3:'Have a different dish today.', text4:'Transcend into the culture, people and food.', text5:'Classical-stans.', text6:'Starved? Book yourself a chef and enjoy classical dishes.', text7:'Sponsored'
    };
    const countries =['Kazakhstan','Armenia','Turkmenistan', 'Azerbaijan'];
    const cities =['Tashkent','Georgia','Dushanbe', 'Uzbekistan'];
  return (
    <div>
        <AsiaRegion text={myText} countries={countries} cities={cities}/>
    </div>
  )
}
