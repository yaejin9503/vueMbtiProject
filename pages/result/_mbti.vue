<template>
    <main>
        <!-- <img :src="result[mbti].img" :alt="result[mbti].title"> -->
        <!-- <h1>{{result[mbti].description}}</h1> -->
        <p v-html="this.result[this.mbti].description"></p>
    </main>
</template>
<script>
export default {
    data(){ 
        return { 
            mbti: null, 
            result: {}
        }
    },
    created(){ 
        this.mbti = this.$route.params.mbti
        this.result = this.$store.state.resultMbti
    } 
}
</script>
<style>
   
</style>