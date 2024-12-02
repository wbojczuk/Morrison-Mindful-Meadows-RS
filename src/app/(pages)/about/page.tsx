import AboutContent from "@/app/(mainsite)/components/aboutpage/Meet/AboutContent"
import Peace from "@/app/(mainsite)/components/homepage/Peace/Peace"
import Dream from "@/app/(mainsite)/components/misc/Dream/Dream"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `About | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `About | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
openGraph: {
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
type: "website",
images: [
{
url: `${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`,
width: 1280,
height: 720,
}
]
},
twitter: {
card: 'summary_large_image',
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
 images: [`${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`]
}
}

export default function AboutPage(){
	 return(
	 	 <>
			<PageTitle pageTitle="About" />
			<AboutContent />
			{/* <Peace /> */}
			<Dream />
	 	 </>
	 )
}