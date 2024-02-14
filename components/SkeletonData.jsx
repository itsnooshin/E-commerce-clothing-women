import { Box, Skeleton } from '@mui/material';

function SkeletonData() {
  return (
    <Box sx={{display :'flex' , flexDirection :'column' , gap : '2'}}>
      <Skeleton
        variant="rectangular"
        sx={{ fontSize: '1rem' }}
        height="430px"
      />
      <Skeleton variant="text" width="150px" />
      <Skeleton variant="text" width="100px" />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Skeleton variant="circular" width={20} height={20} />
        <Skeleton variant="circular" width={20} height={20} />
        <Skeleton variant="circular" width={20} height={20} />
      </Box>
    </Box>
  );
}

export default SkeletonData;
