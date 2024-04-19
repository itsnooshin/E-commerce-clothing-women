import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
} from "@mui/material";

import { AddIcCallOutlined } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

import MinimizeIcon from "@mui/icons-material/Minimize";
export default function AccordionProduct() {
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleClick = (id: any) => {
    setExpanded((open) => !open);
    setSelectedItem(id === selectedItem ? null : id);
  };

  const items = [
    {
      id: 1,
      name: "Fitting",
      content:
        "📐 We recommend taking your usual size. On average, customers say this style fits true to size.Amee (Studio Model) is 5'2, usually wears a XS and wears a size XS here.",
    },
    {
      id: 2,
      name: "Fabric & care",
      content:
        "Fabric :cupro luxe,Made in turkey, 100% cupro, 38% Elastane, 100% vegan materials Care: Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener",
    },
    {
      id: 3,
      name: "Product Detail",
      content:
        "Tailored + slim fit High waisted Elasticated waistband Cut out detail at the side finished with a gunmetal snap Side pockets Front pleats 3 cuff at the hem",
    },
    {
      id: 4,
      name: "Shipping And Return",
      content:
        "Shipping:is free on US , Canada orders are $175 Returns: Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#F0F2EF",
        marginTop: "3rem",
        width: { xs : '100%' , md: "560px"},
        marginBottom: "10rem",
      }}
    >
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <div key={index}>
            <Accordion
              expanded={selectedItem === item.id}
              onChange={() => handleClick(item.id)}
              key={item.id}
              sx={{
                bgcolor: "#F0F2EF",
                borderBottom: "none",
                boxShadow: "none",
                border: "1px solid #CBCBCB",
                padding: "0.7rem 1rem",
                borderRadius: "0 !important",
              }}
            >
              <AccordionSummary
                expandIcon={
                  selectedItem === item.id ? <MinimizeIcon /> : <AddIcon />
                }
                id={`panel${item.id}-header`}
                sx={{
                  fontWeight: "bold",
                  color: selectedItem === item.id ? "#748C70" : "#000000",
                }}
              >
                {item.name}
              </AccordionSummary>
              <AccordionDetails>{item.content}</AccordionDetails>
            </Accordion>
          </div>
        ))
      ) : (
        <div>No items to display</div>
      )}
    </Box>
  );
}
