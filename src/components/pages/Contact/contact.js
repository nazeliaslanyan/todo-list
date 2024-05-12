import FormApi from '../../../utils/formApi.js';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export default {
    data: () => ({
        name: '',
        email: '',
        message: '',
        nameRules: [(v) => !!v || 'Name is required'],
        emailRules: [(v) => !!v || 'Email is required', (v) => emailRegex.test(v) || 'Invalid email']
    }),

    methods: {
        async sendForm() {
            const isValid = await this.validate()
            console.log('isValid', isValid)
            if (!isValid) {
                return
            }
            const form = {
                name: this.name,
                emeil: this.email,
                message: this.message
            }
            try {
                const formApi = new FormApi();
                const response = await formApi.sendForm(form);
                if (response.success) {
                    this.reset();
                    this.$toast.success('Form submitted successfully');
                } else {
                    this.$toast.error('Failed to submit form. Please try again later.');
                }
            } catch (error) {
                this.$toast.error('An error occurred while submitting the form. Please try again later.');
            }
        },

        async validate() {
            const { valid } = await this.$refs.form.validate()
            return valid
        },
        reset() {
            this.$refs.form.reset()
        }
    }
}