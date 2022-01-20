<!-- Please remove this file from your project -->
<template>
  <!--인트로 페이지-->
  <main v-if="page===0">
    <img src="" alt="원피스 캐릭터들">
    <h1>나와 닮은 원피스 캐릭터 찾기</h1>
    <h2>나와 닮은 원피스 캐릭터는 누구 일까요?</h2>
    <Button text="테스트 시작" :clickEvent="startTest" />
  </main>
  <!--퀴즈 페이지-->
  <main v-else>
    <Question/>
  </main>
  </template>

<script>
  export default {
    name: 'Intro', 
    computed: {
      page(){ 
        return this.$store.state.page
      }
    },
    methods: { 
      startTest(){ 
        this.$store.commit('NEXT_PAGE', 1); 
      }
    }
  }
</script>
