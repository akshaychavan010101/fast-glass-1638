import {
  Badge,
  Button,
  // Center,
  Flex,
  Heading,
  Image,
  Link,
  // SimpleGrid,
  Stack,
  Text,
  // grid,
  useColorModeValue,
  // Grid,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";

export default function OurTeam() {
  const [Cards, setCards] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCards(data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <Flex
      flexWrap={"wrap"}
      gap={"30px"}
      justifyContent={"center"}
      mt={"6rem"}
      mb={"4rem"}
    >
      {Cards?.map((items) => {
        return (
          <Stack
            outline={"auto"}
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "540px" }}
            height={{ sm: "476px", md: "20rem" }}
            direction={{ base: "column", md: "row" }}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            padding={4}
          >
            <Flex flex={1} bg="blue.200">
              <Image objectFit="cover" boxSize="100%" src={items["image"]} />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                {"BatMan"}
              </Heading>
              <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                @lindsey_jam3s
              </Text>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                Specialist in :-
                <Link href={"#"} color={"blue.400"}>
                  #tag
                </Link>
                me in your posts
              </Text>
              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
              >
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #art
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #photography
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #music
                </Badge>
              </Stack>

              <Stack
                width={"100%"}
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Button
                  flex={2}
                  fontSize={"sm"}
                  rounded={"full"}
                  _focus={{
                    bg: "gray.200",
                  }}
                >
                  Book Appointment
                </Button>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  Follow
                </Button>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Flex>
  );
}
