import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
interface SidebarProps {
  userName: string;
  type?: "admin" | "student";
}
export type { SidebarProps  };
export default function Sidebar({userName , type}: SidebarProps) {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}
        {/* <Text component={RouterNavLink} to="/">
          Test
        </Text> */}
      </Box>
      {/* แสดงผู้ใช้งาน */}
      <Group p={10}>
        <Indicator
          inline
          size={13}
          offset={7}
          position="bottom-end"
          color="green"
          withBorder
        >
          <Avatar component="a" target="_blank" src="me.jpg" alt="it's me" />
        </Indicator>
        <Text>User : {userName} : {type === "admin" ? "Admin" : "Student"}</Text>
      </Group>
    </Stack>
  );
}