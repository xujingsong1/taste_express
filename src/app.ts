import express from "express";
import path from "path";
const app = express();

// 使用静态资源 请求加上 /static前缀
app.use("/static", express.static(path.join(__dirname, "public")));
console.log(process.env.PORT);

app.listen(process.env.PORT || 8000, () => {
  console.log(`🚀 api duang ${process.env.PORT || 8000}`);
});
