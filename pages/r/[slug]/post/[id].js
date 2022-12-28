import { useRouter } from "next/router";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Navbar } from "../../../../components/subreddit/Navbar/Navbar";
import { Sidebar } from "../../../../components/subreddit/Sidebar/Sidebar";

export default function PostDetail() {
  const router = useRouter();
  const [anchor, setAnchor] = useState(false);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setAnchor(open);
  };
  const handleOpen = (open) => {
    setAnchor(!anchor);
  };
  return (
    <>
      <Navbar open={handleOpen} />
      <Drawer anchor="left" open={anchor} onClose={toggleDrawer(false)}>
        <Sidebar />
      </Drawer>
    </>
  );
}
