<script>
    export default {
      methods: {
        changeDisplay_Sign: function () {
          this.$store.dispatch('auth_displaying/sign')
        },
        changeDisplay_Regi: function () {

          this.$store.dispatch('auth_displaying/register')
        },
      },

      computed: {
        //サインインか登録の描画判定のフラグです
        display_flg: function () {
          //後ほどpropsを変化させて、propsでbutton表示判定させたい
          return this.$store.getters['auth_displaying/getDisplay_Vuex'];
        }
      },
      template: `
        <div>
          <a v-if="display_flg === 1" v-on:click.prevent="changeDisplay_Regi" href="" class="mb-80 text-center sign-To-Register">新規登録しますか？</a>
          <a v-if="display_flg === 2" v-on:click.prevent="changeDisplay_Sign" href="" class="mb-80 text-center sign-To-Register">サインインしますか？</a>
        </div>
      `
    }
</script>


<!--
        <div>
          <a v-if="display_flg === 1" v-on:click.prevent="changeDisplay_Regi" href="" class="mb-80 text-center sign-To-Register">新規登録しますか？</a>
          <a v-if="display_flg === 2" v-on:click.prevent="changeDisplay_Sign" href="" class="mb-80 text-center sign-To-Register">サインインしますか？</a>
        </div>

--->