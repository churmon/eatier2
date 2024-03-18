import AmericaRegion from "@/components/america/AmericaRegion";

export default function CentralAmericaPage() {
    const myText={
        text1:'Central America // Blissful', text2:'Curated for your pleasure.', text3:'Be out there.', text4:'Places to venture out to.', text5:'More than one reason to be here.', text6:'Starved? Call a chef. Now.', text7:'Sponsored.'
    };
    const countries =['Colombia','Trinidad and Tobago','Costa Rica', 'Guatemala'];
    const cities =['Bogota','Cancun','Havana', 'Santa Domingo'];
  return (
    <div>
        <AmericaRegion text={myText} countries={countries} cities={cities}/>
    </div>
  )
}
