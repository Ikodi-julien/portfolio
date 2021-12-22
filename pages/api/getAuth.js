// /api/getAuth
import { verify } from "jsonwebtoken";
import { jwtService } from "../../helpers/jwt.service";
import { options } from "../../helpers/cookie.service";
const JWT_SECRET = process.env.JWT_SECRET;

async function handler(req, res) {
  // GET /api/getAuth

  if (req.method === "GET") {
    console.log("1");
    const accessToken = req.cookies.access_token || "";
    const refreshToken = req.cookies.refresh_token || "";

    console.log("2", accessToken);
    console.log("3", refreshToken);
    try {
      console.log("4");
      const accessTokenPayload = verify(accessToken, JWT_SECRET);
      console.log("5", accessTokenPayload);

      const [newAccessToken, newRefreshToken] = jwtService.getTokens({
        id: accessTokenPayload.id,
        firstname: accessTokenPayload.firstname,
        lastname: accessTokenPayload.lastname,
        nickname: accessTokenPayload.nickname,
        email: accessTokenPayload.email,
        password: "",
      });
      console.log("6");

      res.cookie("access_token", newAccessToken, options);
      res.cookie("refresh_token", newRefreshToken, options);

      res.json({
        message: {
          id: accessTokenPayload.id,
          firstname: accessTokenPayload.firstname,
          lastname: accessTokenPayload.lastname,
          nickname: accessTokenPayload.nickname,
          email: accessTokenPayload.email,
        },
      });
    } catch (error) {
      console.log("7");
      if (error.name === "TokenExpiredError") {
        console.log("8");
        try {
          const refreshTokenPayload = _verify(refreshToken, JWT_SECRET);

          const [newAccessToken, newRefreshToken] = jwtService.getTokens({
            id: refreshTokenPayload.id,
            firstname: refreshTokenPayload.firstname,
            lastname: refreshTokenPayload.lastname,
            nickname: refreshTokenPayload.nickname,
            email: refreshTokenPayload.email,
            password: "",
          });

          res.cookie("access_token", newAccessToken, options);
          res.cookie("refresh_token", newRefreshToken, options);

          res.json({
            message: {
              id: refreshTokenPayload.id,
              firstname: refreshTokenPayload.firstname,
              lastname: refreshTokenPayload.lastname,
              nickname: refreshTokenPayload.nickname,
              email: refreshTokenPayload.email,
            },
          });
        } catch (error) {
          res.status(401).json(
            error.name !== "Error"
              ? error
              : {
                  message: error.message,
                }
          );
        }
      }

      if (error.name === "JsonWebTokenError") {
        console.log("9");
        res.status(401).json({ message: error.message });
      }

      if (error.name === "NotBeforeError") {
        console.log("10");
        res.status(401).json({ message: error.message });
      }
    }
    console.log("11");
  }
}
export default handler;
