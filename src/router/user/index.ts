import { router } from "../router";
import db from "../../db";
import { getUser, registeredUser } from "./api";
router.get(getUser, async (req, res, next) => {
  console.log(req.params);

  const a = await db.user.findFirst({
    where: {
      id: ~~req.params.id,
    },
  });
  console.log(a);
});

router.post(registeredUser, async (req, res, next) => {});

export default router;
