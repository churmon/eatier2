import AsiaRegion from "@/components/asia/AsiaRegion";

export default function EasternAsiaPage() {
    const myText={
        text1:'Eastern Asia ‖ More to have', text2:'The art of good food.', text3:'Satisfying foodie, goodie experiences.', text4:'Unparalleled tasty journeys.', text5:'Satisfying foodie experiences.', text6:'South Asia’s best chefs. Book one, now.', text7:'Sponsored'
    };
    const countries =['Mongolia','Japan','Singapore', 'China'];
    const cities =['Tokyo','Shenzhen','Taipei', 'Seoul'];
  return (
    <div>
        <AsiaRegion text={myText} countries={countries} cities={cities}/>
    </div>
  )
}
