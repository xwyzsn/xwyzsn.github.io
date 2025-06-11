<template>
    <div
        class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4 fixed inset-0 overflow-auto"
    >
        <div class="max-w-6xl mx-auto space-y-24 pb-24">
            <!-- Introduction Section -->
            <section
                v-motion
                :initial="{ opacity: 0, y: 100, scale: 0.5 }"
                :enter="{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { delay: 200, duration: 500 },
                }"
                class="relative"
            >
                <div class="relative">
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl transform -rotate-1"
                    ></div>
                    <div
                        class="relative backdrop-blur-lg bg-white/10 rounded-3xl p-12 transform rotate-1 hover:rotate-0 transition-all duration-1000"
                    >
                        <h1
                            class="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8 animate-pulse"
                        >
                            {{ resumeData.introduction.title }}
                        </h1>
                        <p
                            class="text-xl text-gray-300 leading-relaxed hover:text-white transition-colors duration-1000"
                        >
                            {{ resumeData.introduction.content }}
                        </p>
                    </div>
                </div>
            </section>

            <!-- Publications Section -->
            <section
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            >
                <h1
                    class="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-8"
                >
                    {{ resumeData.publications.title }}
                </h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div
                        v-for="(pub, index) in resumeData.publications.items"
                        :key="index"
                        v-motion
                        :initial="{ opacity: 0, x: -100, scale: 0.5 }"
                        :enter="{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            transition: { delay: index * 200, duration: 500 },
                        }"
                        class="hover-card group backdrop-blur-lg bg-white/10 rounded-3xl p-8 transform hover:-translate-y-2 transition-all duration-1000"
                        :class="index === 1 ? 'md:mt-12' : ''"
                    >
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl -z-10"
                        ></div>
                        <h3
                            class="text-xl font-semibold mb-4 text-purple-300 group-hover:text-white transition-colors"
                        >
                            {{ pub.title }}
                        </h3>
                        <p class="text-gray-400 group-hover:text-gray-200 mb-4">
                            {{ pub.publisher }}, {{ pub.year }}
                        </p>
                        <p class="text-gray-400 group-hover:text-gray-200">
                            {{ pub.description }}
                        </p>
                        <div class="mt-4 text-sm text-purple-400">
                            {{ pub.reference }}
                        </div>
                    </div>
                </div>
            </section>

            <!-- Experience Section -->
            <section
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
                class="relative"
            >
                <h1
                    class="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-12"
                >
                    {{ resumeData.experience.title }}
                </h1>
                <div class="relative space-y-16">
                    <div
                        class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500/50 to-teal-500/50"
                    ></div>

                    <div
                        v-for="(exp, index) in resumeData.experience.items"
                        :key="index"
                        v-motion
                        :initial="{ opacity: 0, x: -100, scale: 0.5 }"
                        :enter="{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            transition: { delay: index * 300, duration: 500 },
                        }"
                        class="relative pl-16 group"
                    >
                        <div
                            class="absolute left-7 w-3 h-3 rounded-full bg-green-500 group-hover:scale-150 transition-all duration-300"
                        ></div>
                        <div
                            class="backdrop-blur-lg bg-white/10 rounded-3xl p-8 transform hover:-translate-x-2 transition-all duration-300"
                        >
                            <h3
                                class="text-2xl font-semibold text-green-300 group-hover:text-white transition-colors"
                            >
                                {{ exp.title }}
                            </h3>
                            <div class="text-sm text-green-400 mt-2">
                                {{ exp.company }} | {{ exp.period }}
                            </div>
                            <ul
                                class="mt-4 space-y-2 text-gray-400 group-hover:text-gray-200 animate-fadeInUp"
                            >
                                <li
                                    v-for="(achievement, i) in exp.achievements"
                                    :key="i"
                                >
                                    • {{ achievement }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Education Section -->
            <section
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }"
            >
                <h1
                    class="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-12"
                >
                    {{ resumeData.education.title }}
                </h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div
                        v-for="(edu, index) in resumeData.education.items"
                        :key="index"
                        v-motion
                        :initial="{ opacity: 0, scale: 0.5 }"
                        :enter="{
                            opacity: 1,
                            scale: 1,
                            transition: { delay: index * 200, duration: 500 },
                        }"
                        class="group perspective"
                        :class="index === 1 ? 'md:mt-12' : ''"
                    >
                        <div
                            class="relative backdrop-blur-lg bg-white/10 rounded-3xl p-8 transform-gpu group-hover:[transform:rotateX(10deg)] transition-all duration-300"
                        >
                            <div
                                class="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-red-500/10 rounded-3xl -z-10"
                            ></div>
                            <h3
                                class="text-xl font-semibold text-orange-300 group-hover:text-white transition-colors"
                            >
                                {{ edu.degree }}
                            </h3>
                            <div class="text-sm text-orange-400 mt-2">
                                {{ edu.school }}
                            </div>
                            <div
                                v-if="edu.period"
                                class="text-sm text-orange-400 mt-1"
                            >
                                {{ edu.period }}
                            </div>
                            <ul
                                class="mt-4 space-y-2 text-gray-400 group-hover:text-gray-200"
                            >
                                <li v-for="(detail, i) in edu.details" :key="i">
                                    • {{ detail }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Skills Section -->
            <section
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 800 } }"
            >
                <h1
                    class="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-12"
                >
                    {{ resumeData.skills.title }}
                </h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div
                        v-for="(skill, index) in resumeData.skills.items"
                        :key="index"
                        v-motion
                        :initial="{ opacity: 0, y: 50, scale: 0.5 }"
                        :enter="{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { delay: index * 200, duration: 500 },
                        }"
                        class="group backdrop-blur-lg bg-white/10 rounded-3xl p-8 hover:bg-white/20 transition-all duration-1000"
                        :class="index === 1 ? 'md:translate-y-12' : ''"
                    >
                        <div class="flex items-center space-x-4">
                            <div
                                class="w-3 h-3 bg-yellow-500 rounded-full group-hover:scale-150 transition-all duration-300"
                            ></div>
                            <h3
                                class="text-xl font-semibold text-yellow-300 group-hover:text-white transition-colors"
                            >
                                {{ skill.category }}
                            </h3>
                        </div>
                        <p class="mt-4 text-gray-400 group-hover:text-gray-200">
                            {{ skill.technologies.join(", ") }}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import resumeData from "@/data/resumeData.json";
</script>

<style>
.perspective {
    perspective: 1000px;
}

.hover-card {
    position: relative;
}

/* Custom scrollbar styling */
::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
}

::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    transition: background-color 0.3s;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
}

/* Smooth scrolling for the whole page */
html {
    scroll-behavior: smooth;
}

/* Hide scrollbar but keep functionality on mobile */
@media (max-width: 768px) {
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
}

/* Add scroll-margin-top to sections for smooth scrolling */
section {
    scroll-margin-top: 2rem;
}
</style>
