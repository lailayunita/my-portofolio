// import {
//   Box,
//   Container,
//   Flex,
//   IconButton,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuList,
//   Text,
//   UnorderedList,
// } from "@chakra-ui/react";
// import { HiMenu } from "react-icons/hi";
// import NavItem from "./NavItem";

// const Navbar = () => {
//   return (
//     <Box bg="white" color="#616161" pos="sticky" top={0} zIndex="999">
//       <Container maxW="7xl" fontWeight="bold">
//         <Flex justify="space-between" py="4" alignItems="center">
//           <Text p="6px" fontSize="2xl">
//             Laila
//           </Text>
//           <UnorderedList
//             listStyleType="none"
//             display={{ base: "none", md: "inline" }}
//           >
//             <Flex gap={8}>
//               <NavItem>Home</NavItem>
//               <NavItem>About</NavItem>
//               <NavItem>Projects</NavItem>
//               <NavItem>Skills</NavItem>
//             </Flex>
//           </UnorderedList>
//           <Box display={{ base: "block", md: "none" }}>
//             <Menu>
//               <MenuButton
//                 as={IconButton}
//                 aria-label="Options"
//                 icon={<HiMenu />}
//                 variant="ghost"
//               />
//               <MenuList>
//                 <MenuItem>Home</MenuItem>
//                 <MenuItem>About</MenuItem>
//                 <MenuItem>Projects</MenuItem>
//                 <MenuItem>Skills</MenuItem>
//               </MenuList>
//             </Menu>
//           </Box>
//         </Flex>
//       </Container>
//     </Box>
//   );
// };

import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
  ];

  return (
    <>
      <Box bg="white" color="#616161" pos="sticky" top={0} zIndex="999">
        <Container maxW="7xl" fontWeight="bold">
          <Flex justify="space-between" py={4} alignItems="center">
            <Text p="6px" fontSize="2xl">
              Laila
            </Text>
            <Box display={{ base: "none", md: "inline" }}>
              <Flex gap={8}>
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    color="#616161"
                    p="6px 10px"
                    _hover={{
                      background: "#616161",
                      color: "white",
                      cursor: "pointer",
                      borderRadius: "6px",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetElement = document.querySelector(item.href);
                      if (targetElement) {
                        window.scrollTo({
                          top: targetElement.offsetTop,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Flex>
            </Box>
            <Box display={{ base: "block", md: "none" }}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HiMenu size="32px" />}
                  variant="ghost"
                />
                <MenuList fontSize="lg">
                  <MenuItem as="a" href="#home">
                    Home
                  </MenuItem>
                  <MenuItem as="a" href="#about">
                    About
                  </MenuItem>
                  <MenuItem as="a" href="#projects">
                    Projects
                  </MenuItem>
                  <MenuItem as="a" href="#skills">
                    Skills
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
