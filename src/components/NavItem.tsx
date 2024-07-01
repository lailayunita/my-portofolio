import { Link, ListItem } from "@chakra-ui/react";
import { FC } from "react";

interface NavbarProps {
  children: string;
  href?: string;
}

const NavItem: FC<NavbarProps> = ({ children, href }) => (
  <ListItem
    p="6px 10px"
    _hover={{
      background: "#616161",
      color: "white",
      cursor: "pointer",
      borderRadius: "6px",
    }}
  >
    <Link href={href} _hover={{ textDecoration: "none" }}>
      {children}
    </Link>
  </ListItem>
);

export default NavItem;
