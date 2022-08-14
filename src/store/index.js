import { createStore } from 'vuex'
import { hzhGetTimeInterval } from '@/utils/index'
import { hzhFetchSocial, hzhFetchSiteInfo } from '@/apis'

export default createStore({
  state: {
    hzhRunAt: '1617727560000',
    hzhTimer: null,
    hzhLoading: false,
    hzhRunTimeInterval: '',
    hzhSocials: '',
    hzhWebsiteInfo: ''
  },
  getters: {
    hzhLoading: state => state.hzhLoading,
    hzhRunTimeInterval: state => state.hzhRunTimeInterval,
    hzhNotice: state => state.hzhWebsiteInfo ? state.hzhWebsiteInfo.hzhNotice : ''
  },
  mutations: {
    HZH_SET_LOADING: (state, v) => {
      state.hzhLoading = v;
    },
    HZH_SET_SOCIALS: (state, v) => {
      state.hzhSocials = v;
    },
    HZH_SET_SITE_INFO: (state, v) => {
      state.hzhWebsiteInfo = v;
    },
    HZH_GET_RUNTIME_INTERVAL: (state) => {
      if (!(state.hzhTimer) || !state.hzhRunTimeInterval) {
        clearInterval(state.hzhTimer)
        state.hzhTimer = setInterval(() => {
          state.hzhRunTimeInterval = hzhGetTimeInterval(state.hzhRunAt)
        }, 1000);
      }
    }
  },
  actions: {
    hzhSetLoading: ({ commit }, v) => {
      commit('HZH_SET_LOADING', v);
    },
    hzhInitComputeTime: ({ commit }) => {
      commit('HZH_GET_RUNTIME_INTERVAL')
    },
    hzhGetSiteInfo: ({ commit, state }) => {
      return new Promise(resolve => {
        if (state.hzhWebsiteInfo) {
          resolve(state.hzhWebsiteInfo)
        } else {
          hzhFetchSiteInfo().then(res => {
            let data = res.data || {}
            commit('HZH_SET_SITE_INFO', data);
            resolve(data);
          }).catch(err => {
            resolve({});
          })
        }
      })
    },
    hzhGetSocials: ({ commit, state }) => {
      return new Promise((resolve => {
        if (state.hzhSocials) {
          resolve(state.hzhSocials)
        } else {
          hzhFetchSocial().then(res => {
            let data = res.data || []
            commit('HZH_SET_SOCIALS', data);
            resolve(data);
          }).catch((err) => {
            resolve([]);
          })
        }
      }))
    }
  },
  modules: {}
})
