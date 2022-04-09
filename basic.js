var app = Vue.createApp({ 
    data() {
        return {
            selected_word: '',
            method_word: '',
            m_word_length: 0,
            pressed: false
        }
    },
    mounted(){
        this.$refs.p.textContent = 'VAMOS A JUGAR CON VARIABLES COMPUTADAS! (por cierto, esto es una referencia)';
        this.$refs.p2.style.backgroundColor = '#66bb6a';
    },
    methods: {
        countCharsMethod() {
            this.pressed = true
            this.m_word_length = this.method_word.length;
        }
    },
    computed: {
        countChars() {
            return this.selected_word.length;
        }
    },

});
app.mount("#app")