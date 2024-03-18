import AmericaRegion from "@/components/america/AmericaRegion";

export default function SouthAmericaPage() {
    const myText={
        text1:'South America // Good times start here', text2:'Explore beyond.', text3:'So much more for everyone.', text4:'Friends, familia and more.', text5:'Expect more, experience more.', text6:'Hungry much? Take a break from cooking and book a chef.', text7:'You may also like.'
    };
    const countries =['Brazil','Uruguay','Suriname', 'Chile'];
    const cities =['Falk Islands','Quito','Brasilia', 'Aruba'];
  return (
    <div>
        <AmericaRegion text={myText} countries={countries} cities={cities}/>
    </div>
  )
}
