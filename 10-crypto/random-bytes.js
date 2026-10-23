import { randomBytes } from "node:crypto";

randomBytes(16, (err, buf) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Random Bytes: ", buf.toString("hex"));
});

//Output-1 : 19ac512f769faf85dfa00ff0f079b0aa
//Output-2 : 3e780d119ff66887ea06023659f8112f
//Output-3 : 24c958abef10d45eb04e60e6b2c9825e