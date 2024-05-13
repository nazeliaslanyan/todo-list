import logoPage from '@/assets/logoPage.png';
export default {

    data() {
        return {
            logoPage: logoPage,
            menuItems: [
                { title: 'HOME', path: '/' },
                { title: 'ABOUT US', path: '/about' },
                { title: 'CONTACT US', path: '/contact-us' }
            ]

        }

    }
}