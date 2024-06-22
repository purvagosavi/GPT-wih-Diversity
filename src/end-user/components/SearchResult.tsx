import { Card, CardContent, Grid, IconButton, Stack, Typography } from "@mui/material";
import { useCallback, useEffect, useRef } from "react";
import SimpleBar from "simplebar-react"
import 'simplebar-react/dist/simplebar.min.css';
import EditIcon from '@mui/icons-material/Edit';
interface ChatHistoryProps {
    data: any[];
   
  }
  
const SearchResult=({data=[]}:ChatHistoryProps )=>{
    const wrapper = useRef(document.createElement('div'));
    const el = wrapper.current;
    const scrollToBottom = useCallback(() => {
      el.scrollIntoView(false);
    }, [el]);
   
  useEffect(() => {
    scrollToBottom();
  }, [data.length, scrollToBottom]);

    return (<>
     <SimpleBar
        style={{
            overflowX: 'hidden',
            height: 'calc(100vh - 430px)',
            minHeight: 420
        }}
        >
             <Grid container spacing={2.5} ref={wrapper}>
             {data.map((history, index) => (
                <Stack spacing={1.25} direction="row">
                    <Grid container spacing={1} justifyContent="flex-end">
                        <Grid item xs={2} md={3} xl={4} />
                        <Grid item xs={10} md={9} xl={8}>
                  <Stack direction="row" justifyContent="flex-end" alignItems="flex-start">
                    
                    <IconButton size="small" color="secondary">
                      <EditIcon />
                    </IconButton>
                    <Card
                      sx={{
                        display: 'inline-block',
                        float: 'right',
                        bgcolor: 'blue',
                        boxShadow: 'none',
                        ml: 1
                      }}
                    >
                      <CardContent sx={{ p: 1, pb: '8px !important', width: 'fit-content', ml: 'auto' }}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Typography variant="h6" color={'white'}>
                              {history.text}
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Stack>
                </Grid>
                    
                    </Grid>
                </Stack>
                
             ))}
             </Grid>
                </SimpleBar>
    </>);
}

export default SearchResult;