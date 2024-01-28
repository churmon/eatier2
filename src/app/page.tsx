import { BreakFastCard } from "@/components/card/breakfast-card";
import { ChefCard } from "@/components/card/chef-card";
import { EventCard } from "@/components/card/event-card";
import InterestedCard from "@/components/card/interested-card";
import RestaurantCard from "@/components/card/restaurant-card";
import Navbar from "@/components/navbar/navbar";
import SubNavbar from "@/components/navbar/sub-navbar";

export default function Home() {
  return (
        <main className="">
          <Navbar />
          <SubNavbar />
          <div className="mx-3">
            <div>
            <h1 className="font-bold text-3xl">Explore</h1>
              <p className="text-m self-end">the ideal dish to satisfy your unforgiving hunger. Remember, a shared meal tastes just much better.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center mt-5">
              <BreakFastCard item='BreakFast' url='/breakfast' />
              <BreakFastCard item='Lunch' url='/lunch' />
              <BreakFastCard item='Dinner' url='/dinner' />
            </div>
            <div className="mt-10 border-t-2">
              <h1 className="font-bold text-3xl">Find a Chef</h1>
              <p className="text-md">Hosting friends over, a reunion, an event or missed your ex? Find a chef for a magical, savory meal. We&apos;ve got you!</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center mt-12">
            <ChefCard />
            <ChefCard />
            <ChefCard />
            <ChefCard />
            </div>

            <div className="mt-10 border-t-2">
              <div className="md:flex">
                  <h1 className="font-bold text-3xl ">Hungry much?</h1>
                  <p className="text-md self-end">Find the best of the best sweet moments nearest you. From Gugulethu To Lisbon, get the best dishes and remember to tell the tale of tasty, good food.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
              <div>
                  <div className="text-center font-bold text-xl mb-3">
                      <h1>Most recommended</h1>
                  </div>
                  <InterestedCard />
              </div>

              <div>
                <div className="text-center font-bold text-xl mb-3">
                    <h1>Top trending</h1>
                </div>
                <InterestedCard />
              </div>

              <div>
                  <div className="text-center font-bold text-xl mb-3">
                      <h1>Most viewed</h1>
                  </div>
                  <InterestedCard />
              </div>
            </div>

              {/* Events */}
            <div className="mt-10 border-t-2">
            <div className="">
                <h1 className="font-bold text-3xl ">Eatier Events</h1>
                <p className="text-md">Explore and find events nearby</p>
            </div>          
        </div>
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
        </div>

        {/* Features */}

        <div className="mt-10 border-t-2">
            <div className="">
                <h1 className="font-bold text-3xl ">Features</h1>
            </div>          
        </div>
        <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10 place-items-center">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        </div>

        {/* Continents */}

            <div className="mt-10 border-t-2 mb-5">
                <div className="">
                    <h1 className="font-bold text-3xl ">Taste worldwide flavours</h1>
                    <p>Travelling to another country for business, to wind down or just filled with curiosity? Discover your world to create the most cherishable through food. Lekker times.</p>
                </div>          
            </div>
            <div className="bg-cover bg-center h-full" style={{backgroundImage: `url(/images/image7.jpg)`}}>
                <div className="grid grid-cols-1 py-20 px-5 sm:grid-cols-2 md:grid-cols-3 gap-4  place-items-center">
                    <div>
                        <h1 className="text-center text-white font-bold text-2xl">Africa</h1>
                        <RestaurantCard />
                    </div>
                    <div>
                        <h1 className="text-center text-white font-bold text-2xl">North America</h1>
                        <RestaurantCard />
                    </div>
                    <div>
                        <h1 className="text-center text-white font-bold text-2xl">Europe</h1>
                        <RestaurantCard />
                    </div>
                    <div>
                        <h1 className="text-center text-white font-bold text-2xl">Asia</h1>
                        <RestaurantCard />
                    </div>
                    <div>
                        <h1 className="text-center text-white font-bold text-2xl">South America</h1>
                        <RestaurantCard />
                    </div>
                    <div>
                        <h1 className="text-center text-white font-bold text-2xl">Oceania</h1>
                        <RestaurantCard />
                </div>
                    
                    
                </div>
            </div>

          </div>
        </main> 
  );
}
