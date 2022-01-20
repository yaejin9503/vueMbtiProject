<template>
    <div>
        <h1>{{page + 1}}. {{question}}</h1>
        <Button 
            v-for="(item, index) in answers" 
            styleType="blue" 
            :key="index" 
            :text="item.text"
            :clickEvent="() => clickcBtn(item)"
            /> 
        <Progress/>
    </div>
</template>
<script>
export default {
    computed: { 
        // questions(){ 
        //     return this.$store.state.questions
        // },
        page(){ 
            return this.$store.state.page -1
        },
        question(){ 
            return this.$store.state.questions[this.$store.state.page -1].q
        }, 
        answers(){ 
            return this.$store.state.questions[this.$store.state.page -1].a
        }
    }, 
    methods: { 
       clickcBtn(item){ 
           this.$store.dispatch('clickButton',item.value)
           //console.log(this.page ,this.$store.state.questions.length);
           if(this.page === this.$store.state.questions.length){
               const result = this.$store.state.result
               const mbti_result = `${result.e > result.i ? 'e' : "i"}${result.s > result.n ? 's' : 'n'}${result.f > result.t ? 'f' : 't'}${result.j > result.p ? 'j' : 'p'}`
               this.$router.push(
                {
                    name: 'result-mbti', 
                    params: {
                        mbti: mbti_result
                    }
                }
            )
           }
       }
    }
}
</script>
<style>
    
</style>