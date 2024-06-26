// material-ui
import {  Grid, Rating ,IconContainerProps,Button} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
      color: theme.palette.action.disabled,
    },
  }));

const customIcons: {
    [index: string]: {
      icon: React.ReactElement;
      label: string;
    };
  } = {
    1: {
      icon:<Button size='small'  variant="outlined" style={{width:'2px'}}>-1</Button>,
      label: '-1',
    },
    2: {
      icon: <Button variant="outlined" size='small'  >-2</Button>,
      label: '-2',
    },
    3: {
      icon: <Button size='small'  variant="outlined" style={{width:'2px'}}>-3</Button>,
      label: '-3',
    },
    4: {
      icon: <Button size='small'  variant="outlined" style={{width:'2px'}}>-4</Button>,
      label: '-4',
    },
    5: {
      icon: <Button size='small'  variant="outlined" style={{width:'2px'}}>-5</Button>,
      label: '-5',
    },
    6: {
        icon: <Button size='small'  variant="outlined" style={{width:'2px'}}>-6</Button>,
        label: '-6',
      },
    7: {
        icon: <Button size='small'  variant="outlined" style={{width:'2px'}}>-7</Button>,
        label: '-7',
      },
      8: {
        icon: <Button size='small'  variant="outlined" style={{width:'2px'}}>-8</Button>,
        label: '-8',
      },
      9: {
        icon: <Button size='small'  variant="outlined" style={{width:'2px'}}>-9</Button>,
        label: '-9',
      },
      10: {
        icon: <Button size='small'  variant="outlined" style={{width:'2px'}}>-10</Button>,
        label: '-10',
      },
  };
  function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
const EnmaRating=( )=>{
    // const [value, setValue] = useState<number | null>(5);
    return (<Grid item container justifyContent={'space-between'}>
        <Grid item container justifyContent={"center"} xs={6}>
        <StyledRating
            name="model1"
            defaultValue={-10}
            IconContainerComponent={IconContainer}
           
            getLabelText={(value: number) => customIcons[value].label}
            highlightSelectedOnly

            max={10}/>
           
        </Grid>
        <Grid container justifyContent={"center"} xs={6}>
        <StyledRating
            name="model1"
            defaultValue={-5}
            IconContainerComponent={IconContainer}
            getLabelText={(value: number) => customIcons[value].label}
            highlightSelectedOnly
            max={10}
            />
        </Grid>
        </Grid>);
}

export default EnmaRating;