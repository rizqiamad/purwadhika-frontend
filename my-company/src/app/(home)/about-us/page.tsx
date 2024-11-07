import CompanyQty from "@/components/about-us/companyQty";
import CoreValues from "@/components/about-us/coreValues";
import Timeline from "@/components/about-us/timeline";

export default function AboutUs() {
  return (
    <div>
      <div className="w-[70vw] mx-auto">
        <div className="mx-auto flex flex-col gap-4 p-6">
          <h1 className="text-6xl font-semibold border-b-2 border-red-500">ABOUT US</h1>
          <p className="text-4xl mt-6">Our History</p>
          <div>
            The year was 2006. The PC industry was growing, and so was the number of gamers and enthusiasts within it. Obsessed with performance, this community was increasingly tuning and modifying its hardware to eke out the fastest clock speeds and smoothest frame rates. More casual users were getting into overclocking, and the hardcore crowd was pushing new extremes with sub-zero cooling. Modding cases and other components was also becoming more popular as people sought new ways to personalize their PCs.
          </div>
          <div>
            ASUS was quick to recognize the importance of these PC aficionados. Many of our own R&D engineers were gamers and overclockers at the time. They wanted to help hardcore tweakers harness the full potential of their CPUs and GPUs while also making performance easy to unlock for new recruits. They were driven to push the limits of other features to enhance every aspect of the user experience, too, and they wanted to do it in style by elevating PC components to a new level of luxury.
          </div>
          <div>
            To realize their vision, these pioneering engineers and enthusiasts formed a new division within ASUS dubbed Project G and began working on a motherboard code-named Pluto. Project G morphed to become the Republic of Gamers, while Pluto spawned the original Crosshair motherboard. The Crosshair redefined expectations for what a motherboard could be, and ROG has remained at the forefront of gaming and enthusiast hardware in the 10 years since its debut.
          </div>
          <div>
            Over the past decade, the Republic of Gamers has established a history of relentless innovation that has left the rest of the industry following in our wake. It's only fitting that we look back on our triumphs to celebrate the 10th anniversary of ROG.
          </div>
        </div>
        <CompanyQty />
        <Timeline />
      </div>
        <CoreValues />
    </div>
  );
}
