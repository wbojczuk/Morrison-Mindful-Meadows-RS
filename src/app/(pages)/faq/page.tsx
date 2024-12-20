import FAQ from "@/app/(mainsite)/components/faqpage/FAQ/FAQ"
import Resources from "@/app/(mainsite)/components/faqpage/Resources/Resources"
import Ready from "@/app/(mainsite)/components/homepage/Ready/Ready"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import When from "@/app/(mainsite)/components/misc/When/When"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Faq | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `Faq | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
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

export default function FaqPage(){
	 return(
	 	 <>	
			<PageTitle pageTitle="FAQ" />
			<FAQ />
			<When />
			<Resources />
			<Ready />
	 	 </>
	 )
}