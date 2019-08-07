import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user_info: {
            nom: '',
            prenom: '',
            email: '',
            password: '',
            address1: '',
            address2: '',
            numteleph: '',
            date_naissance: {
                jour: '',
                mois: '',
                annee: ''
            },
            cite: '',
            pays: '',
            education: [{
                nom_universite: '',
                niveau: '',
                address: '',
                date_debut: {
                    mois: '',
                    annee: ''
                },
                date_fin: {
                    mois: '',
                    annee: ''
                },
                description: '',
            }],
            work: [{
                nom_societe: '',
                post: '',
                address: '',
                date_debut: {
                    mois: '',
                    annee: ''
                },
                date_fin: {
                    mois: '',
                    annee: ''
                },
                description: '',
            }],
            competence: [{
                nom: '',
                niveau: ''
            }],
            langage: [{
                nom: '',
                niveau: ''
            }],
            selected_template_id: ''
        }
    },
    mutations: {
        change(state, user_info) {
            state.user_info = user_info
        }
    },
    getters: {
        user_info: state => state.user_info,
    }
})