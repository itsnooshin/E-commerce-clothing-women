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
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchField({ initialQuery }: any) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState<string>('');
  const queryEl = searchParams.get("q") || ""; 
  const hanldeChangeSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search?q=${query}`);
  };

  return (
    <>
      <Container>
        
        <form onSubmit={hanldeChangeSearch} style={{ paddingBottom: "3rem" }}>
          <TextField
            defaultValue={initialQuery}
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

