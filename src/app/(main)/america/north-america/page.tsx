import AmericaRegion from "@/components/america/AmericaRegion";

export default function NorthAmericaPage() {
    const myText={
        text1:'North Americas // Blissful', text2:'Adventurous.', text3:'Better experiences.', text4:'Places to venture out to.', text5:'Shared meals are just more delicious.', text6:'Chefs are always the best. That’s why you can book one, now.', text7:'Sponsored.'
    };
    const countries =['Canada','Greenland','Mexico', 'United States'];
    const cities =['Alaska','Nunavut','New York', 'Guadalajara'];
  return (
    <div>
        <AmericaRegion text={myText} countries={countries} cities={cities}/>
    </div>
  )
}
