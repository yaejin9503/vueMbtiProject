/** 기본 적인 상태 정의 */
export const state = {
    page: 0, 
    questions : [
        { 
            q: '당신은 외향적이십니까?',
            a: [
                {
                    text: "네",
                    value: "e"
                },
                {
                    text: "아니요",
                    value: "i"
                }, 
            ]
        },
        { 
            q: '당신은 감각적이십니까?',
            a: [
                {
                    text: "네",
                    value: "s"
                },
                {
                    text: "아니요",
                    value: "n"
                }, 
            ]
        },
        { 
            q: '당신은 감정적이십니까?',
            a: [
                {
                    text: "네",
                    value: "f"
                },
                {
                    text: "아니요",
                    value: "t"
                }, 
            ]
        },
        { 
            q: '당신은 계획적이십니까?',
            a: [
                {
                    text: "네",
                    value: "j"
                },
                {
                    text: "아니요",
                    value: "p"
                }, 
            ]
        }
    ],
    resultMbti: {
        esfj: {
            img: "", 
            title: "", 
            description: "마크 사랑단<br/>ddd"
        }
    },
    result: { 
        e: 0, 
        i: 0, 
        s: 0, 
        n: 0, 
        t: 0, 
        f: 0,
        p: 0, 
        j: 0 
    }
}

/** 사용하고자 하는 commit들*/
/** state를 변경 한다. */
export const mutations = { 
    //질문에 응답을 했을 때, 저장되도록 반영함. 
    SET_USER_TYPE(state, type){ 
        state.result[type] += 1
        state.page +=1
    },
    // 첫번째 페이지로 이동
    PAGE_RESET(state){ 
        state.page = 0; 
        state.result = { 
            e: 0, 
            i: 0, 
            s: 0, 
            n: 0, 
            t: 0, 
            f: 0,
            p: 0, 
            j: 0 
        }
    }, 
    NEXT_PAGE(state, page){ 
        state.page = page 
    }
}

// 액션
//context (vue 홈페이지에서 검색해서 확인)
export const actions = { 
    clickButton({commit}, type){ 
        commit("SET_USER_TYPE", type)
    },
    clickResetButton({commit}) { 
        commit("PAGE_RESET")
    }
}


