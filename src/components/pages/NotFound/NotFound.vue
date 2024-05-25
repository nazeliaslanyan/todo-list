<template>
    <div class="not-found">
        <img :src="notFoundImage" alt="404 Error Image">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for might have been removed, had its name changed, or is temporarily
            unavailable.</p>
    </div>
</template>


<script>
import notFoundImage from '@/assets/error404.jpg';

export default {
    data() {
        return {
            notFoundImage: notFoundImage
        }
    }
}
</script>


<style scoped>
.not-found {
    text-align: center;
}
</style>