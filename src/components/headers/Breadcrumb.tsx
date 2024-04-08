import React, { PropsWithChildren } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import Typography from "@mui/material/Typography";

interface PropsType {
  name: string;
}

function MyBreadcrumbs(props: PropsWithChildren<PropsType>) {
  const { name } = props;
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ color: "#606060" }}>
      <Link href="/" style={{ color: "#748C70" }}>
        Home
      </Link>
      <Link href="/collection/all" style={{ color: "#748C70" }}>
        Shop All
      </Link>

      <Typography color="text.primary">{name}</Typography>
    </Breadcrumbs>
  );
}

export default MyBreadcrumbs;
