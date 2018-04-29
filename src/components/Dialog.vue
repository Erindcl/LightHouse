<template>
  <div class="dialog" >
    <div class="content">
      {{message}}
    </div>
    <div class="d-footer">
       <button @click="toggleStatus">确定</button>
       <button @click="toggleStatus">取消</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  props: {
    showDialogs: {
      type: Boolean,
      default: false
    },
    message:{
        type: String,
        default: 'aaaaa'
    }
  },
  methods: {
    toggleStatus() {
      let showDialog = false
      this.$emit('toggleStatusDialog', showDialog);
    }
  }
}
</script>

<style>
.dialog{
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    box-sizing:border-box;
    position: relative;
}
.content{
  width:180px;
  height: 50px;
  margin:40px auto;
  text-align: center
}
.d-footer{
  position: absolute;
  height: 50px;
  bottom: 20px;
  right: 60px;
}
.d-footer button {
  margin-left: 15px;
  background-color: #ccc;
  border: 1px solid #ccc;
  padding: 3px 15px;
  border-radius: 3px;
}
</style>

