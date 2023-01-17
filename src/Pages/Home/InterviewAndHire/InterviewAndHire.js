import React from 'react';
import hiring from "../../../assets/latest_news/hiring.png"

const InterviewAndHire = () => {
    return (
        <section class="py-10 bg-gray-50 sm:py-12 lg:py-16">
            <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div class="grid items-center md:grid-cols-2 gap-y-10">
                    <div class="pr-12 sm:pr-0">
                        <div class="relative max-w-xs mb-12">
                            <img class="object-bottom rounded-md" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg" alt="" />

                            <img class="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/smiling-businessman.jpg" alt="" />
                        </div>
                    </div>

                    <div className=' text-left'>
                        <h2 class="text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Interview & Hire Diverse Tech Talent</h2>
                        <p class="mt-4 text-base leading-relaxed text-gray-600">With over 400,000 developers from over 100 countries across the world, VanHack can help you create diverse, multicultural technical teams. We also help to close the gender gap in technology through women-focused initiatives.</p>
                    </div>
                </div>
            </div>
        </section>



    );
};

export default InterviewAndHire;