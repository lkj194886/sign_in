

<template>
    <div class="MyInvitationFlex">
        <div>
            <nav-bar
                title="邀请进度"
                left-text="返回"
                right-text="说明"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
            />
        </div>
        <div class="MyInvitationTest">邀请进度<span>0/30</span></div>
        <div class="MyInvitationList">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>



<script>
import { NavBar } from "vant";
import { Dialog } from 'vant';
export default {

    components:{
        NavBar,
    },


    data() {
        return {
            coverInvitation:[
                {
                    CoverPhoto:"",
                    CoverPhone:"",
                    CoverTime:"",

                },
                {
                    
                },
                {
                    
                },
                {
                    
                },
                {
                    
                },
            ],
        }
    },


    methods:{
        onClickLeft() {
            this.$router.go(-1);
        },
        onClickRight(){
            Dialog.alert({
                title: '-- 邀请说明 --',
                messageAlign:'left',
                theme:'round-button',
                width:'80%',
                confirmButtonText:'知道了',
                message: '\n111111111111111111111111'+
                +'11111111111111111111111111111111'
                +'11111111111111111111111111111111'
                +'11111111111111111111111111111111'
                +'11111111111111111111111111111111'
                +'11111111111111111111111111111111'
                +'11111111111111111111111111111111'
                +'11111111111111111111111111111111'
                +'11111111111111111111111111111111'
                +'11111111111111111111111111111111'
                +'111111111111111111111111111111',
                }).then(() => {
                
            });
        }
    },

}
</script>



<style lang="scss" scoped>
    .MyInvitationTest{
        width: 100%;
        height: 40px;
        background-color: #f9f9f9;
        border-left: 30px solid rgb(187, 143, 143);
        font-size: 20px;
        padding-top: 10px;
        padding-left: 20px;
        span{
            color: grey;
            padding-left: 180px;
        }
    }
    .MyInvitationList{
        margin-top: 10px;
        border: 1px solid black;
        width: 90%;
        height: 80vh;
    }
</style>