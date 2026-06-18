import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
type SubscriptionOverview = {
    title: { className?: string; content: string };
    tagline: string;
    avatar_url: string;
};
export type FeatureSectionCardProps = {
    title?: string;
    visual?: ReactNode;
    skills?: string[];
    features?: string[];
    SubscriptionOverviews?: SubscriptionOverview[];
    overline?: string;
    className?: string;
    brandLogoUrl?: string;
};

const MemberComponent = ({ member, index }: { member: SubscriptionOverview, index: number }) => {
    const isLeftTransition = index % 2 === 0;
    return (
        <div className={cn("flex items-center bg-transparent w-full mt-5", isLeftTransition ? "justify-start" : "justify-end")}>
            <div key={member.title.content}
                style={{
                    boxShadow: "5px 10px 15px 1px rgba(54, 115, 171, 0.3)"
                }}
                className={cn("flex flex-1 bg-background border items-center gap-4 p-2 rounded-full mb-4", isLeftTransition ? "transition-transform transform -translate-x-20" : "transition-transform transform translate-x-10")}>
                <Avatar className="ring-4 h-13 w-13 ring-amber-400">
                    <AvatarImage src={member.avatar_url} alt={member.title.content} />
                    <AvatarFallback>{member.title.content.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className={cn("text-xs", member.title.className)}>
                        {member.title.content}
                    </p>
                    <p className="text-lg font-medium">{member.tagline}</p>
                </div>
            </div>
        </div>
    )
}
export function FeatureSectionCard({ className, title, visual, overline, skills = [], features = [], SubscriptionOverviews = [], brandLogoUrl }: FeatureSectionCardProps) {
    return (
        <div className="px-14">
            <Card className={cn("max-w-80 relative overflow-visible rounded-4xl border", className)} style={{ boxShadow: "0 0 115px 1px rgba(54, 115, 171, 0.2)" }}>
                <CardHeader>
                    {/* <div className='bg-amber-500/40 w-full h-auto aspect-video'  />  // img placeholder */}
                    {visual && <div className='w-full h-auto aspect-video'>{visual}</div>}
                </CardHeader>
                <CardContent>
                    <div className="absolute top-36 rounded-full translate-x-1/2 bg-linear-to-br from-[#52B4DA] to-[#1E3E85] right-0 w-24 h-24 z-10">
                        <div className=" flex w-full h-full items-center p-2 justify-center z-20">
                            {brandLogoUrl?
                            <img src={brandLogoUrl} alt="Company Logo" className="w-w-full h-w-full rounded-full" />
                            : <svg className="w-12 h-10" width="144" height="120" viewBox="0 0 144 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="REMOTE RECRUIT sign color background blue">
                                    <path id="Fill 3" fill-rule="evenodd" clip-rule="evenodd" d="M113.941 65.3323C119.682 62.4529 124.27 58.428 127.624 53.1845C131.059 47.8124 132.771 41.725 132.771 34.9158C132.771 24.8183 129.277 16.478 122.298 9.88465C115.311 3.29437 106.533 0 95.9488 0H51.0223L63.1031 21.0952H94.4009C99.1045 21.0952 102.832 22.3718 105.575 24.9189C108.314 27.465 109.691 30.7512 109.691 34.7685C109.691 38.7847 108.314 42.0583 105.575 44.579C102.832 47.1047 99.1045 48.3671 94.4009 48.3671H78.7113L118.488 117.832H144C144 117.832 115.736 68.4737 113.941 65.3323" fill="#50C0E3" />
                                    <path id="Fill 4" fill-rule="evenodd" clip-rule="evenodd" d="M30.0593 52.4966C24.3184 55.3755 19.7307 59.4024 16.3748 64.647C12.9418 70.0175 11.2288 76.1039 11.2288 82.9156C11.2288 93.0111 14.7233 101.353 21.7022 107.947C28.6898 114.536 37.467 117.832 48.0527 117.832H92.9781L80.8953 96.7337H49.6C44.8954 96.7337 41.1683 95.4591 38.4271 92.9115C35.6854 90.3659 34.3108 87.0802 34.3108 83.063C34.3108 79.0462 35.6854 75.7732 38.4271 73.2509C41.1683 70.7257 44.8954 69.4648 49.6 69.4648H65.2865L25.5112 0H0C0 0 28.2656 49.3582 30.0593 52.4966" fill="#FFFFFE" />
                                </g>
                            </svg>}
                        </div>
                    </div>
                    {overline && <p className="text-lg pl-3 font-medium text-accent-foreground/50">{overline}</p>}
                    {title && <h2 className="text-2xl pl-3 font-bold text-[#3673AB]">{title}</h2>}
                    {features.length > 0 && (
                        <ul className="flex flex-col pl-3 gap-3 mt-4">
                            <li className="text-xs text-accent-foreground uppercase">Features</li>
                            {features.map((feature, index) => (
                                <li key={index} className="text-sm space-x-3 flex items-center">
                                    <svg width="48" height="48" className="w-4 h-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Active Icon">
                                            <circle id="Oval" cx="24" cy="24" r="24" fill="url(#paint0_linear_15_276)" />
                                            <g id="Path 2" filter="url(#filter0_d_15_276)">
                                                <path d="M32.3178 16.9548C33.2637 16.0234 34.7855 16.035 35.717 16.9809C36.5768 17.854 36.6329 19.2179 35.8925 20.1551L35.6909 20.38L22.257 33.6091C21.3751 34.4775 19.9948 34.5249 19.0584 33.7652L18.8341 33.5585L12.8929 27.3512C11.975 26.3922 12.0083 24.8707 12.9673 23.9528C13.8525 23.1055 15.2171 23.0687 16.1437 23.8224L16.3657 24.0272L20.621 28.4711L32.3178 16.9548Z" fill="white" />
                                            </g>
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_15_276" x="6.22559" y="16.2638" width="36.1824" height="30.0363" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="2" />
                                                <feGaussianBlur stdDeviation="1" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.230622 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_276" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_276" result="shape" />
                                            </filter>
                                            <linearGradient id="paint0_linear_15_276" x1="-22.2298" y1="29.8519" x2="28.0035" y2="75.9783" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#52B4DA" />
                                                <stop offset="0.999763" stop-color="#1E3E85" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <span className="text-sm font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    {SubscriptionOverviews.length > 0 && (
                        <div className="flex flex-col">
                            {SubscriptionOverviews.map((member, index) => (
                                <MemberComponent key={member.title.content} member={member} index={index} />
                            ))}
                        </div>
                    )}
                    {skills.length > 0 && (
                        <div className="mt-4">
                            <p className="text-xs text-accent-foreground uppercase">Skills</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {skills.slice(0, 5).map((skill, index) => (
                                    <Badge key={index} variant="outline" className="rounded-lg px-3 py-4 text-[12px] font-medium bg-[#5799EB]/10">
                                        {skill}
                                    </Badge>
                                ))}
                                {skills.length > 5 && (
                                    <Badge variant="outline" className="rounded-lg px-3 py-4 text-[12px] font-medium bg-[#5799EB]/10">
                                        +{skills.length - 5}
                                    </Badge>
                                )}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}