import HeroComponent from "@/components/HeroComponent";
import SpecialisedCourses from "@/components/SpecialisedCourses";
import CourseTestimony from "@/components/CourseTestimony";
import ReviewSection from "@/components/ReviewSection";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col w-full min-h-full overflow-hidden justify-center items-center text-center transition-colors">
        <HeroComponent/>
        <SpecialisedCourses/>
        <CourseTestimony/>
        <ReviewSection/>
        <UpcomingWebinars/>
        <Instructors/>
      </div>
    </>
  );
}
