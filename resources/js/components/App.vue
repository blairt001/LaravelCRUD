<template>
    <div class="container">
        <transition name="false">
            <router-view></router-view>
        </transition>
    </div>
</template>


<script>
    export default {
        mounted(){
            console.log('Component Mounted.')
        }

    }
    </script>