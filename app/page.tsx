import Link from 'next/link'
import { Book, Palette, Terminal } from 'lucide-react'

export default function Home() {
    return (
        <div className="min-h-screen pt-16 bg-gradient-to-b from-[#f5eef8] to-[#fefbff]">
            <div className="container px-4 py-16 md:py-24">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#0e092d] mb-4">
                        Design System
                    </h1>
                    <p className="text-xl text-[#58398d] max-w-2xl mx-auto">
                        A comprehensive guide for internal teams and developers building the next generation of Fermyon products.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <Link
                        href="/brand"
                        className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5eef8] text-[#58398d] mb-4">
                            <Palette className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0e092d] mb-2">Brand Styleguide</h3>
                        <p className="text-[#58398d]">Colors, typography, logos, and brand assets for consistent visual identity.</p>
                    </Link>

                    <Link
                        href="/components"
                        className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5eef8] text-[#58398d] mb-4">
                            <Book className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0e092d] mb-2">UI Design System</h3>
                        <p className="text-[#58398d]">Component library and patterns built with DaisyUI and Tailwind CSS.</p>
                    </Link>

                    <Link
                        href="/devx"
                        className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5eef8] text-[#58398d] mb-4">
                            <Terminal className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0e092d] mb-2">Designing for DevX</h3>
                        <p className="text-[#58398d]">Guidelines and best practices for creating developer-friendly experiences.</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
