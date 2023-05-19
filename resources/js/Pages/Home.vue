<template>
    <Head title="Home" />
    <div>
        <h1>Inertiajs is {{ test }}</h1>

        <Link :href="route('about-us')">Go to about us</Link>
    </div>
</template>

<script>
import { Link, Head } from "@inertiajs/vue3";
export default {
    components: {
        Link,
        Head
    },
    props: ["test"],
};
</script>
