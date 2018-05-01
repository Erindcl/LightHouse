<template>
  <div class="date" 
      :width = "width" 
      :dateSummary = "dateSummary"
      :startDate = "startDate"
      :endDate = "endDate">
      <div class="calen-title">
          <button class="left" 
                  @click="minMonth" 
                  :disabled="year <= startDate.year && month <= startDate.month"> &lt; </button> 
          <span>{{year}} - {{month}}</span>
          <button class="right" 
                  @click="addMonth"
                  :disabled="year >= endDate.year && month >= endDate.month">&gt;</button>
     </div>
     <div class="calendarBody" ref="calendarBody">
         <li class="block1"  :key="item.id" v-for="item in block"> </li>
         <li class="block"
             ref="blocklist"
             :class="unuse(index)"
             :key="item.id" 
             @click="hasSummary(index)"
             v-for="(item, index) in datelist">
             {{item}}
         </li>
         <li class="block1"  :key="item.id" v-for="item in block1"> </li>
     </div>
  </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default {
    data(){
        return {
            datelist:[],
            copyDate:[],
            block:[],
            block1:[],
            currentDate : {
                year:new Date().getFullYear(),
                month:(new Date().getMonth()+1),
                day: new Date().getDay
            }, 
            year: new Date().getFullYear(),
            month: (new Date().getMonth()+1),
            day: ''
        }
    },
    props:{
        startDate:{
            type: Object,
            default: function () {
                return {
                    year: 2017,
                    month: 10,
                    day: 5
                }
            }
        },
        endDate:{
            type: Object,
            default: function () {
                return {
                    year: 2018,
                    month: 4,
                    day: 3
                }
            }
        },
        dateSummary: {
            type: Object,
            default: function () {
                return {}
            }
        },
        width:{
            type: Number,
            default: 200
        }
    },
    watch: {
        month(val, oldVal){
            this.block1 = [],
            this.block = [],
            this.datelist = [],
            this.getDays(this.year,val)
        }
    },
    methods: {
        unuse(index) {
            if(this.year === this.startDate.year && this.month === this.startDate.month) {
                if((index + 1) < this.startDate.day) {
                    return 'disabled'
                }
            }
            if(this.year === this.endDate.year && this.month === this.endDate.month) {
                if((index + 1) > this.endDate.day) {
                    return 'disabled'
                }
            }
        },
        //获取每个月的天数，和星期
        getDays(year,month){
            let monthtotal = new Date(year,month,0).getDate()
            let dayOfWeek = new Date(year,(month - 1),1).getDay() === 0? 7 : new Date(year,(month - 1),1).getDay()
            let lastdayOfWeek = new Date(year,(month),1).getDay() === 1? 7 : (new Date(year,(month),1).getDay() - 1)
            for(let i = 0;i < (dayOfWeek - 1);i++) {
                this.block.push(i)
            }
            for(let i = 0;i < (7-lastdayOfWeek);i++) {
                this.block1.push(i)
            }
            for(let i = 1;i <= monthtotal;i++){
                this.datelist.push(i)
            }
            this.copyDate = this.datelist
        },
        //月份减1
        minMonth(){
            this.month--
            if(this.month === 0) {
                this.month = 12
                this.year--
            }

        },
        //月份加1
        addMonth() {
            this.month++
            if(this.month === 13) {
                this.month = 1
                this.year++
            }
        },
        hasSummary(index){
            for (var i = 0;i < this.datelist.length;i ++) {
                this.$refs.blocklist[i].style.border = '1px solid transparent'
            }
            this.$refs.blocklist[index].style.border = '1px solid #EA7C5A'
            let dateClick = {
                year: this.year,
                month: this.month,
                day: (index + 1)
            }
            let currentDate = (dateClick.year+'-'+dateClick.month+'-'+dateClick.day)
            
            axios.post('http://192.168.5.101:8080/goc/center/seldaysum',qs.stringify({
              'date': currentDate
            }))
            .then( res => {
                // console.log(currentDate)
                let _data = res.data
                console.log(_data)
                // _data.date = currentDate
                this.$emit('date-click', _data)
            })
        }
    },
    mounted(){
        // this.getDateList(2018,4)
        this.getDays(this.year,this.month)
    }
}
</script>
<style>
.calen-title{
    background-color: #e6e6e6
}
.calen-title span{
    height: 40px;
    line-height: 40px
}
.disabled{
    color:#e6e6e6;
    cursor:none
}
.disabled:hover{
    border:1px solid transparent !important;
}
.left{
    float: left;
    background:transparent;
    border:0px;
    line-height:38px;
    font-size:17px;
    cursor:pointer;
    padding-left:10px;
}
.date{
    display: inline-block;
    width:100%;
    text-align: center
}
.right{
    float: right;
    background:transparent;
    border:0px;
    line-height:38px;
    font-size:17px;
    padding-right:10px;
    cursor:pointer
}
.block,.block1 {
    width: 30px;
    margin: 10px;
    height: 30px;
    display: block;
    line-height: 30px;
    box-sizing: border-box;
    float: left;
    background: transparent;
}
.block{
    border: 1px solid transparent;
    cursor:pointer;
}
.block:hover{
    border: 1px solid #EA7C5A;
}
</style>

