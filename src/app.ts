import express from "express";
import path from "path";
import user from "./router/user";
const app = express();

// 使用静态资源 请求加上 /static前缀
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/user", user);

app.listen(process.env.PORT || 8000, () => {
  console.log(`🚀 api duang http://localhost:${process.env.PORT || 8000}`);
});
