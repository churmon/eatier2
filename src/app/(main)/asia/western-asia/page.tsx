import AsiaRegion from "@/components/asia/AsiaRegion";

export default function WesternAsiaPage() {
    const myText={
        text1:'Western Asia and the Middle East Ξ Culture, people and food', text2:'Traditional yet modern.', text3:'Great expectations, great tastes.', text4:'Treasure every moment.', text5:'Places you cannot miss out on.', text6:'Chefs ready to fix you a plate.', text7:'Suggested'
    };
    const countries =['Qatar','Jordan','Lebanon', 'Saudi Arabia'];
    const cities =['Tehran','Dubai','Manama', 'Damascus'];
  return (
    <div>
        <AsiaRegion text={myText} countries={countries} cities={cities}/>
    </div>
  )
}
