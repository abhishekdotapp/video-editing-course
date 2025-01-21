"use client"
import courseData from "@/data/visual_courses.json"
import { ClientReferenceManifestPlugin } from "next/dist/build/webpack/plugins/flight-manifest-plugin"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"
import Image from "next/image"

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string,
}


function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)
    return (
        <div className="py-12 bg-gray-950">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-indigo-700 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With The Best</p>
                </div>
            </div>
            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <Image
                                        src={`${course.image}`}
                                        alt="jordans"
                                        height="400"
                                        width="400"
                                        className="object-contain"
                                    />
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                    <Link href={`/courses/${course.slug}`}>
                                        Learn More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>

            </div>
            <div className="mt-20 text-center">
                <Link href={"/courses"}
                    className="px-4 py-2 rounded border border-neutral-600 text-slate-400 bg-slate-900 hover:bg-gray-100 transition duration-200"
                >
                    View All courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses