<template>
  <div class="row">
    <div v-if="isShowDropDown">
      <label for="filter" class="form-label fw-bold">Select Month:</label><br/>
      <!-- <v-date-picker
        v-model="picker"
        type="month"
        :enable-time-picker="false"
        :clearable="true"
        auto-apply
        :format="format"
        :preview-format="format"
        placeholder="Select Month"
      ></v-date-picker> -->

      <datepicker
        v-model="picker"
        placeholder="Select Month"
        :minimum-view="'month'"
        :maximum-view="'month'"
      ></datepicker>
    </div>
    <div :id="chartId" :style="'height:'+chartHeight"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import Datepicker from 'vuejs3-datepicker';


Exporting(Highcharts);
export default defineComponent({
    components: {
            Datepicker
        },
        props: {
            chartId: String,
            chartTitle: String,
            chartHeight: String,
            chartType: String,
            isShowDropDown: Boolean,
            containerHeight: String,
            series: Array,
            xAxisxategories: Array,
            yAxis: Array,
            selectedCategory: String,
        },
        name: 'ChartComponent',
        emits: ['updateData'],
        data() {
            return {
                chartInstance: null as Highcharts.Chart | null,
                dataToParent: {},
                isShowMonth: true,
                month: '',
                monthMenu: false,
                picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                chartDate: "",
                viewMode: ref('year'),
                format: (date) =>{
                    const day = date.getDate()<10?'0'+date.getDate():date.getDate();
                    const month = (date.getMonth() + 1)<10?'0'+(date.getMonth() + 1):(date.getMonth() + 1);
                    const year = date.getFullYear();
                    return `${month}-${year}`;
                },
            };
        },
        watch: {
            picker: function () {
                // If only show months
                if (this.isShowMonth) {
                    // convert date to only year and month.
                    this.chartDate = this.picker.getFullYear() + '-' + (this.picker.getMonth() + 1);
                } else {
                    this.chartDate = this.chartDate = this.picker.getFullYear() + '-' + (this.picker.getMonth() + 1) + '-' + this.getDate();
                }
                this.handleChange(this.chartDate);

            },
            chartTitle: function (value) {
                console.log('here in chartTitle watch', this.chartTitle);
                if (this.chartInstance) {
                    this.chartInstance.setTitle({ text: value });
                }
            },
            series: function (value) {
                if (this.chartInstance) {
                    this.chartInstance.update({ series: value }, true, true);
                }
            },
            xAxisxategories: function (value) {
                if (this.chartInstance) {
                    this.chartInstance.update({ xAxis: {categories: value}}, true, true);


                }
            },
        },
        methods: {
            initChart() {
                // @ts-ignore
                this.chartInstance = Highcharts.chart(this.chartId, {
                    chart: {
                    type: this.chartType,
                    },
                    title: {
                    text: this.chartTitle,
                    },
                    xAxis: {
                        categories: this.xAxisxategories,
                        title: {
                            text: null,
                        },
                    },
                    yAxis: {
                        min: 0,
                        title: {
                        text: 'Values',
                        align: 'high',
                        },
                        labels: {
                        overflow: 'justify',
                        },
                    },
                    plotOptions: {
                        series: {
                            colorByPoint: true
                        }
                    },
                    series: this.series,
                    exporting: {
                        menuItemDefinitions: {
                            // Custom definition
                            label: {
                                onclick: function () {
                                    this.renderer.label(
                                        'You just clicked a custom menu item',
                                        100,
                                        100
                                    )
                                        .attr({
                                            fill: '#a4edba',
                                            r: 5,
                                            padding: 10,
                                            zIndex: 10
                                        })
                                        .css({
                                            fontSize: '1.5em'
                                        })
                                        .add();
                                },
                                text: 'Show label'
                            }
                        },
                        buttons: {
                            contextButton: {
                                // "printChart", 'label','separator' ,  'downloadPNG', 'downloadSVG'
                                menuItems: ["viewFullscreen" ]
                            }
                        }
                    },
                });
            },
            updateChart() {
                // Destroy the current chart and re-initialize it
                // @ts-ignore
                // Highcharts.charts[0].destroy();
                // this.$emit('updateData', this.picker);
                // console.log('i am called and event emitted...');
            },
            // handleInput(value: string) {
            //     console.log('Input event triggered with date:', value);
            // },
            handleChange(value: string) {
                // This function is used to send data to parent.
                // To make this component more generic, send chart id and date value to parent component and handle calls there...
                this.dataToParent['date'] = this.chartDate;
                this.dataToParent['chartId'] = this.chartId;
                this.$emit('updateData', this.dataToParent);

            },
            updateViewMode(mode) {
                this.viewMode = mode === 'year' ? 'year' : 'months'
            },
            onMonthChange(month: string){
            console.log('Selected Month:', month);
            },
        },
        mounted() {
            console.log('asdfad', this.formatedDate);
            this.initChart();
        },

    });
</script>

<style scoped>
.chart-container {
  width: 100%;
  /* height: 400px; */
}
</style>
