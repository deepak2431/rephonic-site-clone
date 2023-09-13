import React from "react";
import ContentCard from "../../../components/ContentCard";
import OutreachSection from "./OutreachSection";

const firstContentImg = "https://rephonic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdatabase.16d684c8.png&w=1920&q=75"
const secondContentImg = "https://rephonic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsearch-results.6df5b665.png&w=1200&q=75"
const thirdContentImg = "https://rephonic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.4bbdb0c7.png&w=1200&q=75"
const fourthContentImg = "https://rephonic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstatic-list.5d63886e.png&w=1080&q=75"
const fifthContentImg = "https://rephonic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fartworks.9f93188f.png&w=1080&q=75"
const sixtheContentImg = "https://rephonic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpitching-wizard.6a4eee5e.png&w=1200&q=75"



const ContentSection = () => {
    return(
        <div className="content_description_section">
            <ContentCard 
                imageSrc={firstContentImg}
                headerTitle="Access listener numbers and contact info for any podcast"
                firstParaContent="Finding and researching podcasts to get featured on is slow and time-consuming work. Rephonic gives you listener demographics 
                and podcast information across more than two million podcasts."
                secondParaContent="Discover the best shows in your niche, figure out which ones are the most promising 
                and get the right contact details to reach out fast with our all-in-one tool."
                imageLeftAlign={true}
            />
            <OutreachSection />
            <ContentCard 
                imageSrc={secondContentImg}
                headerTitle="Access listener numbers and contact info for any podcast"
                firstParaContent="Finding and researching podcasts to get featured on is slow and time-consuming work. Rephonic gives you listener demographics 
                and podcast information across more than two million podcasts."
                secondParaContent="Discover the best shows in your niche, figure out which ones are the most promising 
                and get the right contact details to reach out fast with our all-in-one tool."
                imageLeftAlign={false}
            />
            <ContentCard 
                imageSrc={thirdContentImg}
                headerTitle="Access listener numbers and contact info for any podcast"
                firstParaContent="Finding and researching podcasts to get featured on is slow and time-consuming work. Rephonic gives you listener demographics 
                and podcast information across more than two million podcasts."
                secondParaContent="Discover the best shows in your niche, figure out which ones are the most promising 
                and get the right contact details to reach out fast with our all-in-one tool."
                imageLeftAlign={true}
            />
            <ContentCard 
                imageSrc={fourthContentImg}
                headerTitle="Access listener numbers and contact info for any podcast"
                firstParaContent="Finding and researching podcasts to get featured on is slow and time-consuming work. Rephonic gives you listener demographics 
                and podcast information across more than two million podcasts."
                secondParaContent="Discover the best shows in your niche, figure out which ones are the most promising 
                and get the right contact details to reach out fast with our all-in-one tool."
                imageLeftAlign={false}
            />
            <ContentCard 
                imageSrc={fifthContentImg}
                headerTitle="Access listener numbers and contact info for any podcast"
                firstParaContent="Finding and researching podcasts to get featured on is slow and time-consuming work. Rephonic gives you listener demographics 
                and podcast information across more than two million podcasts."
                secondParaContent="Discover the best shows in your niche, figure out which ones are the most promising 
                and get the right contact details to reach out fast with our all-in-one tool."
                imageLeftAlign={true}
            />
            <ContentCard 
                imageSrc={sixtheContentImg}
                headerTitle="Access listener numbers and contact info for any podcast"
                firstParaContent="Finding and researching podcasts to get featured on is slow and time-consuming work. Rephonic gives you listener demographics 
                and podcast information across more than two million podcasts."
                secondParaContent="Discover the best shows in your niche, figure out which ones are the most promising 
                and get the right contact details to reach out fast with our all-in-one tool."
                imageLeftAlign={false}
            />
        </div>
    )
}

export default ContentSection;