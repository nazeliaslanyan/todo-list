import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([]),
        isOpen() { }
    },

    data() {
        return {
            menuItems: [
                { title: 'Home', path: '/' },
                { title: 'About Us', path: '/about' },
                { title: 'Contact Us', path: '/contact-us' }
            ]


        }
    }
}
