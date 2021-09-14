export const state = () => {
    return {
        currentUser: {
            email: "",
            isAdmin: false,
            fullName: ""
        }
    }
}

export const mutations = {
    SET_CURRENT_USER(state, value) {
        state.currentUser = value
    }
}

export const actions = {
    SET_CURRENT_USER({ commit }, payload) {
        commit('SET_CURRENT_USER', payload)
    }
}

export const getters = {
    GET_CURRENT_USER(state) {
        return state.currentUser;
    }
}
