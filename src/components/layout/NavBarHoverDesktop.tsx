import { Grid, Box, Typography, Container } from '@mui/material';
import Image from 'next/image';
import { PropsWithChildren } from 'react';
import { Options } from '@/src/types/MenuNavBarTypes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HoverMenuDesktop {
  options: Options[];
  isHoverd?: string;
  setHover: (hover: string) => void;
  setIsOpen: (hover: boolean) => void;
}

function HoverMenuDesktop(props: PropsWithChildren<HoverMenuDesktop>) {
  const { options, isHoverd, setHover } = props;
  const Options = options.filter((item) => isHoverd === item.name)!;
  const pathName = usePathname();
  // const hrefLink = options.flatMap((option) =>
  //   option.category?.map((item) =>
  //     item.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-'),
  //   ),
  // );
  const hrefLink = options.flatMap((option) =>
    option.category?.map((item) => item.toLowerCase().split(' ').slice(0, 1).join(' ')),
  );

  return (
    isHoverd && (
      <>
        <Box
          onMouseLeave={() => {
            setHover('');
          }}
          sx={{
            position: 'absolute',
            zIndex: '1000',
            width: '100%',
            height: '450px',
            backgroundColor: '#fff',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Container>
            <Grid container columns={15} spacing={2}>
              <Grid item md={3} sm={4} xs={12}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: '20px',
                  }}
                >
                  {Options.map((item, index) => (
                    <Typography key={index}>{item.nameCat}</Typography>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {Options.map((item) =>
                    item.category?.map((item, index) => (
                      <Link
                        href={`/${
                          hrefLink[index] === 'shop'
                            ? 'collection/all'
                            : `collection/${hrefLink[index]}`
                        }`}
                      >
                        <Typography key={index} sx={{ color: '#404040' }}>
                          {item}
                        </Typography>
                      </Link>
                    )),
                  )}
                </Box>
              </Grid>
              <Grid item md={2} sm={4} xs={12}>
                <Box
                  sx={{
                    color: '#0C0C0C',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: '20px',
                  }}
                >
                  {Options.map((items, index) => (
                    <Typography key={index}>{items.nameFeat}</Typography>
                  ))}
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {Options.map((items) =>
                    items.featured?.map((items, index) => (
                      <Typography key={index} sx={{ color: '#404040' }}>
                        {items}
                      </Typography>
                    )),
                  )}
                </Box>
              </Grid>
              <Grid item md={2} sm={4} xs={12}>
                <Box
                  sx={{
                    color: '#0C0C0C',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: '20px',
                  }}
                >
                  {Options.map((items, index) => (
                    <Typography key={index}>{items.nameMore}</Typography>
                  ))}
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {Options.map((items) =>
                    items.More?.map((items, index) => (
                      <Typography sx={{ color: '#404040' }} key={index}>
                        {items}
                      </Typography>
                    )),
                  )}
                </Box>
              </Grid>

              {Options.map((item) => {
                if (isHoverd !== item.name) return null;
                const gridSize = item.imageData?.length === 2 ? 4 : 2.6;
                return item.imageData?.map((imageUrl, index) => {
                  return (
                    <Grid item xs={gridSize} key={index}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          width: '100%',
                        }}
                      >
                        <Image
                          src={imageUrl}
                          style={{
                            objectFit: 'cover',
                            width: 'auto',
                          }}
                          alt="images for banner when user hover on links"
                          width={400}
                          height={400}
                        />

                        {item.imageDescription && (
                          <Typography>
                            {item.imageDescription[index]}
                          </Typography>
                        )}
                      </Box>
                    </Grid>
                  );
                });
              })}
            </Grid>
          </Container>
        </Box>
      </>
    )
  );
}

export default HoverMenuDesktop;
