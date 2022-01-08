import cookie from "cookie"
export default function handler(req, res) {
  if (req.method == 'GET') {
    res.setHeader("Get-Cookie", 'bukaresep');
    const cookies = cookie.parse(req.headers.cookie || "")
    res.status(200).json({ AuthTokens: cookies.authTokens })
  }
  if (req.method == 'POST') {
    res.setHeader("Set-Cookie", cookie.serialize('authTokens', req.body, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    }
    ));
    const cookies = cookie.parse(req.headers.cookie || "")
    res.status(200).json({ token: cookies.authToken })
  }
}

