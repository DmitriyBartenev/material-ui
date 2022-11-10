import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';

import { Grid } from '@mui/material';
 
const GoodItem = (props) => {

    const {name, price, poster,setOrder} = props;

    return(
        <Grid item xs={12} md={4}>
            <Card
                sx={{
                    height:'100%'
                }}>
                <CardMedia 
                    image={poster}
                    alt={name}
                    title={name}
                    sx={{height: 140}}/>
                <CardContent>
                    <Typography
                        variant='h6'
                        component='h3'>{name}</Typography>
                    <Typography
                        variant='body1'
                        >Цена: {price} руб.</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant='text'
                        onClick={() => {
                            setOrder({
                                id:props.id,
                                name:props.name,
                                price:props.price
                            })
                        }}
                    >
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default GoodItem;