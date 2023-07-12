interface BarChart {
    price: number;
    model: String; 
}

interface PieChart {
    avg: number;
    product: String;   
}

interface LineChart {
    price: number;
    model: String;   
}

interface DoughnutChart {
    avg: number;
    product: String;      
}

interface BubbleChart {
    x: number;
    y: number;
    r: number;
}

interface ScatterChart {
    x: number;
    y: number;
}

interface PolarAreaChart {
    avg: number;
    product: String;   
}

interface RadarChart {
    avg: number;
    product: String;   
}

export{PieChart, BarChart, LineChart, DoughnutChart, BubbleChart, ScatterChart, PolarAreaChart, RadarChart}
