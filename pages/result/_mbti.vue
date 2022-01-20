<template>
    <main>
        <img :src="result[mbti].img" :alt="result[mbti].title">
        <h1>{{result[mbti].title}}</h1>
        <p v-html="this.result[this.mbti].description"></p>
        <Button 
            text="다시 테스트하기" 
            :clickEvent="resetPage"
        />
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
    }, 
    methods: { 
        resetPage(){ 
            this.$store.dispatch('clickResetButton') 
            this.$router.push({ name : "index" })
        }
    }
}
</script>
<style>
   img{ 
       width: inherit;
       margin-bottom: 30px;
   }
</style>