import crypto from "crypto"

export const generateSessionToken = () => {
    return crypto.randomBytes(16).toString('base64');
};

export const authMiddleware = (req, res, next) => {
    if (!req.isAuthenticated()) {
      res.status(401).send('You are not authenticated')
    } else {
      return next()
    }
  }
  