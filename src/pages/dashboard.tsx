import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  //Fica apontando um erro mas funciona 
  //colors: ['#d53f8c'],
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-09-18T00:00:00.000Z',
      '2021-09-19T00:00:00.000Z',
      '2021-09-20T00:00:00.000Z',
      '2021-09-21T00:00:00.000Z',
      '2021-09-22T00:00:00.000Z',
      '2021-09-23T00:00:00.000Z',
      '2021-09-24T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
} as const;

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 51, 17, 7] }
]

export default function Dashboard() {
  const [showChart, setShowChart] = useState(false);

  setTimeout(() => {
    setShowChart(true);
  }, 1)

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignContent="flex-start">
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >{/*Dentro desse text ficava: Inscritos da semana */}
            <Text fontSize="lg" mb="4" >Fichas da semana</Text>
            { showChart && (
              <Chart options={options} series={series} type="area" height={160} />
            ) }
          </Box>
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >{/*Dentro desse text ficava: Taxa de abertura */}
            <Text fontSize="lg" mb="4" >Total de fichas - MENSAL</Text>
            { showChart && (
              <Chart options={options} series={series} type="area" height={160} />
            ) }
          </Box>

        </SimpleGrid>
      </Flex>
    </Flex>
  )
}