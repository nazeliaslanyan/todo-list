<template>
    <main>
        <v-card-title class="text-center text-h4 text-md-h5 text-lg-h3 mt-16">About To-do lists</v-card-title>
        <v-card-text class="text-h6 mt-5 px-5">
            Welcome to our website!
            We are a team of passionate developers dedicated to creating useful tools and applications
            to enhance your productivity and simplify your daily tasks. Our mission is to provide you with intuitive and
            efficient solutions that make your life easier.

            Our journey began with a simple idea: to create a to-do list application that is both functional and
            user-friendly.
            We understand the importance of staying organized and keeping track of tasks, so we set out to develop a
            tool that
            helps users manage their tasks effectively.
            Through hard work, dedication, and creativity, we've crafted a to-do list page using JavaScript that allows
            you to
            easily add, edit, and delete tasks with just a few clicks. Whether you're a student, a professional, or just
            someone
            looking to stay organized, our to-do list page is designed to meet your needs.

            But our commitment doesn't stop there. We're continuously striving to improve and expand our offerings to
            provide
            you with even more valuable tools and resources. From productivity apps to educational resources, we're
            always
            exploring new ways to help you succeed.

            At our core, we believe in the power of technology to positively impact lives, and we're passionate about
            leveraging
            that power to create solutions that make a difference. Thank you for joining us on this journey, and we hope
            our
            website enriches your life in meaningful ways.

            <div class="picture1">
                <img :src="aboutUsPic1" alt="worker-pic">
            </div>

        </v-card-text>




    </main>
</template>

<script>
import aboutUsPic1 from '@/assets/worker1.jpg';
import '../About/about.css'

export default {
    data() {
        return {
            aboutUsPic1: aboutUsPic1
        }
    }
}
</script>
