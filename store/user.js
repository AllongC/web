export const state = () => ({
    userInfo: {}
})
export const mutations = {
    setUserInfo(state, data) {
        state.userInfo = data
    }
}
export const actions = {
    login({ commit }, data) {
        this.$axios({
            url: "/accounts/login",
            method: "post",
            data
        }).then(res => {
            const { data } = res;
            commit("setUserInfo", data);
        });
    }
}