import '@fortawesome/fontawesome-free/css/all.css';

export default {
    data() {
        return {
            menuItems: [
                { title: 'Home', path: '/' },
                { title: 'About us', path: '/about' },
                { title: 'Contact us', path: '/contact-us' }
            ],
            socialMedias: [
                { icon: 'mdi-facebook', path: 'https://www.facebook.com' },
                { icon: 'mdi-linkedin', path: 'https://linkedin.com/' },
                { icon: 'mdi-instagram', path: 'https://www.instagram.com' }
            ]
        }
    }
}
