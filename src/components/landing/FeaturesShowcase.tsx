import { FeatureSection } from "@/components/landing/FeatureSection";
import { FeatureSectionCard } from "./feature-section-card";

export function FeaturesShowcase() {
  return (
    <section className="bg-white container mx-auto block">
      <div className="mx-auto block w-fit max-w-6xl space-y-24 py-20">
        <FeatureSection
          eyebrow="Global Reach"
          title="The First Fully Global Job Board, Anywhere, Ever"
          description="RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be."
          visual={<FeatureSectionCard
            SubscriptionOverviews={[{
              title:{
                content:'Python Developer'
              },
              tagline:'Felonious Gru',
              avatar_url:'/member-avatar.png'
            },{
              title:{
                content:'Front End Wizard'
              },
              tagline:'Mel Muselphiem',
              avatar_url:'/member-avatar.png'
            }]}
            visual={<div>
              <img src="/FindWork.png" alt="Global Reach" className="w-full h-auto aspect-video object-cover rounded-lg" />
            </div>}
             />}
        />

        <FeatureSection
          eyebrow="Actually Fee Free"
          title="Fee-Free Forever"
          description="We don't charge you fees and we don't put up paywalls. We're the bridge that connects job opportunities with the best candidates, with no middleman involved."
          visual={<FeatureSectionCard
              overline="Your Membership Tier"
              title="Premium"
              features={[
                'Up to 25 active job posts',
                'Premium Placement & Visibility',
                'Messaging anyone, unlimited',
                'Unlimited invites',
                'View all applicants',
                'Unlimited invites to jobseekers'
              ]}
            />}
          reversed
        />

        <FeatureSection
          eyebrow="Custom Profile"
          title="Showcase Your Talents"
          description="Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates."
          visual={<FeatureSectionCard
            SubscriptionOverviews={[{
              title:{
                content:'Past Client Feedback'
              },
              tagline:'Best Developer Ever!',
              avatar_url:'/member-avatar.png'
            }]}
                        brandLogoUrl="/member-avatar.png"
            visual={<div>
              <img src="/FindWork.png" alt="Global Reach" className="w-full h-auto aspect-video object-cover rounded-lg" />
            </div>}
            skills={['Python Dev', 'Javascript', 'Front End', 'Back End', 'iOS Development','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']}
             />}
        />
      </div>
    </section>
  );
}
