import AmericaRegion from "@/components/america/AmericaRegion";

export default function CaribbeansPage() {
    const myText={
        text1:'The Caribbeans // Succulent', text2:'Escape to the gem of the Americas.', text3:'Be out here.', text4:'Dine out in the Caribbeans.', text5:'More than one reason to be here.', text6:'Have the best, eat the best. Call a chef.', text7:'Sponsored.'
    };
    const countries =['Antigua and Barbuda','Grenada','Honduras', 'Cayman Islands'];
    const cities =['Anguilla','Virgin Islands','Saint Kitts and Nevis', 'Jamaica'];
  return (
    <div>
        <AmericaRegion text={myText} countries={countries} cities={cities}/>
    </div>
  )
}
