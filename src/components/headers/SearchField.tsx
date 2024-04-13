import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  InputAdornment,
  Modal,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
export default function SearchField() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const hanldeChangeSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newQuery = new URLSearchParams(searchParams);
    newQuery.set("query", query);
    router.push(`/search?&${newQuery.toString()}`);
  };

  return (
    <>
      <Container>
        <form onSubmit={hanldeChangeSearch} style={{ paddingBottom: "3rem" }}>
          <TextField
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            sx={{
              borderBottom: "1px solid #ADADAD",
              paddingLeft: "1rem",
              paddingBottom: "0.7rem",
            }}
            fullWidth
            variant="standard"
            focused
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </form>
      </Container>
    </>
  );
}
// override the any