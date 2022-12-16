import { useTheme } from "@mui/material"
import { ResponsivePie } from "@nivo/pie"
import { tokens } from "../theme"
import { mockPieData as data} from "../data/mockData"

const PieChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    
    return (
        <ResponsivePie
        data={data} // Data to populate the bar chart

        // Various Styling for the Bar chart, see https://nivo.rocks/pie/
        //  for more documentation
        theme={{
            axis: {
                domain: {
                    line: {
                        stroke: colors.grey[100]
                    }
                },
                legend: {
                    text: {
                        fill: colors.grey[100]
                    }
                },
                ticks: {
                    line: {
                        stroke: colors.grey[100],
                        strokeWidth: 1,
                    },
                    text: {
                        fill: colors.grey[100],
                    }
                },
            },
            legends: {
                text: {
                    fill: colors.grey[100]
                }
            }
        }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.grey[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        // Pie slice fill styling
        fill={[
            {
                match: {
                    id: data[0].id
                },
                id: 'dots'
            },
            {
                match: {
                    id: data[1].id
                },
                id: 'dots'
            },
            {
                match: {
                    id: data[2].id
                },
                id: 'dots'
            },
            {
                match: {
                    id: data[4].id
                },
                id: 'lines'
            },
            {
                match: {
                    id: data[5].id
                },
                id: 'lines'
            },
            {
                match: {
                    id: data[7].id
                },
                id: 'lines'
            }
        ]}

        // Lengend styling
        legends={
            !isDashboard
            ? [
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 8,
                    itemWidth: 120,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]
            : undefined
        }
    />
    )
}


export default PieChart