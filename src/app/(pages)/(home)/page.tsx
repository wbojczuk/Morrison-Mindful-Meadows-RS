import AboutUs from "@/app/(mainsite)/components/homepage/AboutUs/AboutUs";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import Help from "@/app/(mainsite)/components/homepage/Help/Help";
import Meet from "@/app/(mainsite)/components/homepage/Meet/Meet";
import Peace from "@/app/(mainsite)/components/homepage/Peace/Peace";
import Ready from "@/app/(mainsite)/components/homepage/Ready/Ready";


export default function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <Peace />
      <Help />
      <Meet />
      <Ready />
    </>
  )
}
