import { app } from "./app";
import { userRoutes } from './Routes/User.routes';
import { newsRoutes } from './Routes/News.routes';
import { categoryRoutes } from './Routes/Category.routes';


app.use('/user', userRoutes);
app.use('/news', newsRoutes);
app.use('/category', categoryRoutes)

app.listen(1111, () => {

  console.log("O server já está rodando --- 🎃😎🤩");
})