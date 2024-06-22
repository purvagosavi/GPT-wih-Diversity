import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchResult from "./SearchResult";
import { Formik } from "formik";

const Landing=()=>{
    

    return (<>
    <Box
          sx={{
            p: { xs: 2.5, sm: 6 },
            height: `calc(100vh - 192px)`,
            display: 'flex',
            
            bgcolor: 'transparent'
          }}
        >
    <Grid container justifyContent={"space-between"} direction={"column"}>

    <Grid>
    <Card>
    <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            LG
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title="Enma Smart"
        // subheader="September 14, 2016"
      />

      </Card>
      </Grid>

        <Grid>
            <Card sx={{
          
            height: `calc(100vh - 400px)`,
           
          
          }}>
                <CardContent>
                <Grid container direction={"row"} justifyContent={"space-between"} xs={12}>
                    <Grid item sx={{ borderRight: 1,height: `calc(100vh - 450px)` }} xs={6}>
                        <Box  >
                            <SearchResult data={[]} />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <SearchResult data={[]} />
                        </Box>    
                    </Grid>
                </Grid>
                </CardContent>
            </Card>
        </Grid>

      <Grid>
        <Card>
            <CardContent>
            <Formik
                initialValues={{ search: '' }}
                validate={values => {
                    const errors = {};
                   
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                    <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Grid xs={11}>
                            <TextField 
                            id="search-bar"
                            className="form-control border-0 shadow-none"
                            onInput={(e) => {
                                // setSearchQuery(e.target.value);
                            }}
                            // label="Enter a city name"
                            variant="outlined"
                            placeholder="Search..."
                            size="small"
                            fullWidth
                            />
                        </Grid>
                        <Grid xs={1}>
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon style={{ fill: "blue" }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                    </form>
                )}
                </Formik>
                
            </CardContent>
        </Card>
      </Grid>
      </Grid>
      </Box>
    </>);
}

export default Landing;