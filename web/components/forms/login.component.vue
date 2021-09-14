<template>
    <div class="login-card">
        <img width="250" src="/header-logo.png" />
        <form class="login-form">
            <label class="form-label"> Email </label>
            <input type="text" v-model="email" class="email-input login-input" />

            <label class="form-label"> Password </label>
            <input type="password" v-model="password" class="password-input login-input" />
        </form>
        <p v-show="errorText" class="error-text"> {{ errorText }} </p>
        <button :disabled="!email || !password" @click="onLogin" class="fv-button login-button"> Sign In </button>
    </div> 
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";

@Component({
    methods: {
        ...mapActions({
            setCurrentUser: "SET_CURRENT_USER"
        })
    },
    computed: {
        ...mapGetters({
            currentUser: "GET_CURRENT_USER"
        })
    }
})
export default class Login extends Vue {
    private xemail: string = "";
    private xpassword: string = "";
    private xerrorText: string = "";
    private setCurrentUser: (payload: any) => void;

    public get errorText(): string {
        return this.xerrorText;
    }
    public set errorText(value: string) {
        this.xerrorText = value;
    }

    public get email(): string {
        return this.xemail;
    }
    public set email(value: string) {
        this.xemail = value;
    }
    public get password(): string {
        return this.xpassword;
    }
    public set password(value: string) {
        this.xpassword = value;
    }

    public async onLogin() {
        await this["$auth"].loginWith('local', {
            data: {
                email: this.email,
                password: this.password
            }
        }).then(() => {
            this.setCurrentUser(this.$store['$auth'].$state.user)
        })
    }
}
</script>

<style>
.login-card {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-height: 50vh;
    margin: 10em auto;
    border: 1px solid rgba(128,128,128,.3);
    border-radius: 5px;
    width: 30%;
    flex-direction: column;
    background-color: #8f1e1e;
    position: relative;
}

.login-form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 85%;
    font-family: 'Noto Serif';
    font-size: 15px;
}

.email-input {
    margin-bottom: 5%;
}

.login-input {
    border-radius: 8px;
    width: 100%;
    line-height: 20px;
}

.login-button {
    border-radius: 8px;
    width: 25%;
}

.form-label {
    color: white;
}

.error-text {
    position: absolute;
    top: 13em;
    color: white;
    font-family: 'Noto Serif';
    font-weight: 100;
}

@media only screen and (min-width: 768px) and (max-width: 1025px) {
    .login-card {
        width: 50%
    }
}
@media (max-width: 767px) {
    .login-card {
        width: 94%
    }

    .error-text {
        top: 11em;
    }
}
</style>
