<template>
        <div>
                <div class="content">
                        <div class="block" style="margin-top: 0">
                                <div class="quota-content">
                                        <div class="quota-item">
                                                <p>今日浏览量(PV)</p>
                                                <p class="num">{{ todayVisit }}</p>
                                        </div>
                                        <div class="quota-item">
                                                <p>今日IP数</p>
                                                <p class="num">{{ todayIpNum }}</p>
                                        </div>
                                        <div class="quota-item">
                                                <p>昨日浏览量(PV)</p>
                                                <p class="num">{{ yesterdayVisit }}</p>
                                        </div>
                                        <div class="quota-item">
                                                <p>昨日IP数</p>
                                                <p class="num">{{ yesterdayIpNum }}</p>
                                        </div>
                                        <div class="quota-item">
                                                <p>近{{ lineDateType }}天浏览量</p>
                                                <p class="num">{{ dateVisit }}</p>
                                        </div>
                                        <div class="quota-item">
                                                <p>近{{ lineDateType }}天IP数</p>
                                                <p class="num">{{ allVisitIp }}</p>
                                        </div>
                                </div>
                        </div>
                        <div class="block">
                                <div class="title-part">
                                        <div class="module-title">访客来源</div>
                                        <div class="day-switch">
                                                <div :class="mapDateType == '1' ? 'item active' : 'item'"
                                                        @click="setMap(1)">
                                                        今天
                                                </div>
                                                <div :class="mapDateType == '14' ? 'item active' : 'item'"
                                                        @click="setMap(14)">
                                                        最近14天
                                                </div>
                                                <div :class="mapDateType == '30' ? 'item active' : 'item'"
                                                        @click="setMap(30)">
                                                        最近30天
                                                </div>
                                                <div :class="mapDateType == '60' ? 'item active' : 'item'"
                                                        @click="setMap(60)">
                                                        最近60天
                                                </div>
                                        </div>
                                </div>
                                <div class="map-chart" id="map"></div>
                        </div>
                        <div class="block">
                                <div class="title-part">
                                        <div class="module-title">流量趋势</div>
                                        <div class="day-switch">
                                                <div :class="lineDateType == '7' ? 'item active' : 'item'"
                                                        @click="setLineChart(7)">
                                                        最近7天
                                                </div>
                                                <div :class="lineDateType == '14' ? 'item active' : 'item'"
                                                        @click="setLineChart(14)">
                                                        最近14天
                                                </div>
                                                <div :class="lineDateType == '30' ? 'item active' : 'item'"
                                                        @click="setLineChart(30)">
                                                        最近30天
                                                </div>
                                                <div :class="lineDateType == '60' ? 'item active' : 'item'"
                                                        @click="setLineChart(60)">
                                                        最近60天
                                                </div>
                                        </div>
                                </div>
                                <div class="line-chart" id="line-chart"></div>
                        </div>
                        <div class="block">
                                <div class="title-part">
                                        <div class="module-title">用户轨迹</div>
                                        <div class="day-switch">
                                                <div :class="userActionDateType == '1' ? 'item active' : 'item'"
                                                        @click="setUserAction(1)">
                                                        今天
                                                </div>
                                                <div :class="userActionDateType == '2' ? 'item active' : 'item'"
                                                        @click="setUserAction(2)">
                                                        最近2天
                                                </div>
                                                <div :class="userActionDateType == '3' ? 'item active' : 'item'"
                                                        @click="setUserAction(3)">
                                                        最近3天
                                                </div>
                                        </div>
                                        <div class="day-switch total-number give-up">
                                                轨迹总数：{{ totalUserAction }}条
                                        </div>
                                </div>
                                <div class="list">
                                        <div class="list-head">
                                                <div class="list-td">访问IP</div>
                                                <div class="list-td">操作内容</div>
                                                <div class="list-td align give-up">访问位置</div>
                                                <div class="list-td align give-up">访问设备</div>
                                                <div class="list-td align give-up">访问时间</div>
                                        </div>
                                        <div :class="i % 2 == 0 ? 'list-tr single' : 'list-tr'"
                                                v-for="(item, i) in userActionData" v-bind:key="i">
                                                <div class="list-td">{{ i }}</div>
                                                <div class="list-td action-padding">
                                                        <ul>
                                                                <!-- <li v-for="(item, i) in item.action" v-bind:key="i"
                                                                        v-html="item">
                                                                        {{ item }}
                                                                </li> -->
                                                        </ul>
                                                </div>
                                                <!-- <div class="list-td align give-up">{{ item.location }}</div> -->
                                                <!-- <div class="list-td align line-heigh give-up" v-html="item.browser"> -->
                                                <!-- {{ item.browser }} -->
                                        </div>
                                        <!-- <div class="list-td align give-up">{{ item.time }}</div> -->
                                </div>
                                <div class="list-item"></div>
                        </div>
                </div>
        </div>
        <!-- <Heartfelt></Heartfelt> -->
        <!-- </div> -->
