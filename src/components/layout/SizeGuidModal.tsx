import React, { PropsWithChildren } from 'react';

import {
  Button,
  IconButton,
  Modal,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Table } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface PropsSize {
  open: boolean;
  handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function createData(name: string, waist: string, hips: string, chest: string) {
  return { name, waist, hips, chest };
}

const rows = [
  createData('XS', '159', '6.0', '24'),
  createData('S', '237', '9.0', ' 37'),
  createData('M', '262', '16.0', '24'),
  createData('L', '305', '3.7', '67'),
  createData('XL', '356', '16.0', '49'),
];

export default function SizeGuidModal(props: PropsWithChildren<PropsSize>) {
  const { open, handleClose, handleOpen } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: {  xs: '100%' , md :'550px'},
      }}
    >
      <Button onClick={handleOpen} sx={{ color: '#868686' }}>
        Size Guide
      </Button>
      {open && (
        <Modal
          open={open}
          style={{ backdropFilter: 'blur(5px)', border: 'none' }}
        >
          <Box
            sx={{
              position: 'absolute' as 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs : '100%'  , md :   '800px'},
              bgcolor: 'background.paper',
              borderRadius: '12px',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              variant="h5"
              fontFamily={'inherit'}
              fontWeight={'bold'}
              textAlign={'center'}
              mb={4}
            >
              Women Clothing's Chart
            </Typography>
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 10,
              }}
            >
              <CloseIcon />
            </IconButton>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>sizes (cm)</TableCell>
                    <TableCell>Waist</TableCell>
                    <TableCell>Hips</TableCell>
                    <TableCell>Chest</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((items) => (
                    <TableRow>
                      <TableCell>{items.name}</TableCell>
                      <TableCell>{items.waist}</TableCell>
                      <TableCell>{items.chest}</TableCell>
                      <TableCell>{items.hips}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Modal>
      )}
      {/* {open && <SizeGuidModal open={open} handleClose={handleClose} />} */}
    </Box>
  );
}
