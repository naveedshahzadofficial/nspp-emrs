<template>
    <div class="row d-flex align-items-center">
        <div class="col-sm-12 col-md-5">
            <div class="pagination-info">Showing {{ meta?.from || 0 }} to {{ meta?.to || 0 }} of {{ meta?.total }} records</div>
        </div>
        <div v-if="meta?.total > meta?.per_page" class="col-sm-12 col-md-7">
            <ul class="pagination pagination-circle pagination-outline justify-content-end">
                <li v-for="link in meta?.links" class="page-item m-1"
                    :class="{'active' : link.active, 'disabled' : !link.url}"
                >
                    <Link replace :href="link.url || '#'" class="page-link">
                        <i v-if="link.label.includes('Previous')" class="previous"></i>
                        <i v-else-if="link.label.includes('Next')" class="next"></i>
                        <template v-else>{{ link.label }}</template>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
    defineProps({
        meta: { type: Object, required: true },
        links: { type: Object, required: true },
    });
</script>