</template>
    
<script>
export default {
        name: "HzhAccessAnalytics",
        components: {

        }
}
</script>
    
<style scoped lang="less">
@import "@/assets/css/hzh-base.less";

.block {
        background-color: @hzhWhite;
        margin-top: 1rem;
        padding: 1.5rem;
        border-radius: 2px;

        .quota-content {
                .hzh-flex('center');
                color: rgba(0, 0, 0, 0.65);

                .quota-item {
                        flex: 1;
                        text-align: center;

                        &.num {
                                font-size: 1.2rem;
                                margin-bottom: 0;
                        }
                }
        }
}

.title-part {
        display: flex;
        align-items: end;

        .module-title {
                font-size: 18px;
                font-weight: 500;
                height: 18px;
                line-height: 18px;
        }

        .day-switch {
                color: #999;
                font-size: 12px;
                line-height: 12px;
                display: flex;
                vertical-align: middle;
                margin-left: 1rem;
                cursor: pointer;
        }
}

.list {
        border: 1px solid #e9e9e9;
        margin-top: 1.5rem;
}

.total-number {
        color: @hzhDefaultFontColor;
        flex: 1;
        text-align: right;
        cursor: auto;
        display: block;
}

.item {
        padding: 0 0.5rem;
        border-right: 1px solid #999;

        &:first-child {
                padding-left: 0;
        }

        &:last-child {
                border-right: none;
        }

        &:hover {
                color: rgba(1, 189, 255, 0.75);
        }
}

.active {
        color: #01aaed;
}

.line-chart {
        height: 300px;
        margin-top: 1.5rem;
}

.map-chart {
        height: 400px;
}

.list-head {
        color: #8590a6;
        /*.hzh-flex(center);*/
        border-bottom: 1px solid #f0f0f0;
        padding: 8px 0;
}

.list-tr {
        /*.hzh-flex('center');*/
        padding: 8px 0;
        border-bottom: 1px solid #e9e9e9;
}

.list-td {
        flex: 1;
        padding-left: 1rem;
        overflow: hidden;
}

.line-heigh {
        line-height: 1.1rem;
}

.list-td:nth-child(1) {
        flex: 18%;
}

.list-td:nth-child(2) {
        flex: 37%;
}

.list-td:nth-child(3) {
        flex: 13%;
}

.list-td:nth-child(4) {
        flex: 10%;
        border-right: none;
        text-align: center !important;
}

.list-td:nth-child(5) {
        flex: 22%;
        border-right: none;
}

.list-td ul {
        margin-block-start: 0em;
        margin-block-end: 0em;
        padding-inline-start: 16px;
}

.list .single {
        background: #f6f6f6;
}

.list .align {
        text-align: right;
        padding-right: 1rem;
}

/*pc*/
@media only screen and (min-device-width: 768px) {
        .content {
                width: 1088px;
                margin: 74px auto 0;
        }
}

/*mobile*/
@media only screen and (max-device-width: 768px) {
        .content {
                margin: 88px auto 0;
        }

        .give-up {
                display: none !important;
        }

        .action-padding {
                padding-right: 1rem;
        }
}
</style>