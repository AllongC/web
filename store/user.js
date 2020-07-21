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
        return this.$axios({
            url: "/accounts/login",
            method: "post",
            data
        }).then(res => {
            const { data } = res;
            commit("setUserInfo", data);
            return res
        });
    },
    register({ commit }, data) {
        this.$axios({
            url: "/accounts/register",
            method: "post",
            data
        }).then(res => {
            const { data } = res;
            commit("setUserInfo", data);
            return res
        });
    }
}