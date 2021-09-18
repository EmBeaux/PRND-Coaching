export const state = () => {
    return {
        currentUser: {
            email: "",
            isAdmin: false,
            fullName: ""
        },
        pageTexts: {}
    }
}

export const mutations = {
    SET_CURRENT_USER(state, value) {
        state.currentUser = value
    },
    RESET_PAGE_TEXTS(state) {
        state.pageTexts = {}
    },
    SET_SINGLE_PAGE_TEXT(state, payload) {
        state.pageTexts[payload.name] = payload.value
    },
    SET_PAGE_TEXTS(state, value) {
        state.pageTexts = value
    },
}

export const actions = {
    SET_CURRENT_USER({ commit }, payload) {
        commit('SET_CURRENT_USER', payload)
    },
    RESET_PAGE_TEXTS({ commit }) {
        commit('RESET_PAGE_TEXTS')
    },
    SET_SINGLE_PAGE_TEXT({ commit }, payload) {
        commit('SET_SINGLE_PAGE_TEXT', payload)
    },
    SET_PAGE_TEXTS({ commit }, payload) {
        commit('SET_PAGE_TEXTS', payload)
    }
}

export const getters = {
    GET_CURRENT_USER(state) {
        return state.currentUser;
    },
    GET_PAGE_TEXTS(state) {
        return state.pageTexts;
    }
}
