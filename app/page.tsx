'use client';

import { Box, Flex, Stack } from "@chakra-ui/react";
import Image from "next/image";

const sample = {
  lists: [
    {
      name: "Backlog",
      cards: [
        {
          name: "teste",
          content: "teste",
        },
        {
          name: "teste1",
          content: "teste1",
        },
        {
          name: "test2",
          content: "test2",
        },
        {
          name: "teste3",
          content: "teste3",
        },
      ],
    },

    {
      name: "Atividades",
      cards: [
        {
          name: "teste",
          content: "teste",
        },
        {
          name: "teste1",
          content: "teste1",
        },
      ],
    },
    {
      name: "Em andamento",
      cards: [
        {
          name: "teste",
          content: "teste",
        },
        {
          name: "teste1",
          content: "teste1",
        },
      ],
    },
    {
      name: "Em andamento",
      cards: [
        {
          name: "teste",
          content: "teste",
        },
        {
          name: "teste1",
          content: "teste1",
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Flex
        p={15}
        bg={"transparent"}
        borderWidth={1}
        mx={"auto"}
        w={"100%"}
        h={"70vh"}
        borderRadius={8}
        flexDir={"row"}
        gap={4}
        overflow={'hidden'}
        overflowX={'scroll'}
      >
        {sample.lists.map((list) => (
          <Flex w={200} h={"90%"} bg={"lightgray"} p={2} flexDir={"column"} borderRadius={4} onDrop={(e)=>console.log(e)}>
            <Box>
              <h1>{list.name}</h1>
            </Box>
            <Flex flexDir={"column"} gap={2}>
              {list.cards.map((card) => (
                <Box
                  p={4}
                  bg={"blueviolet"}
                  h={100}
                  w={"100%"}
                  borderRadius={4}
                  draggable
                  onDrop={e=>console.log(e)}
                >
                  <h2 style={{ color: "#fff" }}>{card.name}</h2>
                </Box>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    // </main>
  );
}
