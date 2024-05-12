import { mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations([]),


    },
    data() {
        return {
            menuItems: [
                { title: 'Home', path: '/' },
                { title: 'About us', path: '/about-us' },
                { title: 'Contact us', path: '/contact-us' }
            ],
            socialMedias: [
                { icon: 'mdi-facebook', path: 'https://www.facebook.com/' },
                { icon: 'mdi-instagram', path: 'https://www.instagram.com/' },
                { icon: 'mdi-linkedin', path: 'https://www.linkedin.com/' }
            ]
        };
    }
};
