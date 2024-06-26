import {  Box, Card, CardContent,  Grid, IconButton,  TextField,FormControl} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchResult from "./SearchResult";
import { Formik ,Form} from "formik";
import EnmaRating from "./Rating";

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
    {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            LG
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">

          </IconButton>
        }
        title="Enma Smart"
      /> */}

    <Grid>
        <Card style={{background:'#fdf5f5'}} >
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
                    <Form onSubmit={handleSubmit}>
                    <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={1} paddingTop={2} paddingX={2}>
                        <Grid xs={11}>
                        <FormControl sx={{ width: '100%' }}>
                            <TextField 
                            id="search-bar"
                            className="form-control border-0 shadow-none "
                            onInput={(e) => {
                                // setSearchQuery(e.target.value);
                            }}
                            multiline
                            variant="standard"
                            placeholder="Type a message........."
                            size="small"
                            fullWidth
                            />
                            </FormControl>
                        </Grid>
                        <Grid xs={1} paddingLeft={5} alignItems={"self-end"}>
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon style={{ fill: "blue" }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                    </Form>
                )}
                </Formik>
                
            </CardContent>
        </Card>
      </Grid>

      </Card>
      </Grid>


    {/* Srearch Grid */}
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

    {/* Srearch Grid */}
        <EnmaRating/>
      </Grid>
      </Box>
    </>);
}

export default Landing;