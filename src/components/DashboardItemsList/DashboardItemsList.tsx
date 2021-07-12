import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../hooks/useStyles';

interface IDashboardItemProps {
  items: any[]
}

export default function DashboardItemsList({ items }: IDashboardItemProps) {
  const classes = useStyles();

  return (
    <div className={classes.dashboardItemsList}>
      {items.map((item: any) =>
        <Card key={item.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={item.image}
              title={item.name}
              alt={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
}
