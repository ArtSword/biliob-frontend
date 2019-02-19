import Vue from "vue";
import ECharts from "vue-echarts/components/ECharts";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/dataZoom";
import "echarts/lib/component/radar";
import "echarts/lib/chart/radar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";

// // custom theme
import mydark from "./charts/theme/mydark.json";
import colorful from "./charts/theme/colorful.json";

// // registering custom theme
ECharts.registerTheme("mydark", mydark);
ECharts.registerTheme("colorful", colorful);

Vue.component("Chart", ECharts);
