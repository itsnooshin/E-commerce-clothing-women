import { Box, Grid } from '@mui/material';

import SkeletonData from './SkeletonData';

function GridSkeletonData() {
  return (
    <Grid container spacing={4}>
      <Grid item md={4} xs={6}>
        <SkeletonData />
      </Grid>
      <Grid item md={4} xs={6}>
        <SkeletonData />
      </Grid>
      <Grid item md={4} xs={6}>
        <SkeletonData />
      </Grid>
    </Grid>
  );
}

export default GridSkeletonData;
