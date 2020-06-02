<template>
    <div class="box">
        <img src="@/assets/images/thumb_simple_default.png" alt="">
        <p>该页面只有simple + super权限可见</p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.box{
    margin: 20px;
    background: #fff;
    height: 92%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        margin: 20px 0;
        color: #999;
    }
}
</style>