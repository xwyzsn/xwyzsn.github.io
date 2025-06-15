<template>
    <div
        class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-white py-6 sm:py-12 px-3 sm:px-4 fixed inset-0 overflow-auto transition-colors duration-500"
    >
        <!-- Dark Mode Toggle Button -->
        <button
            @click="toggleDarkMode"
            class="fixed top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-3 rounded-full bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 z-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 transform"
            aria-label="Toggle dark mode"
        >
            <span v-if="darkMode" class="text-xl">☀️</span>
            <span v-else class="text-xl">🌙</span>
        </button>
        <div class="max-w-6xl mx-auto space-y-8 sm:space-y-12 pb-16 sm:pb-24">
            <!-- Introduction Section -->
            <section
                v-motion
                :initial="{ opacity: 0, y: 50, scale: 0.5 }"
                :enter="{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { delay: 100, duration: 300 },
                }"
                class="relative"
            >
                <div class="relative">
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-purple-200/50 dark:from-blue-500/10 dark:to-purple-500/10 rounded-3xl transform -rotate-1"
                    ></div>
                    <div
                        class="relative backdrop-blur-lg bg-white/80 dark:bg-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 transform rotate-1 hover:rotate-0 transition-all duration-1000 shadow-md"
                    >
                        <h1
                            class="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent mb-3 sm:mb-5 animate-pulse"
                        >
                            {{ resumeData.introduction.title }}
                        </h1>
                        <p
                            class="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-400 leading-relaxed hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-1000"
                        >
                            {{ resumeData.introduction.content }}
                        </p>
                    </div>
                </div>
            </section>

            <!-- Publications Section -->
            <section
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            >
                <h1
                    class="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500 bg-clip-text text-transparent mb-3 sm:mb-4"
                ></h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div
                        v-for="(pub, index) in resumeData.publications.items"
                        v-motion
                        :initial="{ opacity: 0, x: -50, scale: 0.5 }"
                        :enter="{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            transition: { delay: index * 100, duration: 300 },
                        }"
                        class="group backdrop-blur-lg bg-white/80 dark:bg-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 transform hover:-translate-y-2 transition-all duration-1000 shadow-md hover:shadow-xl relative"
                    >
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-purple-200/50 to-pink-200/50 dark:from-purple-500/10 dark:to-pink-500/10 rounded-3xl -z-10"
                        ></div>
                        <h3
                            class="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-300 group-hover:text-purple-800 dark:group-hover:text-white transition-colors"
                        >
                            {{ pub.title }}
                        </h3>
                        <p
                            class="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 mb-4"
                        >
                            {{ pub.publisher }}, {{ pub.year }}
                        </p>
                        <p
                            class="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200"
                        >
                            {{ pub.description }}
                        </p>
                        <div
                            class="mt-4 text-sm text-purple-600 dark:text-purple-400"
                        >
                            {{ pub.reference }}
                        </div>
                    </div>
                </div>
            </section>

            <!-- Experience Section -->
            <section
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
                class="relative"
            >
                <h1
                    class="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-500 bg-clip-text text-transparent mb-3 sm:mb-6"
                >
                    {{ resumeData.experience.title }}
                </h1>
                <div class="relative space-y-4 sm:space-y-8">
                    <div
                        class="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400/70 to-teal-400/70 dark:from-green-500/50 dark:to-teal-500/50"
                    ></div>

                    <div
                        v-for="(exp, index) in resumeData.experience.items"
                        v-motion
                        :initial="{ opacity: 0, x: -50, scale: 0.5 }"
                        :enter="{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            transition: { delay: index * 150, duration: 300 },
                        }"
                        class="relative pl-10 sm:pl-16 group"
                    >
                        <div
                            class="absolute left-3 sm:left-7 w-3 h-3 rounded-full bg-green-500 group-hover:scale-150 transition-all duration-300"
                        ></div>
                        <div
                            class="backdrop-blur-lg bg-white/80 dark:bg-white/10 rounded-2xl sm:rounded-3xl p-3 sm:p-6 transform hover:-translate-x-2 transition-all duration-300 shadow-md hover:shadow-xl"
                        >
                            <h3
                                class="text-xl sm:text-2xl font-semibold text-green-600 dark:text-green-300 group-hover:text-green-800 dark:group-hover:text-white transition-colors"
                            >
                                {{ exp.title }}
                            </h3>
                            <div
                                class="text-sm text-green-600 dark:text-green-400 mt-2"
                            >
                                {{ exp.company }} | {{ exp.period }}
                            </div>
                            <ul
                                class="mt-4 space-y-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200"
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
                :initial="{ opacity: 0, y: 50 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
            >
                <h1
                    class="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-500 bg-clip-text text-transparent mb-3 sm:mb-5"
                >
                    {{ resumeData.education.title }}
                </h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div
                        v-for="(edu, index) in resumeData.education.items"
                        v-motion
                        :initial="{ opacity: 0, scale: 0.5 }"
                        :enter="{
                            opacity: 1,
                            scale: 1,
                            transition: { delay: index * 100, duration: 300 },
                        }"
                        class="group perspective"
                        :class="index === 1 ? 'md:mt-12' : ''"
                    >
                        <div
                            class="relative backdrop-blur-lg bg-white/80 dark:bg-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 transform-gpu group-hover:[transform:rotateX(10deg)] transition-all duration-300 shadow-md hover:shadow-xl"
                        >
                            <div
                                class="absolute inset-0 bg-gradient-to-b from-orange-200/50 to-red-200/50 dark:from-orange-500/10 dark:to-red-500/10 rounded-3xl -z-10"
                            ></div>
                            <h3
                                class="text-xl font-semibold text-orange-600 dark:text-orange-300 group-hover:text-orange-800 dark:group-hover:text-white transition-colors"
                            >
                                {{ edu.degree }}
                            </h3>
                            <div
                                class="text-sm text-orange-600 dark:text-orange-400 mt-2"
                            >
                                {{ edu.school }}
                            </div>
                            <div
                                v-if="edu.period"
                                class="text-sm text-orange-600 dark:text-orange-400 mt-1"
                            >
                                {{ edu.period }}
                            </div>
                            <ul
                                class="mt-4 space-y-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200"
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
                :initial="{ opacity: 0, y: 50 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
            >
                <h1
                    class="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 dark:from-yellow-400 dark:to-orange-500 bg-clip-text text-transparent mb-3 sm:mb-5"
                >
                    {{ resumeData.skills.title }}
                </h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div
                        v-for="(skill, index) in resumeData.skills.items"
                        :key="index"
                        v-motion
                        :initial="{ opacity: 0, y: 30, scale: 0.5 }"
                        :enter="{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { delay: index * 100, duration: 300 },
                        }"
                        class="group backdrop-blur-lg bg-white/80 dark:bg-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:bg-white/90 dark:hover:bg-white/20 transition-all duration-1000 shadow-md hover:shadow-xl"
                        :class="index === 1 ? 'md:translate-y-12' : ''"
                    >
                        <div class="flex items-center space-x-4">
                            <div
                                class="w-3 h-3 bg-yellow-500 rounded-full group-hover:scale-150 transition-all duration-300"
                            ></div>
                            <h3
                                class="text-xl font-semibold text-yellow-600 dark:text-yellow-300 group-hover:text-yellow-800 dark:group-hover:text-white transition-colors"
                            >
                                {{ skill.category }}
                            </h3>
                        </div>
                        <p
                            class="mt-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200"
                        >
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
import { ref } from "vue";

// Check system preference for dark mode
const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
const darkMode = ref(
    localStorage.getItem("darkMode") === null
        ? prefersDark
        : localStorage.getItem("darkMode") === "true",
);

// Initialize dark mode on page load
if (darkMode.value) {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}

const toggleDarkMode = () => {
    // Toggle dark mode
    darkMode.value = !darkMode.value;

    // Save preference to localStorage
    localStorage.setItem("darkMode", darkMode.value);

    // Toggle dark class
    if (darkMode.value) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
};
</script>

<style>
/* Minimal custom CSS for elements that Tailwind can't easily handle */
.perspective {
    perspective: 1000px;
}

@media (max-width: 768px) {
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }

    .perspective {
        perspective: 500px;
    }
}

html {
    scroll-behavior: smooth;
}

section {
    scroll-margin-top: 2rem;
}
</style>
